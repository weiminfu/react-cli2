import React from 'react';
import ReactDOM from 'react-dom';

// 函数声明组件
function Sum(props) {
	console.log(this); // undefined
	return <div>
		函数声明组件
	</div>
}

/*基于继承React的component类来创建组件*/
class Dialog extends React.Component {
	constructor(props){ // (props, context, updater)
		super(props);
		// ES6中的extends继承，一旦使用了constructor，第一行必须设置super执行
		// 相当于 React.component.call(this)，也是call继承，把父类私有的属性继承过来：
		/*
		* this.props：属性集合
		* this.refs：ref集合（非受控组件中用到）
		* this.context：上下文
		* this.updater：
		* */
		// 如果只写super()：虽然创建实例的时候，把属性传递进来了，但是并没有传递给父组件，也就是没有把属性挂载到实例上，在constructor中使用this.props获取的结果是undefined。
		// 如果写super(props)：在继承父类私有属性的时候，就把传递的属性挂载到了子类的实例上，在constructor中就可以使用this.props获取到值了。
		// 即使在constructor中不设置形参props接收属性，执行super的时候也不传props这个属性，除了constructor中不能直接使用this.props外，其他生命周期函数中都可以使用this.props获得传递的值。也就是：执行完成constructor，React已经帮我们把传递的props属性接收，并挂载到实例上了。
		
		// console.log(this); // 实例
		console.log(props); // 有children和传递的属性
		console.log(this.props); // super(props)执行传递props后，this.props上才有东西
		
		/*
		*   props:当ReactDOM.render()方法渲染并把当前类执行
		*   创建实例的时候，会把之前JSX解析出来的props对象中的信息（可能有children）传递给这个形参props =>“ReactDOM.render()方法调取组件传递的属性”
		* */
	}
	componentWillMount() {
		// 第一次渲染之前
		console.log(this.props); // 可以获得值
	}
	
	render() {
		return <section>
			<h3>系统提示</h3>
			<div>语法错误</div>
		</section>
	}
}

// 使用组件
let root=document.getElementById('root');
ReactDOM.render(<div>
	好好学习
	<Sum></Sum>
	<Dialog lx={2} con={'haha'}>
		<span>我是子元素</span>
	</Dialog>
</div>,root);
// 上面的JSX得到下面的对象：
let obj={
	type:'div',
	props:{
		children:[
			'好好学习',
			{
				type:Dialog,
				props:{
					lx:2,
					children: null
				}
			}
		]
	}
};

