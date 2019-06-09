import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// let data='你好世界';
/*ReactDOM.render(<div id="box1">hello world!{data}</div>,document.body,()=>{
	let oBox1=document.querySelector('#box1');
	console.log(oBox1.innerHTML);
});*/

/*
*   ReactDOM.render()方法：把JSX元素渲染到页面中
*   三个参数:
*   JSX:react虚拟元素
*   container：容器，我们想把元素放到页面中的哪个容器当中
*   callback：当把内容放到页面中呈现时触发回调函数
*
*   JSX：react独有的语法，JavaScript+XML（可扩展的标记语言HTML）
*   和我们之前自己拼接的HTML字符串类似，都是把HTML结构代码和JS代码或者数据混合到一起，但是它不是字符串。
*
*   1.不建议我们把JSX直接渲染到body中，而是放在自己创建的一个容器中，一般我们都放在一个ID为root的div中即可。
*
*   2.在JSX中出现的{}是存放JS的，但是要求JS代码执行完成有返回结果（JS表达式：有结果的JS代码执行）。
*       =>大括号{}中，不能直接放一个对象数据类型的值（对象（除了给style赋值）、数组(内中含对象)、函数都不行）；
*       =>只含有基本值的数组，是可以放到{}中的，或者是JSX元素，这样也是可以的；
*       =>可以放基本类型的值（布尔类型什么都不显示，null、undefined也是JSX元素，代表是空）；
*       =>循环判断的语句都不支持，但是支持三元运算符；
*       =>forEach()方法返回的是undefined，同样不能放在{}中；
*       =>map()方法返回的是每一项都为基本值的数组，是可以放到{}中的
*
*
*   3.循环数组创建JSX元素（一般都是基于数组的map()方法完成迭代），需要给创建的元素设置唯一的key属性值（当前本次循环内唯一即可）
*
*   4.只能出现一个根元素。
*
*   5.给元素设置样式类用的是className，而不是class
*
*   6.style中不能直接的写样式字符串，需要基于一个样式对象来遍历赋值。
*
* */

/*let root=document.getElementById('root');
ReactDOM.render(<div id="box1">hello world!{data}</div>,root,()=>{
	let oBox1=document.querySelector('#box1');
	console.log(oBox1.innerHTML);
});*/
//==========
/*let data = [{
	name: '张三',
	age: 12
}, {
	name: '李四',
	age: 20
}
];
let root = document.getElementById('root');
ReactDOM.render(<div id="box1">
	hello world!
	<ul>
		{
			data.map((item,index)=>{
				let {name,age}=item;
				return <li key={index}>
				<span>{name}</span>
				<span>{age}</span>
				</li>
			})
		}
	</ul>
</div>, root);*/

//===========
// 4.每一个JSX只能有一个跟元素
let root = document.getElementById('root');
ReactDOM.render(<div><h1 id={'box'}>我是标题</h1><p className={'box'} style={{color:'red'}}>我是文字内容</p></div>,root);


/*
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
