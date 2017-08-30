import React from 'react';
import BookEditor from '../components/BookEditor';
import { get } from '../utils/request';

class BookEdit extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			book: null
		}
	}

	componentWillMount(){
		const bookId = this.props.match.params.id;
		get('http://localhost:8080/book/'+bookId)
		.then(res => {
			this.setState({
				book: res
			})
		})
	}

	render(){
		const {book} = this.state;
		return(
			<div>
				{
					book?<BookEditor editTarget={book} history={this.props.history}/>:'加载中...'
				}
			</div>
		)
	}
}

export default BookEdit;