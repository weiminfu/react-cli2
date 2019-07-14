import React, {Component} from 'react';
import {connect} from 'react-redux';
import Qs from 'qs';

function mapStateToProps(state) {
	return {...state.custom};
}

class Detail extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {};
		
	}
	
	
	render() {
		/*// 1.问号传参
		let {location: {search}, data} = this.props;
		// console.log(search); // "?id=05"
		// console.log(Qs.parse(search.substr(1))); // {id: "05"}
		let customID = Qs.parse(search.substr(1)).id || 0;
		// console.log(customID); // 05
		customID=parseFloat(customID);
		console.log(customID); // 5
		let item=data.find(item=>parseFloat(item.id)===customID);*/
		
		/*/!*2.基于state传值*!/
		let {location:{state},data}=this.props;
		let customID=state||0;
		customID=parseFloat(customID);
		
		/!*筛选和渲染*!/
		let item=data.find(item=>parseFloat(item.id)===customID);
		if (!item) return '当前用户不存在！';*/
		
		/*3.URL地址参数*/
		// console.log(this.props);
		let {match: {params}, data} = this.props;
		let customID = params.id || 0; // 因为路由部分<Route path='/custom/detail/:id' component={Detail}></Route>路由冒号后面的值，就是以后解析时候的属性名
		customID=parseFloat(customID);
		
		/*筛选和渲染*/
		let item = data.find(item => parseFloat(item.id) === customID);
		if (!item) return '当前用户不存在！';
		return (
			<div>
				编号：{item.id}
				<br/>
				姓名：{item.name}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(Detail);