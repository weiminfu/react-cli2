import React, {Component} from 'react';
import {connect} from "react-redux";
import action from "../../store/action";

class Body extends Component {
	constructor(props) {
		super(props);
		
		this.state = {};
		
	}
	
	render() {
		// 获取redux中的任务数据，根据flag标识，筛选对应的内容
		let {data,flag}=this.props;
		data=data.filter((item)=>{
			let {state}=item;
			state=parseFloat(state);
			if (flag==='completed') {
				return state===1;
			}
			if (flag==='uncompleted') {
				return state===0;
			}
			return true;
		});
		return (
			<div className='panel-body'>
				<ul className='list-group'>
					{data.map((item,index)=>{
						let {id,name,state}=item;
						state=parseFloat(state);
						
						return <li className='list-group-item' key={index}>
							<input type="checkbox" name='todo'
							       checked={!!state} onChange={(ev)=>{
								// 更新当前任务的状态信息
								let newState=ev.target.checked?1:0;
								this.props.updateState(id,newState);
							}}/>
							<span className={state===1?'completed':''}>{name}</span>
							<a href="javascript:;" className='btn-danger' onClick={(ev)=>{
								let isOK=window.confirm('一旦删除将不能还原，确定要删除吗？');
								if (isOK) {
									this.props.remove(id);
								}
							}}>删</a>
						</li>
					})}
				</ul>
			</div>
		);
	}
}

export default connect(state=>({...state.todo}),action.todo)(Body);