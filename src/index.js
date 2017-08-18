import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import HomePage from './pages/Home'
import UserAddPage from './pages/UserAdd';
import UserListPage from './pages/UserList';
import HomeLayout from './layouts/HomeLayout';

ReactDOM.render((
  // <Router component={UserAddPage}>
  //   <Route path="/user/add" component={UserAddPage}/>
  // </Router>
	<HashRouter>
		<div>
			<Route path="/" component={HomeLayout}></Route>
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/user/add" component={UserAddPage}></Route>
				<Route exact path="/user/list" component={UserListPage}></Route>
			</Switch>
		</div>
	</HashRouter>
), document.getElementById('app'));