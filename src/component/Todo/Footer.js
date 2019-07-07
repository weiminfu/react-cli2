import React, {Component} from 'react';
import {connect} from "react-redux";
import action from "../../store/action";

class Footer extends Component {
	constructor(props) {
		super(props);
		
		// 自己构建展示按钮的数据
		this.showData = [
			{text: '全部', flag: 'all'},
			{text: '已完成', flag: 'completed'},
			{text: '未完成', flag: 'uncompleted'}
		];
	}
	
	
	render() {
		let {flag}=this.props;
		return (
			<div className='panel-footer'>
					<nav className='nav nav-pills' onClick={this.updateFilter}>
						{this.showData.map((item,index)=>{
							let {text,flag:itemFlag}=item;
							return <li className={itemFlag===flag?'presentation active':'presentation'} key={index}>
								<a href="javascript:;" itemflag={itemFlag}>{text}</a>
							</li>
						})}
					</nav>
			</div>
		);
	}
	
	updateFilter=ev=>{
		let target=ev.target;
		let tarTag=target.tagName;
		
		// 合并事件源：事件源是LI,也让其变为里面的A
		if (tarTag === 'LI') {
			target=target.firstElementChild;
			tarTag=target.tagName;
		}
		if (tarTag === 'A') {
			/*let text='all';
			if (target.innerHTML==='已完成'){
				text='completed';
			}
			if (target.innerHTML==='未完成'){
				text='uncompleted';
			}*/
			
			let text=target.getAttribute('itemflag');
			
			// 如果当前筛选的状态和点击的按钮是一致的，这样是没有必要重新更新筛选状态的
			if (this.props.flag === text) return;
			this.props.filter(text);
		}
	}
	
}

export default connect(state=>({...state.todo}),action.todo)(Footer);