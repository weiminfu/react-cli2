import React, {Component} from 'react';
import PropTypes from 'prop-types';
class VoteFooter extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		let {store:{dispatch}}=this.props;
		
		return (
			<div>
				<button className='btn btn-success' onClick={()=>{
					dispatch({
						type:'VOTE_SUPPORT'
					})
				}}>支持</button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button className='btn btn-danger' onClick={()=>{
					dispatch({
						type:'VOTE_AGAINST'
					})
				}}>反对</button>
			</div>
		);
	}
}

export default VoteFooter;