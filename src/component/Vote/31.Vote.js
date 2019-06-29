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
		m:PropTypes.number
	};
	getChildContext(){
		// return的是啥，相当于给子组件上下文设置的是啥
		let {count:{n=0,m=0}}=this.props;
		return {
			n,
			m
		}
	};
	
	constructor(props) {
		super(props);
		
		this.state = {};
		
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