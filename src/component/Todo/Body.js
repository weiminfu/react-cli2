import React, {Component} from 'react';
import {connect} from "react-redux";
import action from "../../store/action";

class Body extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};
		
	}
	
	render() {
		return (
			<div className='panel-body'>
				<ul className='list-group'>
					<li className='list-group-item'>
						<input type="checkbox" name='todo'/>
						<span>吃饭</span>
						<a href="javascript:;" className='btn-danger'>删</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(state=>({...state.todo}),action.todo)(Body);