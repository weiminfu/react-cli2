import React, {Component} from 'react';

class VoteFooter extends Component {
	constructor(props,context) {
		super(props,context);
		
		this.state = {};
		
	}
	
	render() {
		return (
			<div>
				<button className='btn btn-success' >支持</button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button className='btn btn-danger' >反对</button>
			</div>
		);
	}
}

export default VoteFooter;