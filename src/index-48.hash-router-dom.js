import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter,Link,Route,Switch,Redirect} from 'react-router-dom';
import A from './component/A';
import B from './component/B';
import C from './component/C';

/*
* BrowserRouter VS HashRouter
*   它是两种常用的路由切换思想，BrowserRouter浏览器路由，HashRouter哈希路由
*
*   BrowserRouter浏览器路由：
*       它是基于H5中的history API (pushState,replaceState，popState) 来保持UI和URL的同步，真实项目中应用的不多，一般只有当前项目是基于服务器端渲染的，我们才会使用浏览器路由。
*       http://www.demo.com/
*       http://www.demo.com/personal/
*       http://www/demo.com/personal/login/
*
*   HashRouter哈希路由：
*       真实项目中（前后端分离的项目：客户端渲染），我们经常使用的是哈希路由来完成，它依据相同的页面地址，不同的哈希值，来规划当前页面中的哪一个组件呈现渲染，它基于原生JS构造了一套类似于history API的机制，每一次路由切换都是基于history stack （历史栈）完成的。
*       http://www.demo.com/#/
*       http://www.demo.com/#/personal
*       http://www/demo.com/#/personal/login
*
*       1.当前项目一旦使用HashRouter，则默认在页面地址后面加上“#/”，也就是hash默认值是一个斜杠，我们一般让其显示首页组件信息内容
*       2.HashRouter汇总只能出现一个子元素（？？？）
*
*       3.HashRouter机制中，我们需要根据哈希地址不同，展示不同的组件内容，此时我们需要使用Route
*
*       Route的属性：
*           path：设置匹配地址，但是默认不是严格匹配，当前页面哈希地址只要包含完整的它（内容是不变的），都能匹配到它
*           path='/':和它匹配的地址只要有斜杠即可（都能和它匹配）
*           path='/user':可以匹配'#/user/login',但是'#/user2'无法匹配
*
*           component：一旦哈希值和当前Route的path相同了，则渲染component对应的组件
*
*       匹配的情况：
*           #/user/login  => 可以匹配到 / 、 /user
*           #/user2       => 可以匹配到 / 、 /user无法匹配到
*
*           exact:常用，让Route的path匹配严谨一些，只有URL哈希值和path设定的值相等才可以匹配到，如path='/'和'#/'匹配，和'#/user'不匹配
*
*           strict：不常用，可能用到，严格匹配
*
*           render：当页面的哈希地址和path匹配，会把render规划的方法执行，在方法中一般做“权限校验”（渲染组件之前验证是否存在权限，不存在做一些特殊处理）
*
*       校验规则：
*           默认情况下，会和每一个route都做校验（哪怕之前已经有校验成功的），Switch组件可以解决这个问题，和switch case一样，只要有一种情况校验成功，就不再向后检验了
*
*
* */
let root = document.getElementById('root');
ReactDOM.render(<HashRouter>
	<Switch>
		<Route path='/' exact component={A}/>
		<Route path='/user' component={B}/>
		<Route path='/pay' render={()=>{
			// 一般在render中处理的是权限校验
			let flag=localStorage.getItem('FLAG');
			if (flag && flag==='SAFE'){
				return <C></C>;
			}
			return '当前支付环境不安全';
		}}/>
		
		{/*上述都设置完成，会在末尾设置一个匹配：以上都不符合的情况下，路由地址是非法的地址，我们做一些特殊处理(Route不设置path是匹配所有地址规则的)*/}
		{/*<Route render={()=>{
			return <div>404</div>
		}}/>*/}
		
		{/*Redirect重定向
		*    to[string]:重定向到新的地址
		*    to[object]:重定向到新的地址，只不过指定了更多的信息
		*       {
		*           pathname:定向的地址
					search：给定向的地址问好传参（结合当前案例，真实项目中，我们有时候会根据是否存在问号参数值来统计是正在进入首页，还是非正常跳转进来的，也有可能根据问号传参值，做不同的事情）
					state：给定向后的组件传递一些信息（后面会具体聊）
		*       }
			  push属性：
*                   如果设置了这属性，当前跳转的地址会加入到history stack （历史栈）中一条记录。
*
*             from属性：
*                   设定当前来源的页面地址
		*/}
		{/*重定向到首页*/}
		{/*<Redirect to='/'></Redirect>*/}
		{/*<Redirect to='/?lx=404'></Redirect>*/}
		{/*<Redirect to={{
			pathname:'/',
			search:'?lx=404',
		}}></Redirect>*/}
		
		{/*如果当前请求的hash地址是“/custom”,我们让其重定向到地址“/custom/list”*/}
		<Redirect from='/custom' to='/custom/list'></Redirect>
	</Switch>
</HashRouter>,root);

