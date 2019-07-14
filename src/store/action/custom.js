import * as TYPES from '../action-types';

let custom={
	// 增加客户信息：payload={id, name}
	/*create(payload) {
		// redux-thunk中间件的使用语法:在指定执行派发任务的时候，等待3000ms后再派发
		return (dispatch)=>{
			// dispatch都传递给我们了，我们想什么时候派发，就什么时候派发
			setTimeout(()=>{
				dispatch({
					type:TYPES.CUSTOM_CREATE,
					payload
				});
			},3000);
		}
	}*/
	
	// redux-promise中间件的使用语法：
	create(payload) {
		return {
			type:TYPES.CUSTOM_CREATE,
			// 传递给reducer的payload需要等待Promise成功，把成功的结果传递过去
			payload:new Promise(resolve => {
				setTimeout(()=>{
					resolve(payload);
				},3000);
			})
		}
	}
};
export default custom;