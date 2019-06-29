import {createStore} from 'redux';
import reducer from './reducer'; // 不写，默认导入'./reducer/index';

let store=createStore(reducer);
export default store;