import React, {Component} from 'react';
import PropTypes from 'prop-types';
class VoteFooter extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<button className='btn btn-success' onClick={()=>{
					window.myRedux.updateState((state)=>{
						let {n=0}=state;
						return {
							n:n+1
						}
					})
				}}>支持</button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button className='btn btn-danger' onClick={()=>{
					window.myRedux.updateState((state)=>{
						let {m=0}=state;
						return {
							m:m+1
						}
					})
				}}>反对</button>
			</div>
		);
	}
}

export default VoteFooter;