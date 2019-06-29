import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.min.css'
import Vote from "./component/Vote/Vote";

import {createStore} from "redux";

// 创建容器：需要把reducer传递进来（登记了所有状态更改的信息）,它是一个函数，reducer的作用：
// 1.记录了所有状态修改的信息（根据不同的行为标识，走不同的修改任务）
// 2.修改容器中的状态信息
// reducer的参数：
//      state:容器中原有的状态信息，如果第一次使用没有原有状态，给一个初始默认值
//		action：dispatch任务派发的时候传递的行为对象（这个对象必有一个type属性，是操作的行为标识，reducer就是根据这个行为标识来识别该如何修改状态信息）
let reducer=(state={n:0,m:0},action)=>{
	let {type}=action;
	switch (type) {
		case 'VOTE_SUPPORT':
			state={...state,n:state.n+1};
			break;
		case 'VOTE_AGAINST':
			state={...state,m:state.m+1};
			break;
	}
	return state; // 只有把最新的state返回，原有的状态信息才会被修改
};
let store=createStore(reducer);
/*
* 创建的store中提供三个常用方法：
*   dispatch：派发行为 （传递一个对象，对象中有一个type属性），通知reducer修改状态信息
*   subscribe：事件池追加方法，
*   getState:获取最新管理的状态信息
* */

let root = document.getElementById('root');
ReactDOM.render(<div>
	{/*
	title:标题；
	count：初始支持和反对人数
	*/}
	<Vote title={'英国VS法国，法国必胜！'} count={{n:100,m:70}} store={store}></Vote>
</div>,root);
