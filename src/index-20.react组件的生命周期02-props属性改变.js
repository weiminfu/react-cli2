import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class A extends React.Component{
	constructor(){
		super();
	}
	
	componentWillMount() {
		console.log('2=willMount:第一次渲染之前', this.refs.HH);
	}
	
	componentDidMount() {
		console.log('4=DidMount:第一次渲染之后',this.refs.HH); // div
	}
	
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return true;
	}
	
	componentWillReceiveProps(nextProps, nextContext) {
		console.log('组件属性改变',this.props.n,nextProps.n);
		// 属性改变也会触发子组件重新渲染，继续完成修改这套流程
	}
	
	render() {
		console.log('render');
		return <div ref={'HH'}>{this.props.n}</div>
	}
}

class B extends React.Component{
	constructor(){
		super();
		this.state={
			n:1
		}
	}
	componentDidMount() {
		setTimeout(()=>{
			this.setState({
				n:2
			})
		},3000);
	}
	
	render() {
		// 复合组件：组件嵌套（大组件嵌套小组件）
		return <div>
			{/*把父组件的状态信息作为属性传递给子组件*/}
			<A n={this.state.n}></A>
		</div>
	}
}

let root = document.getElementById('root');
ReactDOM.render(<B></B>, root);