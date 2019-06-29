import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.min.css'
import ReactSwipe from 'react-swipe';

import './static/css/30.react-swipe.css'

/*准备数据:
* 在JSX中需要加载一些资源（例如IMG图片），
* 此时我们不能使用相对地址，webpack打包后资源地址都是要改变的，
* 可以使用网络绝对地址，或者基于模块规范把图片导入进来使用
* */
let IMG_DATA=[];
for (let i = 1; i <= 3; i++) {
	IMG_DATA.push({
		id:i,
		title:'',
		pic:require(`./static/images/${i}.jpg`)
	});
}

let root = document.getElementById('root');
ReactDOM.render(<div>
	{/*基于组件实现轮播图*/}
	<ReactSwipe className={'container'} swipeOptions={{
		auto:1000,
		continuous: true,
		stopPropagation: true,}}>
		{IMG_DATA.map((item,index)=>{
			let {pic,title}=item;
			return <div key={index}>
				<img src={pic} alt={title}/>
			</div>
		})}
	</ReactSwipe>
</div>,root);
