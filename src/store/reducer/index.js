/*
* 把每一个模块单独设定的reducer函数最后合并成为总的reducer
*
* 为了保证合并reducer过程中，每个模块管理的状态信息不会相互冲突，redux
* 在合并的时候，把容器中的状态进行了分开管理(以合并reducer时设置的属性名，
* 作为状态划分的属性名，把各个模块管理的状态放到自己的属性下即可)：
*   state={
*       vote:{n:0,m:0},
*       personal:{baseInfo:{}}
*   }
* 以后获取状态信息的方式：
*   store.getState().vote.n
* */
import {combineReducers} from 'redux';
import vote from './vote';
import personal from './personal';
import todo from './todo';
import custom from './custom';

let reducer=combineReducers({
	vote,
	personal,
	todo,
	custom
});
export default reducer;