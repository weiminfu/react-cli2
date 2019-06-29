/*
* 每个版块单独的actionCreator:就是把dispatch派发时候需要传递的action对象，
* 进一步统一封装处理（在react-redux中我们会体验到它的好处）
* */
import * as TYPE from '../action-types';

let vote={
	support(){
		// dispatch派发的时候需要传递啥就返回啥即可
		return {
			type:TYPE.VOTE_SUPPORT
		}
	},
	against(){
		// dispatch派发的时候需要传递啥就返回啥即可
		return {
			type:TYPE.VOTE_AGAINST
		}
	},
	init(initData={}){
		return {
			type:TYPE.VOTE_INIT,
			...initData
		}
	}
};
export default vote;