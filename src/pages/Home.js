import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
	render(){
		return(
			<div>
				<Link to="/user/list">用户列表</Link>
				<br/>
				<Link to="/book/list">图书列表</Link>
			</div>
		)
	}
}

export default Home;