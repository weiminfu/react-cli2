import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VoteBody extends Component {
	constructor(props,context) {
		super(props,context);
		// 获取最新信息：
		let {store:{getState}}=this.props;
		let {n,m}=getState();
		this.state={
			n,
			m
		}
	}
	
	componentDidMount() {
		let {store:{getState,subscribe}}=this.props;
		let unsubcribe=subscribe(()=>{
			let {n,m}=getState();
			this.setState({
				n,
				m
			})
		});
		// unsubcribe(); // 把当前追加的方法移除，解除绑定的方式
	}
	
	
	render() {
		let {n,m}=this.state;
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