import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import UserEditor from '../components/UserEditor';

class UserAdd extends React.Component{
	render(){
		return(
			<UserEditor history={this.props.history}/>
		)
	}
}

export default UserAdd;