import React, {Component} from 'react';
import {connect} from "react-redux";
import action from "../../store/action";

class Footer extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};
		
	}
	
	render() {
		return (
			<div className='panel-footer'>
					<nav className='nav nav-pills'>
						<li className='presentation active'>
							<a href="javascript:;">全部</a>
						</li>
						<li className='presentation'>
							<a href="javascript:;">已完成</a>
						</li>
						<li className='presentation'>
							<a href="javascript:;">未完成</a>
						</li>
					</nav>
			</div>
		);
	}
}

export default connect(state=>({...state.todo}),action.todo)(Footer);