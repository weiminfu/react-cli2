import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'


class Vote extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return <section className='panel panel-default' style={{width: '60%', margin: '20px auto'}}>
			<div className='panel-heading'>
				<h4>{this.props.title}</h4>
			</div>
			<div className='panel-body'>
				{/*支持人数：<span id={'spanLeft'}>0</span>*/}
				
				{/*之前ref='spanLeft是在当前实例上挂载一个属性refs（它是一个对象）,存储所有的ref元素'*/}
				{/*现在x=>this.spanLeft=x，x代表当前元素，它的意思是把当前元素直接挂载到实例上，后期需要用到元素，直接this.spanLeft获取即可*/}
				支持人数：<span ref={x=>this.spanLeft=x}>0</span>
				<br/>
				反对人数：<span ref={x=>this.spanRight=x}>0</span>
				<br/>
				支持率：<span ref={x=>this.spanRate=x}>0%</span>
			</div>
			<div className='panel-footer'>
				<button className='btn btn-success' onClick={this.support}>支持</button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button className='btn btn-danger' onClick={this.against}>反对</button>
			</div>
		</section>
	}
	
	/*support(){
		// this:undefined
	}*/
	// 箭头函数写方法，保证this是实例
	support=(ev)=>{
		/*let spanLeft=document.getElementById('spanLeft');
		spanLeft.innerHTML++; // 相当于spanLeft.innerHTML=Number(spanLeft.innerHTML)+1;*/
		
		/*
		* refs:是react中专门提供通过操作DOM来实现需求的方式，
		* 它是一个对象，存储了当前组件中所有设置了ref属性的元素，
		* ref属性值是啥，refs中存储的元素的属性名就是啥，长得如下：
		* {
		*   spanLeft:span,
		*   spanRight:span,
		*   spanRate:span
		*
		* }
		* */
		// console.log(this.refs);
		
		let {spanLeft}=this;
		spanLeft.innerHTML++;
		this.computed();
	};
	against=(ev)=>{
		let {spanRight}=this;
		spanRight.innerHTML++;
		this.computed();
	};
	computed(){
		let {spanLeft,spanRight,spanRate}=this;
		let n=parseFloat(spanLeft.innerHTML);
		let m=parseFloat(spanRight.innerHTML);
		let rate=(n+m)===0?'0%':((n/(n+m)*100).toFixed(2)+'%');
		spanRate.innerHTML=rate;
	}
}

let root = document.getElementById('root');
ReactDOM.render(<div>
	<Vote title={'世界杯小组赛：法国VS秘鲁，法国队必胜！'}></Vote>
	<Vote title={'世界杯小组赛：阿根廷VS德哥，德哥队必胜！'}></Vote>
</div>, root);