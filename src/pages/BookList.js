import React from 'react';
import { message, Table, Button, Popconfirm, Modal } from 'antd';
import { get, del } from '../utils/request';

class BookList extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			bookList: []
		}
	}

	componentWillMount(){
		get('http://localhost:8080/book')
		.then(res => {
			this.setState({
				bookList: res||[]
			})
		})
	}

	render(){
		const {bookList} = this.state;

		const columns = [
			{
				title: '图书ID',
				dataIndex: 'id'
			},{
				title: '书名',
				dataIndex: 'name'
			},{
				title: '价格',
				dataIndex: 'price',
				render: (text, record) => <span>&yen;{record.price}</span>
			},{
				title: '所有者ID',
				dataIndex: 'owner_id'
			},{
				title: '操作',
				render: (text, record) => (
					<Button.Group type="ghost">
						<Button size="small" onClick={() => this.handleEdit(record)}>编辑</Button>
						<Popconfirm title="确定要删除吗?" onConfirm={() => this.handleDel(record)}>
							<Button size="small">删除</Button>
						</Popconfirm>
					</Button.Group>
				)
			}
		]
		return(
			<Table columns={columns} dataSource={bookList} rowKey={row => row.id}/>
		)
	}

	handleAdd = () => {
		this.props.history.push('/book/add');
	}

	handleEdit = (book) => {
		this.props.history.push('/book/edit/'+book.id);
	}

	handleDel = (book) => {
		const confirmed = Modal.confirm(`确定要删除图书 ${book.name} 吗?`);

		if(confirmed){
			del('http://localhost:8080/book/'+book.id)
			.then(res => {
				this.setState({
					bookList: this.state.bookList.filter(item => item.id !== book.id)
				});
				message.success('删除图书成功');
			})
			.catch(err => {
				console.error(err);
				message.error('删除图书失败');
			})
		}
	}
}

export default BookList;