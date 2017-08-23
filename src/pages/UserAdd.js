import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

class UserAdd extends React.Component{
	render(){
		return(
			<HomeLayout title='添加用户'>
				<UserEditor history={this.props.history}/>
			</HomeLayout>
		)
	}
}

export default UserAdd;