class Parent {
	constructor(x,y){
		// this指实例，给实例设置私有的属性x、y
		this.x=x;
		this.y=y;
	}
	
	// 给Parent.prototype类的原型上加render()方法
	// 实例调用该方法时，这样用 this.render()
	render(){
	
	}
	
	// Parent函数也是对象，可以给它加私有方法，
	// 例如：Parent.ajax();添加一个方法
	// 在ES6中把Parent类当做普通对象加私有方法，如下：
	static ajax(){
	
	}
}
// ES6创建类的大括号中只能写方法（而且不能是箭头函数），
// 不能设置属性，设置属性需要自己额外拿出来设置，如下：
Parent.prototype.AA=12;

// 把Parent作为对象设置私有属性，也只能拿到外面设置，如下：
Parent.BB=12;

new Parent(10,20);

//========================================

class Children extends Parent{
	constructor(){
		super(10,20);
		//supper(10,20)执行，就是Parent.constructor.call(this,10,20)执行，
		// this是Children的实例，call()方法把Parent.constructor(10,20)执行中的this替换成
		// children的实例，
		// this.x、this.y，就是给Children的实例，挂载私有属性。
		
		this.ajax(); // 报错：this.ajax is not a function，
		// 子类只能继承父类原型上的属性和方法，以及父类实例私有的属性和方法，
		// 对于父类作为普通对象设置的私有属性和方法是无法继承的。
	}
	
	render() {
	
	}
}

console.dir(new Children());
/* 实例的样子：
* {
*   x:10,
*   y:20,
*   _proto_:Children.prototype
*       render(),
*       _proto_:Parent.prototype
*           render(),
*           AA:12,
*           _proto_:Object.prototype
* }
*
* */