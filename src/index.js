import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './home'
import Login from './pages/Login';

ReactDOM.render((
	<HashRouter>
		<Switch>
		 	<Route exact path="/login" component={Login}></Route>		
			<Route component={Home}></Route>
		</Switch>
	</HashRouter>
), document.getElementById('app'));