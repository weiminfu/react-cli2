import React, {Component} from 'react';

class VoteHead extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};
		
	}
	
	render() {
		let {title}=this.props;
		return (
			<div className='panel-heading'>
				<h3 className='panel-title'>{title}</h3>
			</div>
		);
	}
}

export default VoteHead;