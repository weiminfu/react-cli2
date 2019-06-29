import React from 'react';

// createElement方法
let createElement2 = (type, props, ...childs) => {
	// ref && key
	props= props || {};
	let ref = null;
	let key = null;
	if ('ref' in props) {
		ref = props['ref'];
		props['ref'] = undefined;
	}
	if ('key' in props) {
		key = props['key'];
		props['key'] = undefined;
	}
	return {
		type, // type:type
		props: {
			...props,
			// 保证childrens是一项或者是数组多项
			children: childs.length <= 1 ? (childs[0] || '') : childs
		},
		ref,
		key
	}
};

let objJSX=createElement2(
	"div",
	{
		id: 'box',
		className: 'box',
		style: {
			color: 'red'
	},
	onClick: function onClick(ev) {
		console.log(ev);
	}
}, "\u597D\u597D\u5B66\u4E60",
	React.createElement("h3", {
	className: 'title'
}, "hello world"),
	React.createElement("p", {
	className: 'content'
}, "\u524D\u7AEF\u5B66\u4E60\u8DEF\u5F84"));
console.log(objJSX);

// render方法
let render=(objJSX,container,callBack)=>{
	let {type,props}=objJSX;
	let {children}=props;
	let newElement=document.createElement(type);
	
	for (let attr in props) {
		if (!props.hasOwnProperty(attr)) break;
		
		let valueJSX=props[attr];
		if (valueJSX === 'undefined') {
			valueJSX='';
		}
		
		
		// 事件属性处理
		let regEvent=/^on/;
		if (regEvent.test(attr)) {
			newElement.addEventListener(attr.toLowerCase().substr(2),valueJSX.bind(undefined),false);
			continue;
		}
		// 特殊属性处理
		switch (attr.toUpperCase()) {
			case 'CLASSNAME':
				newElement.setAttribute('class',valueJSX);
				break;
			case 'STYLE':
				for (let styATTR in valueJSX) {
					if (valueJSX.hasOwnProperty(styATTR)) {
						newElement.style[styATTR]=valueJSX[styATTR];
					}
				}
				break;
			case 'CHILDREN':
				if (!(valueJSX instanceof Array)) {
					valueJSX=[valueJSX]
				}
				valueJSX.forEach(item=>{
					if (typeof item === 'string') {
						newElement.appendChild(document.createTextNode(item));
						return;
					}
					render(item,newElement);
				});
				break;
			default:
				newElement.setAttribute(attr,valueJSX);
		}
		
	}
	
	container.appendChild(newElement);
	callBack && callBack();
};


let root = document.getElementById('root');
render(objJSX,root);
