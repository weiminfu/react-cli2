import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {};
}

class Home extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {};
		
	}
	
	render() {
		return (
			<div>
				我是首页Home
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(Home);