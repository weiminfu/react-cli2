import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import {Provider} from 'react-redux';


import './static/css/reset.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import './static/less/todo.less';

import Head from "./component/Todo/Head";
import Body from "./component/Todo/Body";
import Footer from "./component/Todo/Footer";


let root = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
	<main className='panel panel-default'>
		<Head></Head>
		<Body></Body>
		<Footer></Footer>
	</main>
</Provider>,root);
