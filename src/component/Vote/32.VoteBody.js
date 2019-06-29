import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VoteBody extends Component {
	constructor(props,context) {
		super(props,context);
		
		this.state = {};
		
	}
	
	render() {
		return (
			<div className='panel-body'>
			支持人数：<span>0</span>
				<br/>
			反对人数：<span>0</span>
				<br/>
			支持率：<span>0</span>
			</div>
		);
	}
}

export default VoteBody;