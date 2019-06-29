import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.min.css'
import Vote from "./component/Vote/Vote";

// 全局下挂载一个容器来实现信息共享和通信：
(function anonymous(){
    let stateObj={},
	    listenAry=[];
    
    function updateState(callBack) {
    	// callBack:回调函数中一定是修改并返回最新的状态信息的,
	    // 用返回的状态信息替换原有的状态信息
	    let newObj=callBack(stateObj);
	    stateObj={...stateObj,...newObj};
	    
	    // 当状态更改：通知计划表中的方法执行
	    listenAry.forEach(item=>{
	    	if (typeof item==='function'){
	    		item();
		    }
	    });
    }
    
    function getState() {
	    return stateObj;
    }
    
    function subscribe(fn) {
	    for (let i = 0; i < listenAry.length; i++) {
		    let item = listenAry[i];
		    if (item === fn) {
		    	return;
		    }
	    }
	    listenAry.push(fn);
    }
    
    // 把上面三个方法暴露出来
	window.myRedux={
    	updateState,
		getState,
		subscribe
	}
})();

let root = document.getElementById('root');
ReactDOM.render(<div>
	{/*
	title:标题；
	count：初始支持和反对人数
	*/}
	<Vote title={'英国VS法国，法国必胜！'} count={{n:100,m:70}}></Vote>
</div>,root);
