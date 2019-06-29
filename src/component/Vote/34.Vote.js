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
	}
	
	render() {
		let {store,count}=this.props;
		return (
			<div className='panel panel-default' style={{width:'50%',margin:'20px auto'}}>
				<VoteHead store={store}></VoteHead>
				<VoteBody count={count} store={store}></VoteBody>
				<VoteFooter store={store}></VoteFooter>
			</div>
		);
	}
}

export default Vote;