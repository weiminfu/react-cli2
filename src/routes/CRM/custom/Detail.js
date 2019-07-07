import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
	return {};
}

class Detail extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {};
		
	}
	
	render() {
		return (
			<div>
				编号：1
				<br/>
				姓名：某某某
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(Detail);