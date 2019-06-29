/*
* VOTE板块的reducer
*   state:元素redux管理的状态信息（需要设置初始值）
*   action：dispatch方法执行派发的时候传递的行为对象（含type属性等...）
* */
import * as TYPE from '../action-types'; // 把模块中导出的内容全部导入并重命名为type，
// 此后type对象中包含了所有导出的信息（ES6 module语法规范）
export default function vote(state = {
	title:'',
	n: 0,
	m: 0
}, action) {
	switch (action.type) {
		case TYPE.VOTE_SUPPORT:
			state = {...state, n: state.n + 1};
			break;
		case TYPE.VOTE_AGAINST:
			state = {...state, m: state.m + 1};
			break;
		case TYPE.VOTE_INIT:
			let {title='',n=0,m=0}=action;
			state = {...state,title,n,m};
			break;
	}
	return state;
}