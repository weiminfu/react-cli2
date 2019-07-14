import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {HashRouter,Link,Route,Switch,Redirect} from 'react-router-dom';

/*import component*/
import Nav from "./component/CRM/Nav";
import Home from "./routes/CRM/Home";
import Custom from "./routes/CRM/Custom";
import Plan from "./routes/CRM/Plan";

/*import css*/
import 'bootstrap/dist/css/bootstrap.css';
import './static/css/CRM.css';

/*
* 有的项目中会把路由管控全部放到APP中处理，认为APP是项目页面的主入口
* */

let root = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
	<HashRouter>
		<div>
			{/*NAV组件:Header导航区域*/}
			{/*<Route path='/' component={Nav}/>*/}
			<Nav/>
			
			{/*基于HashRouter展示不同的页面*/}
			<Switch>
				<Route path='/' exact component={Home}/>
				<Route path='/custom' component={Custom}/>
				<Route path='/plan' component={Plan}/>
				<Redirect to='/?lx=unsafe'/>
			</Switch>
		</div>
	</HashRouter>
</Provider>,root);

