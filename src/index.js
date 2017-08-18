import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './pages/Home'
import UserAddPage from './pages/UserAdd';

ReactDOM.render((
  // <Router component={UserAddPage}>
  //   <Route path="/user/add" component={UserAddPage}/>
  // </Router>
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={HomePage}></Route>
			<Route exact path="/user/add" component={UserAddPage}></Route>
		</Switch>
	</BrowserRouter>
), document.getElementById('app'));