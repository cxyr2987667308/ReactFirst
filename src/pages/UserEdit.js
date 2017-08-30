import React from 'react';
import UserEditor from '../components/UserEditor';
import { get } from '../utils/request';

class UserEdit extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			user: null
		}
	}

	componentWillMount(){
		const userId = this.props.match.params.id;
		get('http://localhost:8080/user/'+userId)
		.then(res => {
			this.setState({
				user: res
			})
		})
	}

	render(){
		const {user} = this.state;
		return(
			<div>
				{
					user?<UserEditor editTarget={user} history={this.props.history}/>:'加载中...'
				}
			</div>
		)
	}
}

export default UserEdit;