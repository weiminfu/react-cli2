import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/reset.min.css'
import Vote from "./component/Vote/Vote";
import store from './store';
import {Provider,connect} from 'react-redux';


let root = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
	<div>
		{/*
	title:标题；
	count：初始支持和反对人数
	*/}
		<Vote title={'英国VS法国，法国必胜！'} count={{n:100,m:70}}></Vote>
	</div>
</Provider>,root);
