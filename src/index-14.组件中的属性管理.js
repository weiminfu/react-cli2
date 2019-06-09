import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/*基于继承React的component类来创建组件*/
class Dialog extends React.Component {
	/*this.props是只读的，我们无法在方法中修改它的值，
	* 但是可以给其设置默认值或者设置一些规则，例如：
	* 设置是否是必须传递的，以及传递值的类型等。
	* */
	static defaultProps={
		lx:'系统提示'
	};
	
	/*PropTypes是Facebook公司开发的一个插件，基于这个插件，我们可以给
	* 组件传递的属性设置规则。
	* 设置的规则，不会影响页面渲染，但是会在控制台抛出警告错误。
	* */
	// 写法问题：这样写是不符合ES6语法规范的，但是webpack打包编译的时候，
	// 会把它转换为Dialog.defaultProps()这种符合规范的语法。
	static propTypes={
			// con:PropTypes.string // con传递的内容需要是字符串
		con:PropTypes.string.isRequired // con传递的内容需要是字符串,且必须传递
	};
	
	// 类似下面这样写是可以的(但是不是合法的ES6语法)，
	// 在编译的时候，webpack会把它编译，基于babel-preset-react
	AA=12;
	fn=()=>{
		console.log('2');
	};
	
	constructor(props){ // (props, context, updater)
		super(props);
		console.log(this.AA);
		console.log(this.fn());
	}
	render() {
		// this.props.con='hahaha'; // 报错：Uncaught TypeError: Cannot assign to read only property 'con' of object '#<Object>'
		/*组件中的属性是调取组件的时候（创建类实例的时候）传递给组件的信息，而这部分信息是只读的（只能获取，不能修改）=> "组件的属性是只读的"*/
		
		let {lx,con}=this.props;
		return <section>
			<h3>{lx}</h3>
			<div>{con}</div>
		</section>
	}
}

// 使用组件
let root=document.getElementById('root');
ReactDOM.render(<div>
	好好学习
	<Dialog con={'hello world'}>
	</Dialog>
</div>,root);

