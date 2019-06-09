import React from 'react';
import ReactDOM from 'react-dom';

/*1.我们一般都把程序中的公共样式放到index.js主入口文件中导入*/
/*这样在其他组件中也可以使用了（webpage会把所有的组件最后都编译到一起，index.js是主入口）

	2.导入bootstrap，需要导入非压缩的css文件，导入压缩的无法编译（真实项目中bootstrap已经是过去式，我们后期使用ant来做）。
* */
import 'bootstrap/dist/css/bootstrap.css'
import Dialog from "./component/12.Dialog";

let root=document.getElementById('root');
ReactDOM.render(<main>
	<Dialog content={'内容'} type={2
	}/>
	<Dialog type={'请登录'} content={'内容很多'}>
	<button className={'btn btn-danger'}>登录</button>
	</Dialog>
</main>,root);

