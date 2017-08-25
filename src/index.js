import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import HomePage from './pages/Home'
import UserAddPage from './pages/UserAdd';
import UserEditPage from './pages/UserEdit';
import UserListPage from './pages/UserList';
import HomeLayout from './layouts/HomeLayout';
import BookEdit from './pages/BookEdit';
import BookAdd from './pages/BookAdd';
import BookListPage from './pages/BookList';
import Login from './pages/Login';

ReactDOM.render((
  // <Router component={UserAddPage}>
  //   <Route path="/user/add" component={UserAddPage}/>
  // </Router>
	<HashRouter>
		<Switch>
			<Route exact path="/" component={HomePage}></Route>
			<Route path="/login" component={Login}></Route>
			<Route path="/user/add" component={UserAddPage}></Route>
			<Route path="/user/edit/:id" component={UserEditPage}></Route>
			<Route path="/user/list" component={UserListPage}></Route>
			<Route path="/book/add" component={BookAdd}></Route>
			<Route path="/book/edit/:id" component={BookEdit}></Route>
			<Route path="/book/list" component={BookListPage}></Route>
		</Switch>
	</HashRouter>
), document.getElementById('app'));