import React from 'react';
import { Route, HashRouter, Switch, Link } from 'react-router-dom';
import { routes } from './routes';
import HomeLayout from './layouts/HomeLayout';
import GoLogin from './components/GoLogin';
import { Modal } from 'antd';
const confirm =Modal.confirm;

class Home extends React.Component{
	render(){
		console.log('noLogin',localStorage.getItem('noLogin'));
		let noLogin = localStorage.getItem('noLogin');
		// if(noLogin){
		// 	this.props.history.push('/login');
		// }
		return(
			<HomeLayout>
				{!!noLogin&&<GoLogin />}
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