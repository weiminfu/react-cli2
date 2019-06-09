import React from 'react';

export default function Dialog(props) {
	let {type,content,children}=props;
	
	// 类型的处理
	let typeValue=type || '系统提示';
	if (typeof type === 'number') {
		switch (type) {
			case 0:
				typeValue='系统提示0';
				break;
			case 1:
				typeValue='系统提示1';
				break;
			
			case 2:
				typeValue='系统提示2';
				break;
		}
	}
	
	return <div className={'container col-6'}>
		<div className="panel">
			<div className="panel-heading panel-success bg-success">
				<h3 className="panel-title">{typeValue}</h3>
			</div>
			<div className="panel-body">
				{content}
			</div>
			{/*如果传递了children,我们把它放到尾部*/}
			{children}
		</div>
	</div>
}