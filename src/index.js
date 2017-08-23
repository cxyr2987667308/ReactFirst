import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import HomePage from './pages/Home'
import UserAddPage from './pages/UserAdd';
import UserEditPage from './pages/UserEdit';
import UserListPage from './pages/UserList';
import HomeLayout from './layouts/HomeLayout';

ReactDOM.render((
  // <Router component={UserAddPage}>
  //   <Route path="/user/add" component={UserAddPage}/>
  // </Router>
	<HashRouter>
		<Switch>
			<Route exact path="/" component={HomePage}></Route>
			<Route path="/user/add" component={UserAddPage}></Route>
			<Route path="/user/edit/:id" component={UserEditPage}></Route>
			<Route path="/user/list" component={UserListPage}></Route>
		</Switch>
	</HashRouter>
), document.getElementById('app'));