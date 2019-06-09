// 一、createElement()方法
/*
* 1.创建一个对象，默认有四个属性：type、props、ref、key，最后要把这个对象返回。
*
* 2.根据传递的值修改这个对象。
*   type <= 传递的type
*   props需要做一些处理：大部分传递的props中的属性都赋值给对象的props属性，有一些比较特殊：
*       => 如果是ref或者key,我们需要把传递的props中的这两个属性值，给创建对象的对应的两个属性，而传递的props中把这两个值删掉。
*       => 把传递的children作为新创建对象的props属性中的一个属性
* */
function createElement(type, props, children) {
	props = props || {}; // 只要props不传，就把它赋值为空对象
	// 1.创建一个对象，设置一些默认属性值
	let obj = {
		type: null,
		props: {
			children: ''
		},
		ref: null,
		key: null
	};
	
	// 2.把传递进来的参数分别作不同处理，传递给创建对象
	
	// 2.1用传递的type、props覆盖obj原有的默认值
	// obj={...obj,type,props}; // 相当于{type:type,props:props}
	
	// 2.2多层ES6解构赋值的应用
	obj = {...obj, type, props: {...props, children}};
	
	// 2.3把ref和key提取出来,并且假删除props中的key和ref
	if ('key' in obj.props) {
		obj.key = obj.props.key;
		obj.props.key = undefined;
	}
	if ('ref' in obj.props) {
		obj.ref = obj.props.ref;
		obj.props.ref = undefined;
	}
	
	// 3.返回创建的对象
	return obj;
}

// 另外的写法
/*function createElement(type, props, children){
	return {
		type:type||null,
		props:{
			...props,
			ref:undefined,
			key:undefined,
			children:children||'',
		},
		ref:props.ref||null,
		key:props.key||null,
	}
}*/

let styleObj = {color: 'green'};
let objJSX = createElement(
	"h1",
	{id: 'titleBox', className: 'title', style: styleObj, ref: 'hello', key: '10'},
	"\u6211\u662F\u6807\u9898"
);
// console.log(objJSX);

// createElement()方法得到的目标：
/*
* {
*   type:'h1',
*   props:{
*       id: 'titleBox',
*       className: 'title',
*       style: styleObj},
*       children:'\u6211\u662F\u6807\u9898'
*   },
*   ref:null,
*   key:null,
*   _proto_:Object.prototype
* }
* */

// 执行结果

/*
* { type: 'h1',
  props:
   { id: 'titleBox',
     className: 'title',
     style: { color: 'red' },
     ref: undefined,
     key: undefined,
     children: '我是标题' },
  ref: 'hello',
  key: '10' }
* */

// 二、render()方法
/*
* render()方法：把创建的对象生成对应的DOM元素，最后插入到页面中。
* */

function render(obj, container, callback) {
	let {type, props} = obj || {};
	let newElement = document.createElement(type);
	
	for (let propsKey in props) {
		if (!props.hasOwnProperty(propsKey)) break; // 不是私有的属性直接结束遍历
		if (!props[propsKey]) continue; // 如果当前属性没有值，直接不做处理即可。
		
		let value = props[propsKey];
		
		// className的处理：
		if (propsKey === 'className') {
			newElement.setAttribute('class', value);
			continue;
		}
		
		// style的处理：
		if (propsKey === 'style') {
			if (value === '') continue; // 如果值是空字符串
			for (let styKey in value) {
				if (value.hasOwnProperty(styKey)) {
					newElement['style'][styKey] = value[styKey];
				}
			}
			continue;
		}
		
		// children的处理：
		if (propsKey === 'children') {
			if (typeof value === 'string') {
				// 创建文本节点
				let text = document.createTextNode(value);
				newElement.appendChild(text);
			}
			continue;
		}
		
		// 基于setAttribute()方法，可以让设置的属性表现在HTML结构上
		newElement.setAttribute(propsKey, value);
	}
	
	container.appendChild(newElement);
	callback && callback();
}

let root = document.getElementById('root');
render(objJSX, root, () => {
	console.log('ok');
});