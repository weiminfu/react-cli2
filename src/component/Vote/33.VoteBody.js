import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VoteBody extends Component {
	static contextTypes={
		n:PropTypes.number,
		m:PropTypes.number
	};
	constructor(props,context) {
		super(props,context);
		this.state={
			refresh:0
		}
	}
	
	componentDidMount() {
		window.myRedux.subscribe(()=>{
			this.setState({
				refresh:this.state.refresh+1
			})
		})
	}
	
	
	render() {
		let state=window.myRedux.getState();
		let {n=0,m=0}=state;
		let rate='0%';
		if ((n+m)!==0){
			rate=((n/(n+m))*100).toFixed(2)+'%';
		}
		return (
			<div className='panel-body'>
			支持人数：<span>{n}</span>
				<br/>
			反对人数：<span>{m}</span>
				<br/>
			支持率：<span>{rate}</span>
			</div>
		);
	}
}

export default VoteBody;