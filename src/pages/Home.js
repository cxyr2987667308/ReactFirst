import React from 'react';
import { Link } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

class Home extends React.Component{
	render(){
		return(
			<HomeLayout title="Welcome">
				<Link to="/user/list">用户列表</Link>
				<br/>
				<Link to="/book/list">图书列表</Link>
				<div onClick={()=>{console.log(history);return history.go(-1)}}> tiaozhuan</div>	
			</HomeLayout>
		)
	}
}

export default Home;