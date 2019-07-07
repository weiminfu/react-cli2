import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Redirect,NavLink,Link} from 'react-router-dom';

/*import component*/
import List from "./custom/List";
import Create from "./custom/Create";
import Detail from "./custom/Detail";

function mapStateToProps(state) {
	return {};
}

class Custom extends Component {
	constructor(props, context) {
		super(props, context);
		
		this.state = {};
		
	}
	
	render() {
		return (
			<section>
				{/*左侧menu导航*/}
				<ul className='nav nav-pills nav-stacked col-md-2'>
					<li className='presentation'>
						<NavLink to='/custom/list'>客户列表</NavLink>
					</li>
					<li className='presentation'>
						<NavLink to='/custom/create'>增加客户</NavLink>
					</li>
				</ul>
				
				{/*右侧展示对应的内容：基于路由管理（二级路由）*/}
				<div className='col-md-10'>
					<Switch>
						<Route path='/custom' exact component={List}></Route>
						<Route path='/custom/list' component={List}></Route>
						<Route path='/custom/create' component={Create}></Route>
						<Route path='/custom/detail' component={Detail}></Route>
						
						{/*进入到客户管理页面，我们让其默认展示list区域内容（第一种指定渲染组件的操作也可以），这种重定向的方式也可以*/}
						{/*<Redirect from='/custom' to='/custom/list'/>*/}
					</Switch>
				</div>
			</section>
		);
	}
}

export default connect(
	mapStateToProps,
)(Custom);