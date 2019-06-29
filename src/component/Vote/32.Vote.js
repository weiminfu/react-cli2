import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import VoteHead from "./VoteHead";
import VoteBody from "./VoteBody";
import VoteFooter from "./VoteFooter";

class Vote extends Component {
	static defaultProps={
		title:'这是默认标题，可以修改',
		count:{
			n:0,
			m:0
		}
	};
	
	// 上下文传递
	/*
	* 在父组件中:
	*   1.设置子组件上下文属性值类型
	*   2.获取子组件的上下文（设置子组件的上下文属性信息）
	*   3.在子组件中：设置、使用传递进来的上下文类型
	* */
	static childContextTypes={
		n:PropTypes.number,
		m:PropTypes.number,
		callBack:PropTypes.func
	};
	getChildContext(){
		// return的是啥，相当于给子组件上下文设置的是啥
		// 只要render重新渲染，就会执行这个方法，重新更新父组件的上下文信息，
		// 如果父组件上下文信息更改了，子组件在重新调取的时候，会使用最新的上下文信息，
		// 顺序是：render => context => 子组件调取渲染
		let {n,m}=this.state;
		return {
			n,
			m,
			callBack:this.updateContext
		}
	};
	
	updateContext=(type)=>{
		if (type==='support'){
			this.setState({
				n:this.state.n+1
			})
		}
		if (type==='against'){
			this.setState({
				m:this.state.m+1
			})
		}
	};
	
	constructor(props) {
		super(props);
		let {count:{n=0,m=0}}=this.props;
		this.state = {
			n,
			m
		};
		
	}
	
	render() {
		let {title,count}=this.props;
		return (
			<div className='panel panel-default' style={{width:'50%',margin:'20px auto'}}>
				<VoteHead title={title}></VoteHead>
				<VoteBody count={count}></VoteBody>
				<VoteFooter></VoteFooter>
			</div>
		);
	}
}

export default Vote;