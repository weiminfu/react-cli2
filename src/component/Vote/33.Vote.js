import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import VoteHead from "./VoteHead";
import VoteBody from "./VoteBody";
import VoteFooter from "./VoteFooter";

class Vote extends Component {
	static defaultProps={
		title:'',
		count:{
			n:0,
			m:0
		}
	};
	
	constructor(props) {
		super(props);
		let {count:{n,m}}=this.props;
		window.myRedux.updateState(state=>{
			return {
				...state,
				n,
				m
			}
		})
	}
	
	render() {
		let {title,count}=this.props;
		return (
			<div className='panel panel-default' style={{width:'50%',margin:'20px auto'}}>
				<VoteHead title={title}></VoteHead>
				<VoteBody count={count}></VoteBody>
				<VoteFooter></VoteFooter>
			</div>
		);
	}
}

export default Vote;