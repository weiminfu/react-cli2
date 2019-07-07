import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {};
}

class Plan extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {};
		
	}
	
	render() {
		return (
			<div>
				我是计划管理页面Plan
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(Plan);