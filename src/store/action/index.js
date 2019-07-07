/*
* 合并所有的actionCreator，类似于reducer合并，为防止冲突，合并后的对象是一版块名称单独，
* 划分管理的：
* action={
*   vote：{
*       xxx(){}
*   },
*   ...
* }
* */

import vote from './vote';
import personal from './personal';
import todo from './todo';
import custom from './custom';

let action={
	vote,
	personal,
	todo,
	custom
};

export default action;