import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './component/11.Dialog';

let root=document.getElementById('root');
ReactDOM.render(<div>
	{/*JSX中导入的组件以标签的形式使用（单闭合与双闭合都可以）*/}
	<Dialog con={'ha'} style={{color:'red'}}/>
	<Dialog con={'hei'} lx={2}>
		{/*属性值不是字符串，如数字，我们需要使用大括号包起来*/}
		<span>1</span>
		<span>2</span>
	</Dialog>
</div>,root);