/*
* createElement:创建JSX对象
* 参数：至少两个type、props；children这个部分可能没有，可能有多个
* */
function createElement(type, props, ...childrens) {
	let ref, key;
	if ('key' in props) {
		key = props.key;
		props.key = undefined;
	}
	if ('ref' in props) {
		ref = props.ref;
		props.ref = undefined;
	}
	return {
		type,
		props: {
			...props,
			children: childrens.length <= 1 ? (childrens[0] || null) : childrens
		},
		ref,
		key,
	}
}

function render(objJSX, container, callback) {
	let {type, props} = objJSX || {};
	let newElement = document.createElement(type);
	
	for (let attr in props) {
		if (!props.hasOwnProperty(attr)) break; // 不是私有的属性直接结束遍历
		let value = props[attr];
		if (value===undefined) continue; // 如果当前属性没有值(null或undefined)，直接不做处理即可。
		switch (attr.toUpperCase()) {
			case 'CLASSNAME':
				newElement.setAttribute('class', value);
				break;
				
			case 'STYLE':
				for (let styleAttr in value) {
					if (value.hasOwnProperty(styleAttr)) {
						newElement['style'][styleAttr] = value[styleAttr];
					}
				}
				break;
				
			case 'CHILDREN':
				/*
				* 可能是一个值：可能是字符串，也可能是一个JSX对象
				* 可能是一个数组：数组中的每一项可能是字符串，也可能是对象
				*
				* 处理方案：
				*   首先把一个值也变为数组，这样后期统一操作数组即可。
				* */
				if (!(value instanceof Array)){
					value=[value];
				}
				value.forEach((item,index)=>{
					// 验证item是什么类型的:如果是字符串就是创建文本节点；
					// 如果是对象，我们需要再次执行render方法，把创建的元素放到最开始创建的大盒子中
					if (typeof item === 'string') {
						let text=document.createTextNode(item);
						newElement.appendChild(text);
					}else {
						render(item,newElement); // 递归
					}
				});
				break;
			default:
				// 基于setAttribute()方法，可以让设置的属性表现在HTML结构上
				newElement.setAttribute(attr, value);
		}
	}
	
	container.appendChild(newElement);
	callback && callback();
}

export {
	createElement,
	render
}

