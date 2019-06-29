import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

/*
// 基于函数式声明创建组件
export default function Vote(props) {
	// props:调取组件的时候传递进来的属性信息（可能包含：className、id、style、children等）
	// console.log(props.children);
	return <section className='panel panel-default' style={{width:'60%',margin:'20px auto'}}>
		<div className='panel-heading'>
			<h3 className='panel-title'>{props.title}</h3>
		</div>
		<div className='panel-body'>
			支持人数：<span>0</span>
			<br/>
			反对人数：<span>0</span>
			<br/>
			支持率：<span>0%</span>
			<br/>
			<br/>
			{/!*存放自己调取组件的时候，额外扩展的标记*!/}
			{props.children}
			{/!*{React.Children.map(props.children,(item,index)=>{
				return index===1?item:null;
			})}*!/}
		</div>
		<div className='panel-footer'>
			<button className='btn btn-success'>支持</button>
			&nbsp;&nbsp;
			<button className='btn btn-danger'>反对</button>
		</div>
	</section>
}*/


// 基于类创建组件:基于继承Component类实现的
// 通过修改state改变视图
/*export default class Vote extends React.Component{
	constructor(props){
		super(props); //=>相当于 React.Component.call(this)，可以把Component类中的私有属性继承过来 this.props、this.state、this.setState、this.context、this.updater、this.refs
		this.state={
			n:0,
			m:0
		}
	}
	render() {
		let {title,children}=this.props;
		let {n,m}=this.state;
		let rate= n+m===0?'0':(((n/(n+m))*100).toFixed(2)+'%');
		return <section className='panel panel-default' style={{width:'60%',margin:'20px auto'}}>
			<div className='panel-heading'>
				<h3 className='panel-title'>{title}</h3>
			</div>
			<div className='panel-body'>
				支持人数：<span>{n}</span>
				<br/>
				反对人数：<span>{m}</span>
				<br/>
				支持率：<span>{rate}</span>
				<br/>
				<br/>
				{children}
			</div>
			<div className='panel-footer'>
				<button className='btn btn-success' onClick={this.support}>支持</button>
				&nbsp;&nbsp;
				<button className='btn btn-danger' onClick={this.against}>反对</button>
			</div>
		</section>
	}
	
	support=ev=>{
		// 使用箭头函数是为了保证方法中的this永远是当前实例（无论在哪里执行）
		// ev.target:获取当前操作的事件源（DOM元素）
		this.setState({
			// setState()方法：修改状态信息并且通知render()方法重新渲染（异步操作：如果有其他代码执行，先执行其他代码，然后再去通知状态修改）
			n:this.state.n+1
		},()=>{
			// 回调函数（一般不用）：作用是，当通知状态更改完成，并且页面重新渲染完成后，执行回调函数
		})
	};
	
	against=ev=>{
		this.setState({
			m:this.state.m+1
			// m:this.state.m++ 为何不能用++
			/!*
			* ++的意思是先执行m:this.state.m完成后，再加加，
			* 因为setState是异步操作，m:this.state.m这步操作由于是异步，会放到等待区，
			* 接下来执行++的操作（也就是m:this.state.m+1）,
			* 加加结束了，再把异步中等待区的m:this.state.m拿来执行，
			* 最终结果是状态m的值没有被修改，
			* 所以只能用m:this.state.m+1
			* *!/
		})
	}
}*/

// 通过操作DOM修改数据
// ref是react中提供操作DOM的方案
// 1.给需要操作的元素设置ref（保持唯一，否则会冲突覆盖）；
// 2.在实例上挂载了refs属性，它是一个对象，存储了所有设置了ref的元（ref值：元素对象）
export default class Vote extends React.Component {
	constructor(props) {
		super(props); //=>相当于 React.Component.call(this)，可以把Component类中的私有属性继承过来 this.props、this.state、this.setState、this.context、this.updater、this.refs
	}
	
	render() {
		let {title, children} = this.props;
		return <section className='panel panel-default' style={{width: '60%', margin: '20px auto'}}>
			<div className='panel-heading'>
				<h3 className='panel-title'>{title}</h3>
			</div>
			<div className='panel-body'>
				支持人数：<span ref={'AA'}>0</span>
				<br/>
				反对人数：<span ref={'BB'}>0</span>
				<br/>
				支持率：<span ref={'RATE'}>0</span>
				<br/>
				<br/>
				{children}
			</div>
			<div className='panel-footer'>
				<button className='btn btn-success' onClick={this.support}>支持</button>
				&nbsp;&nbsp;
				<button className='btn btn-danger' onClick={this.against}>反对</button>
			</div>
		</section>
	}
	
	support = ev => {
		this.refs.AA.innerHTML++;
		this.computed();
	};
	
	against = ev => {
		this.refs.BB.innerHTML++;
		this.computed();
	};
	
	computed = () => {
		let {AA, BB, RATE} = this.refs;
		let n = parseFloat(AA.innerHTML);
		let m = parseFloat(BB.innerHTML);
		let rate = n + m === 0 ? '0' : (((n / (n + m)) * 100).toFixed(2) + '%');
		RATE.innerHTML = rate;
	};
	
}
