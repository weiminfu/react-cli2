import React, {Component} from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';

/*
* 相对于传统的redux，我们做的步骤优化：
*   1.导出的不再是我们创建的组件，而是基于connect构造后的高阶组件。
* export default connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2)(组件创建的组件)
*
*   2.react-redux帮我们做了一件非常重要的事情：以前我们需要自己基于subscribe方法向事件池追加方法，以达到容器状态信息改变，执行我们追加的方法，重新渲染组件的目的，但是现在不用了，react-redux帮我们做了这件事：“所有用到redux容器状态信息的组件，都会向事件池中追加一个方法，当状态信息改变，通知方法执行，把最新的状态信息作为属性传递给组件，组件的属性值改变了，组件也会重新渲染”
* */
/*class VoteBody extends Component {
	/!*constructor(props,context) {
		super(props,context);
		// 获取最新信息：
		let {store:{getState}}=this.props;
		let {n,m}=getState().vote;
		this.state={
			n,
			m
		}
	}
	
	componentDidMount() {
		// 监听最新值的变化：
		let {store:{getState,subscribe}}=this.props;
		let unsubcribe=subscribe(()=>{
			let {n,m}=getState().vote;
			this.setState({
				n,
				m
			})
		});
		// unsubcribe(); // 把当前追加的方法移除，解除绑定的方式
	}
	*!/
	
	constructor(props){
		super(props);
	}
	render() {
		let {n,m}=this.state;
		let rate='0%';
		if ((n+m)!==0){
			rate=((n/(n+m))*100).toFixed(2)+'%';
		}
		return (
			<div className='panel-body'>
			支持人数：<span>{n}</span>
				<br/>
			反对人数：<span>{m}</span>
				<br/>
			支持率：<span>{rate}</span>
			</div>
		);
	}
}

export default VoteBody;*/

class VoteBody extends Component {
	/*constructor(props,context) {
		super(props,context);
		// 获取最新信息：
		let {store:{getState}}=this.props;
		let {n,m}=getState().vote;
		this.state={
			n,
			m
		}
	}
	
	componentDidMount() {
		// 监听最新值的变化：
		let {store:{getState,subscribe}}=this.props;
		let unsubcribe=subscribe(()=>{
			let {n,m}=getState().vote;
			this.setState({
				n,
				m
			})
		});
		// unsubcribe(); // 把当前追加的方法移除，解除绑定的方式
	}
	*/
	
	constructor(props){
		super(props);
	}
	
	componentWillMount() {
		this.props.init({
			title:'我长得帅！',
			n:0,
			m:0
		});
	}
	
	
	render() {
		let {n,m}=this.props;
		let rate='0%';
		if ((n+m)!==0){
			rate=((n/(n+m))*100).toFixed(2)+'%';
		}
		return (
			<div className='panel-body'>
				支持人数：<span>{n}</span>
				<br/>
				反对人数：<span>{m}</span>
				<br/>
				支持率：<span>{rate}</span>
			</div>
		);
	}
}

/*// 把redux容器中的状态信息遍历，赋值给当前组件的属性(state)：
let mapStateToProps=(state)=>{
	// state：就是redux容器中的状态信息
	// 我们返回的是啥，就把它挂载到当前组件是属性上（redux中存储了很多信息，我们想用啥就返回啥即可）
	return {
		...state.vote
	}
};

// 把redux容器中的dispatch派发行为遍历，赋值给当前组件的属性（actionCreator）：
let mapDispatchToProps=(dispatch)=>{
	// dispatch:store中存储的dispatch方法
	// 返回的是啥，就把啥挂载到组件的属性上（一般我们挂载一些方法，这些方法中，完成了dispatch的派发任务）
	return {
		init(initData){
			dispatch(action.vote.init(initData));
		}
	}
};*/

/*export default connect(mapStateToProps,mapDispatchToProps)(VoteBody);*/

/*
* react-redux帮我们做了一件事情，把actionCreator中编写的方法（返回action对象的方法），自动构建成dispatch派发任务的方法，也就是mapDispatchToProps这种格式
* */
export default connect(state=>({...state.vote}),action.vote)(VoteBody);