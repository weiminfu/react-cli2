import React, {Component} from 'react';
import {connect} from 'react-redux';
import action from '../../../store/action';

class Create extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {};
		
	}
	
	render() {
		return (
			<div>
				用户编号：<input type="text" ref='USER_ID'/>
				<br/><br/>
				用户姓名：<input type="text" ref='USER_NAME'/>
				<br/><br/>
				<button onClick={this.submit}>增加用户</button>
			</div>
		);
	}
	
	submit=ev=>{
		let {USER_ID,USER_NAME}=this.refs;
		let {create,history}=this.props;
		
		// dispatch行为派发
		create({
			id:USER_ID.value,
			name:USER_NAME.value
		});
		
		// go list
		USER_ID.value=USER_NAME.value='';
		history.push('/custom/list');
	}
}

export default connect(state=>({...state.custom}),action.custom)(Create);