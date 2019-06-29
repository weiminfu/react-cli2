import React, {Component} from 'react';
import PropTypes from 'prop-types';
class VoteFooter extends Component {
	static contextTypes={
		callBack:PropTypes.func
	};
	constructor(props) {
		super(props);
		
		this.state = {};
		
	}
	
	render() {
		let {callBack}=this.context;
		return (
			<div>
				<button className='btn btn-success' onClick={()=>{
					callBack('support');
				}}>支持</button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button className='btn btn-danger' onClick={()=>{
					callBack('against');
				}}>反对</button>
			</div>
		);
	}
}

export default VoteFooter;