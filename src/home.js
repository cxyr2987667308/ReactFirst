import React from 'react';
import { Route, HashRouter, Switch, Link } from 'react-router-dom';
import { routes } from './routes';
import HomeLayout from './layouts/HomeLayout';

class Home extends React.Component{
	render(){
		const { location } = this.props;console.log('props',this.props);
		// let currentPage = '00' routes.find((value) => {
		// 	return value.path == location.pathname;
		// });
		return(
			<HomeLayout>
				<Switch>
					{
						routes.map((item, i) => {
							return <Route exact={item.exact} path={item.path} component={item.component} key={i}></Route>
						})
					}
				</Switch>
			</HomeLayout>
		)
	}
}

export default Home;