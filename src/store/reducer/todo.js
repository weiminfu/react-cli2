import * as TYPES from '../action-types';

export default function todo(state = {
	data:[],
	flag:'all'
}, action) {
	// 为了防止直接修改原有的状态信息，我们把原有的state深度克隆一份，return的结果才是覆盖原有的信息
	state=JSON.parse(JSON.stringify(state));
	
	switch (action.type) {
		// 增加任务信息：payload是传递进来需要增加的任务信息
		case TYPES.TODO_ADD:
			let {payload}=action;
			payload.id=state.data.length===0?1:(parseFloat(state.data[state.data.length-1]['id'])+1);
			state.data.push(payload);
			break;
			
		// 更新筛选方式：
		case TYPES.TODO_FILTER:
			state.flag=action.text;
			break;
			
		// 修改任务状态：
		case TYPES.TODO_UPDATE_STATE:
			let {taskId,newState}=action;
			let item=state.data.find(item1=>item1.id===taskId);
			if (item){
				item.state=newState;
			}
			break;
			
		// 删除指定任务：
		case TYPES.TODO_DELETE:
			let {taskId:deleteId}=action;
			state.data=state.data.filter((item2)=>{
				return deleteId!==item2.id;
			});
			break;
	}
	return state;
}