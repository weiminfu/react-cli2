import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link,NavLink,withRouter} from 'react-router-dom';

/*
* Link:是react-router中提供的路由切换组件，基于它可以实现点击的时候路由切换
*   to [string] :跳转到指定的路由地址
*   to [string] :可以提供一些参数配置项（和Redirect类似）
*       {
*           pathname:跳转的地址，
*           search：问号传参，
*           state：基于这种方式传递的信息
*       }
*   replace：false  意思是替换history stack 中当前的地址（true），还是追加一个新的地址（false）
*
* 原理：基于Link组件渲染，渲染后的结果就是一个a标签，to对应的信息最后变为href中的内容：
* <a class="navbar-brand" href="#/?lx=logo">CRM管理系统</a>
*
* ---------------------
*
* react-router中提供的组件都要在任何一个router（常用HashRouter）包裹范围内使用
*
* ---------------------
*
* NavLink:和Link类似，都是为了实现路由跳转的，不同在于，NavLink组件在当前页面hash和组件对应的地址相吻合的时候，会默认给组件加一个active样式，让其有选中状态的效果。
*
* 和Link类似，to和replace等属性都有
*   activeClassName：把默认加的active样式类改为自己设定的样式类
*   activeStyle：给匹配的这个NavLink设置行内样式
*
*   exact & strict :控制匹配的时候是否是严格匹配
*   isActive:匹配后执行对应的函数
*
*   例如：
*       <NavLink to='/custom'/>最后也会转换为a标签，如果当前页面的hash地址和此组件中的to地址匹配，则会给渲染后的a标签添加一个默认的样式类：active
* */

/*
* withRouter:这个方法意思是把一个非路由管控的组件，模拟成为路由管控的组件
* 例如：<Route path='' component={}/> 是受路由管控的组件
*
* 使用withRouter方法：
*   withRouter(connect()(Nav)) 先把Nav基于connect高阶一下，返回的是一个代理组件proxy，把返回的代理组件基于withRouter方法变成受路由管控的组件
*
* 受路由管控组件的特点：
*   1.只有当前页面的hash地址（/#/...）和路由指定的地址(path='/...')匹配，才会把对应的组件渲染（经withRouter方法处理后的组件，是没有地址匹配，都被模拟成为受路由管控的）
*
*   2.路由切换的原理，凡是匹配的路由，都会把对应的组件内容重新添加到页面中，相反，不匹配的都会从页面中移除掉，下一次重新匹配上，组件需要重新渲染到页面中；每一次路由切换的时候（页面的哈希路由地址改变），都会从一级路由开始重新校验一遍，
*
*   3.所有受路由管控的组件，在组件的属性props上都默认添加了三个属性：
*       history：{
*           go:跳转到指定的地址（传的是数字 0当前、-1上一个、-2上两个）
*           goBack:等价于go(-1)回退到上一个地址
*           goForward:等价于go(1)向前走一步
*           push:向池子中追加一条新的信息，达到切换到指定路由地址的目的，JS中实现路由切换的用法：this.props.history.push('/plan')
*           ...
*       }
*
*       location：{ // 获取当前哈希路由渲染组件的一些信息
*           hash: ""
			pathname: "/custom/create" 当前哈希路由地址
			search: "" 当前页面的问号传参值 类似于?lx=unsafe
			state: undefined 基于Redirect/Link/NavLink中的to，传递的是一个对象，对象中编写的state，就可以在location.state中获取到
*       }
*
*       match:{ // 获取的是当前路由匹配的一些结果
*           isExact: false
			params: {} 如果当前路由匹配的是地址路径参数，则这里可以获取传递参数的值
			path: "/"
			url: "/"
			__proto__: Object
*       }
* */


function mapStateToProps(state) {
	return {};
}

class Nav extends Component {
	constructor(props, context) {
		super(props, context);
		console.log(this.props);
		this.state = {
			count:1
		};
		
	}
	
	render() {
		return (
			<nav className='navbar navbar-default'>
				{/*logo部分*/}
				<div className='container-fluid col-md-2'>
					<Link className='navbar-brand' to={{
						pathname:'/',
						search:'?lx=logo'
					}}>CRM管理系统</Link>
				</div>
				
				{/*nav导航部分*/}
				<div className='collapse navbar-collapse col-md-10'>
					<ul className='nav navbar-nav' onClick={this.handleClick}>
						{/*NavLink不是点击谁，谁有选中的样式（但是可以路由切换），而是当前页面hash后的地址和NavLink中的to进行比较，哪个匹配了，哪个才有选中的样式*/}
						<li><NavLink to='/' exact>首页</NavLink></li>
						<li><NavLink to='/custom'>客户管理</NavLink></li>
						<li><NavLink to='/plan'>计划管理</NavLink></li>
					</ul>
				</div>
			</nav>
		);
	}
	
	handleClick=(ev)=>{
		this.setState({
			count:this.state.count+1
		})
	}
}

export default withRouter(connect(
	mapStateToProps,
)(Nav));
