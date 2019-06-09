import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

/*head*/
class Head extends React.Component{
	constructor(){
		super();
	}
	
	render() {
		return <div className='panel-heading'>
			{/*子组件通过属性获取父组件传递的内容*/}
			<h3 className='panel-title'>点击次数：{this.props.count}</h3>
		</div>
	}
}

/*body*/
class Body extends React.Component{
	constructor(){
		super();
	}
	
	render() {
		return <div className='panel-body'>
			<button className='btn btn-success' onClick={this.props.callBack}>点我啊！</button>
		</div>
	}
}

/*panel*/
class Panel extends React.Component{
	constructor(){
		super();
		this.state={
			n:0
		}
	}
	fn=()=>{
		// 修改Panel的状态信息
		this.setState({
			n:this.state.n+1
		})
	};
	
	render() {
		return <section className='panel panel-default' style={{width: '50%'}}>
			{/*父组件中在调取子组件的时候，把信息通过属性传递给子组件*/}
			<Head count={this.state.n}></Head>
			
			{/*父组件把自己的一个方法基于属性传递给子组件，目的是在子组件中执行这个方法*/}
			<Body callBack={this.fn}></Body>
		</section>
	}
}

let root = document.getElementById('root');
ReactDOM.render(<Panel></Panel>, root);