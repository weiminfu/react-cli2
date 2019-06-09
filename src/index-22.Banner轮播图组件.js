import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import Banner from "./component/22.Banner";

// 公共的样式资源在index.js中导入，组件独有的样式可以在组件自己内部导入
import './static/css/reset.min.css'

/*
* 在react的JSX中需要使用图片等资源的时候，资源的地址不能使用相对地
* 址（因为经过webpack编译后，资源地址的路径已经发生改变了，原有的相
* 对地址无法找到对应的资源），此时我们需要基于ES6 Module或者
* commonJS等模块导入规范，把资源当做模块导入进来。或者我们使用的图片
* 地址都是网络地址
* */
let IMG_DATA=[];
for (let i = 1; i < 5; i++) {
	IMG_DATA.push({
		id:i,
		title:'',
		pic:require(`./static/images/${i}.jpg`)
	})
}

let root = document.getElementById('root');
ReactDOM.render(<main>
	{/*
		data:轮播图需要绑定的数据
		interval:自动轮播间隔的时间（默认3000ms）
		step：默认展示图片的索引（记住：前后各克隆了一张）(默认1)
		speed：每一张切换所需要的运动时间（默认300ms）
	*/}
	<Banner data={IMG_DATA.slice(0)} interval={3000} step={1} speed={300}></Banner>
	<div style={{margin:'20px auto'}}></div>
	{/*<Banner data={IMG_DATA.slice(2)} interval={5000} step={2}></Banner>*/}
</main>, root);