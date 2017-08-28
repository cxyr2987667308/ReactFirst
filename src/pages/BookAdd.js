import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import BookEditor from '../components/BookEditor';

class BookAdd extends React.Component{
	render(){
		return(
			<BookEditor history={this.props.history}/>
		)
	}
}

export default BookAdd;