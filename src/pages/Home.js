import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
	render(){
		return(
			<div>
				<header>
					<h1>Welcome</h1>
				</header>

				<main>
					<Link to="/user/add">添加用户</Link>
				</main>
			</div>
		)
	}
}

export default Home;