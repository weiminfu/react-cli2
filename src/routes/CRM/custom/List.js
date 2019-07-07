import React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {};
		
	}
	
	render() {
		let {data}=this.props;
		return (
			<ul className='list-group'>
				{data.map((item,index)=>{
					let {id,name}=item;
					return <li className='list-group-item' key={index}>
						编号：{id}
						&nbsp;&nbsp;&nbsp;
						姓名：{name}
					</li>
				})}
			</ul>
		);
	}
}

export default connect(state=>({...state.custom}))(List);