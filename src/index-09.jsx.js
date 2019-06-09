import React from 'react';
import './07.self-jsx.js'
import {createElement,render} from "./09.jsx";

// 从react-dom中导入一个ReactDOM,逗号后面的内容是把ReactDOM这个对象
// 进行解构赋值，<=> import {render} from 'react-dom'
// import ReactDOM,{render} from 'react-dom';


/*
* JSX渲染机制：
*   1.基于babel中的语法解析模块（babel-preset-react）把JSX语法:
*
		<h1 id={'titleBox'} className={'title'} style={styleObj}>我是标题</h1>

*   编译为React.createElement(...)结构:
*
 "use strict";

React.createElement("h1", {
  id: 'titleBox',
  className: 'title',
  style: styleObj
}, "\u6211\u662F\u6807\u9898");

*   2.React.createElement(type, props,children)方法执行,创建一个对象（虚拟DOM），对象中包含属性：
*   type:'h1'
*   props:{
*       id:'titleBox',
*       className:'title',
*       style:...,
*       children:'我是标题' => 存放的是元素中的内容
*   }
*   ref:null
*   key:null
*   ...
*   _proto_:Object.prototype
*
*   3.ReactDOM.render(JSX语法最后生成的对象，容器),基于render方法把生成的对象动态创建为DOM元素，插入到指定的容器中。
* * */
// React.createElement(type, props,children);

/*let root=document.getElementById('root');
let styleObj={color:'red'};*/
/*
render(<h1
id={'titleBox'}
className={'title'}
style={styleObj}
>我是标题</h1>,root);

console.log(React.createElement(
	"h1", {
		id: 'titleBox',
		className: 'title',
		style: styleObj
	}, "\u6211\u662F\u6807\u9898"
));
*/


// 这是测试的JSX元素

/*
<div id={'box'} className={'box1'} style={{color:'red'}}>
  <h1 className={'title'}>系统提示</h1>
  <p>语法错误</p>
  这是一个测试！
</div>
* */

// 这是经过babel编译的JSX元素得到的对象
/*
	React.createElement("div", {
	  id: 'box',
	  className: 'box1',
	  style: {
	    color: 'red'
	  }
	},
	React.createElement("h1", {
	  className: 'title'
	},
	"\u7CFB\u7EDF\u63D0\u793A"),
	React.createElement("p", null, "\u8BED\u6CD5\u9519\u8BEF"),
	"\u8FD9\u662F\u4E00\u4E2A\u6D4B\u8BD5\uFF01"
	);
* */

// 使用我们自己写好的createElement和render方法进行渲染
let objJXS=createElement("div", {
		id: 'box',
		className: 'box1',
		style: {
			color: 'red'
		}
	},
	React.createElement("h1", {
			className: 'title'
		},
		"\u7CFB\u7EDF\u63D0\u793A"),
	React.createElement("p", null, "\u8BED\u6CD5\u9519\u8BEF"),
	"\u8FD9\u662F\u4E00\u4E2A\u6D4B\u8BD5\uFF01"
);

let root=document.getElementById('root');

render(objJXS,root);