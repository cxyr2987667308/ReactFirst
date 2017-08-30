import React from 'react';
import BookEditor from '../components/BookEditor';

class BookAdd extends React.Component{
	render(){
		return(
			<BookEditor history={this.props.history}/>
		)
	}
}

export default BookAdd;