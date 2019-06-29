import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VoteBody extends Component {
	static contextTypes={
		n:PropTypes.number,
		m:PropTypes.number
	};
	constructor(props,context) {
		super(props,context);
		
		this.state = {};
		
	}
	
	render() {
		let {n,m}=this.context;
		return (
			<div className='panel-body'>
			支持人数：<span>{n}</span>
				<br/>
			反对人数：<span>{m}</span>
				<br/>
			支持率：<span>0</span>
			</div>
		);
	}
}

export default VoteBody;