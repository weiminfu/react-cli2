import * as TYPES from '../action-types';

export default function custom(state = {
	data:[{
		id:1,
		name:'wei'
	}]
}, action) {
	// 为了防止直接修改原有的状态信息，我们把原有的state深度克隆一份，return的结果才是覆盖原有的信息
	state=JSON.parse(JSON.stringify(state));
	
	switch (action.type) {
		// 增加客户信息：payload是传递进来需要增加的客户信息
		case TYPES.CUSTOM_CREATE:
			let {payload}=action;
			state.data.push(payload);
			break;
	}
	return state;
}