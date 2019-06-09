import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

function queryData() {
	return new Promise(resolve => {
		setTimeout(()=>{
			resolve(2);
		},3000);
	});
}

class A extends React.Component{
	static defaultProps={}; // 这个是第一个执行的，执行完之后（给属性设置默认值之后）才向下执行
	
	constructor(){
		super();
		console.log('1=constructor');
		this.state={
			n:1
		}
	}
	
	/*componentWillMount() {
		console.log('2=willMount:第一次渲染之前', this.refs.HH); // undefined
		// 在willMount中，如果直接的setState修改数据，会把状态信息改变后，然后render和didMount执行。
		// 但是如果setState是放到一个异步操作中完成，（例如定时器或者从服务器获取数据），也是先执行render和didMount，然后再执行这个异步操作修改状态，紧接着走修改的流程（这样和放到didMount中执行没啥区别，所以我们一般把数据请求放到didMount中处理）
		// 真实项目中的数据绑定，一般第一次组件渲染，我们都是绑定的默认数据，第二次才是绑定的从服务器获取的数据（有些需求，我们需要根据数据是否存在判断显示或隐藏）
	}*/
	
	// 另外的willMount写法：
	async componentWillMount(){
		let result=await queryData();
		this.setState({
			n:result
		})
	}
	
	componentDidMount() {
		console.log('4=DidMount:第一次渲染之后',this.refs.HH); // div
		/*
		* 真实项目中，在这个阶段一般做如下处理：
		* 1.控制状态信息更改的操作
		* 2.从服务器获取数据，然后修改状态信息，完成数据绑定
		* */
		
		setInterval(()=>{
			this.setState({
				n:this.state.n+1
			})
		},5000)
	}
	
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		/*
		* 在这个钩子函数中，我们获取的state不是最新修改的，而是上一次的state值。
		* 例如：第一次加载完成，5000ms后，我们基于setState把n由1修改为2，但是此处获取的n还是1
		* 但是这个方法有三个参数：
		*   nextProps 最新修改的属性
		*   nextState 最新修改的状态信息
		*   nextContext 最新修改的内容信息
		* */
		console.log('5=是否允许更新，函数返回true就是允许，返回false是不允许');
		// if (this.state.n>3) {
		// 	return false;
		// }
		
		if (nextState.n>3) {
			return false;
		}
		return true;
	}
	
	componentWillUpdate(nextProps, nextState, nextContext) {
		// 这里获取的状态也是更新之前的值
		console.log('6=组件更新之前',this.state.n);
	}
	
	componentDidUpdate(nextProps, nextState, nextContext) {
		// 这里获取的状态是更新之后的值
		console.log('8=组件更新之后',this.state.n);
	}
	
	render() {
		console.log('render');
		return <div ref={'HH'}>{this.state.n}</div>
	}
}

let root = document.getElementById('root');
ReactDOM.render(<A></A>, root);