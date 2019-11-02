import React from 'react';
import PropTypes from 'prop-types'

/*
* Provider:当前项目的"根"组件
*   1.接收通过属性传递进来的store容器，把store挂载到上下文中，这样当前项目中任何一个组件中，想要使用redux中的store，直接通过上下文获取即可
*
*   2.在组件的render中，把传递给Provider的子元素渲染
* */
class Provider extends React.Component{
	// 设置上下文信息类型
	static childContextTypes={
		store:PropTypes.object
	};
	// 设置上下文信息值
	getChildContext(){
		return {
			store:this.props.store
		}
	};
	
	constructor(props,context){
		super(props,context);
	}
	
	render() {
		return this.props.children;
	}
}

/*
* connect：高阶组件（基于高阶函数：柯理化函数）创建的组件就是高阶组件
*   @params
*       mapStateToProps:回调函数，把redux中的部分状态信息（方法返回的内容）挂载到指定组件的属性上
*       ```
*           function mapStateToProps(state){
*               // state:redux容器中的状态信息
*               return {}; // return的对象中有啥，就把啥挂载到组件的属性上
*           }
*       ```
*
*       mapDispatchToProps：回调函数，把一些需要派发的任务方法也挂载到组件的属性上
*       ```
*           function mapDispatchToProps(dispatch){
*               // dispatch:store中的dispatch
*               return {
*                   init(){
*                       dispatch({...})
*                   }
*               } ;// return的对象中有啥，就把啥挂载到组件的属性上（返回的方法中有执行dispatch派发任务的操作）
*           }
*
*       ```
*   @return
*       返回一个新的函数 connectHOT
* =======
*  connectHOT
*       @params
*           component 传递进来的要操作的组件，我们需要把指定的属性和方法都挂载到当前组件的属性上
*       @return
*           返回一个新的组件Proxy(代理组件)，在代理组件中，我们要获取Provider在上下文中存储的store，紧接着获取store中的state和dispatch,把mapStateToProps和mapDispatchToProps两个回调函数执行，接收返回的结果，再把这些结果挂载到component这个要操作的组件的属性上
*
* */
function connect(mapStateToProps,mapDispatchToProps) {
	return function connectHOT(component) {
		return class Proxy extends React.Component{
			// 获取上下文中的store
			static contextTypes={
				store:PropTypes.object
			};
			
			// 获取store中的state和dispatch，把传递的两个回调函数执行，接收返回的结果
			constructor(props,context){
				super(props,context);
				this.state=this.queryMountProps();
			}
			
			// 基于redux中的subscribe方法向事件池中追加一个方法，当容器状态改变，我们需要重新获取最新的状态信息，并且重新把component渲染，把最新的状态信息通过属性传递给component
			componentDidMount() {
				this.context.static.subscribe(()=>{
					this.setState(this.queryMountProps());
				});
			}
			
			
			// 渲染component组件，并且把获取的信息（状态、方法）挂载到组件的属性上(...this.props单独调取Poxy组件的时候传递的属性也给component组件)
			render() {
				return <component {...this.state} {...this.props}></component>
			}
			
			// 从redux中获取最新的信息,基于回调函筛选，返回的是需要挂载到组件属性上的信息
			queryMountProps=()=>{
				let {store}=this.context;
				let state=store.getState();
				let propsState= typeof mapStateToProps==='function' ?mapStateToProps(state):{};
				let propsDispatch=typeof mapDispatchToProps==='function' ?mapDispatchToProps(store.dispatch):{};
				return {
					...propsState,
					...propsDispatch
				}
			}
		}
	}
}

export {
	Provider,
	connect
}