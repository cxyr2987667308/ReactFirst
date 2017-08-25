import React from 'react';
import FormItem from './FormItem';
import AutoComplete from './AutoComplete';
import formProvider from '../utils/formProvider';
import request, { get } from '../utils/request';

class BookEditor extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			recommendUsers: []
		}
	}

	componentWillMount () {
    const {editTarget, setFormValues} = this.props;
    if (editTarget) {
      setFormValues(editTarget);
    }
  }

	handleSubmit = (e) => {
    e.preventDefault();
		console.log(this.props);

    const {form: {name, price, owner_id}, formValid, editTarget, history} = this.props;
    if (!formValid) {
      console.log('请填写正确的信息后重试');
      return;
    }

    let editType = '添加';
    let apiUrl = 'http://localhost:8080/book';
    let method = 'post';
    if (editTarget) {
      editType = '编辑';
      apiUrl += '/' + editTarget.id;
      method = 'put';
    }

    request(method, apiUrl, {
        name: name.value,
        price: price.value,
        owner_id: owner_id.value
    })
      .then((res) => {
        if (res.id) {
          alert(editType + '书本成功');
          history.push('/book/list');
          return;
        } else {
          alert(editType + '失败');
        }
      })
      .catch((err) => console.error(err));
  }

	getRecommendUsers = (partialUserId) => {
		get('http://localhost:8080/user?id_like='+partialUserId)
		.then((res) => {
			if(res.length === 1 && res[0].id === partialUserId){
				// 如果结果只有1条且id与输入的id一致，说明输入的id已经完整了，没必要再设置建议列表
				return;
			}

			// 设置建议列表
			this.setState({
				recommendUsers: res.map((user) => {
					return{
						text: `${user.id} (${user.name})`,
						value: user.id
					}
				})
			})
		})
	}

	timer = 0;
	handleOwnerIdChange = (value) => {
		this.props.onFormChange('owner_id', value);
		this.setState({
			recommendUsers: []
		})

		// 使用"节流"的方式进行请求，防止用户输入的过程中过多地发送请求
		if(this.timer){
			clearTimeout(this.timer);
		}

		if(value){
			// 200毫秒内只会发送1次请求
			this.timer = setTimeout(() => {
				// 真正的请求方法
				this.getRecommendUsers(value);
				this.timer = 0;
			}, 200);
		}
	}

	render () {
    const {recommendUsers} = this.state;
    const {form: {name, price, owner_id}, onFormChange} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormItem label="书名：" valid={name.valid} error={name.error}>
          <input type="text" value={name.value} onChange={e => onFormChange('name', e.target.value)}/>
        </FormItem>

        <FormItem label="价格：" valid={price.valid} error={price.error}>
          <input type="number" value={price.value || ''} onChange={e => onFormChange('price', +e.target.value)}/>
        </FormItem>

        <FormItem label="所有者：" valid={owner_id.valid} error={owner_id.error}>
          {/*<input type="number" value={owner_id.value || ''} onChange={e => onFormChange('owner_id', +e.target.value)}/>*/}
          <AutoComplete
            value={owner_id.value ? owner_id.value + '' : ''}
            options={recommendUsers}
            onValueChange={value => this.handleOwnerIdChange(value)}
          />
        </FormItem>
        <br/>
        <input type="submit" value="提交"/>
      </form>
    );
  }
}

BookEditor.contextTypes = {
  router: React.PropTypes.object.isRequired
};

BookEditor = formProvider({
  name: {
    defaultValue: '',
    rules: [
      {
        pattern (value) {
          return value.length > 0;
        },
        error: '请输入书名'
      }
    ]
  },
  price: {
    defaultValue: 0,
    rules: [
      {
        pattern: /^\d+$/,
        error: '请输入一个整数'
      },
      {
        pattern (value) {
          return value > 0;
        },
        error: '价格必须大于0'
      }
    ]
  },
  owner_id: {
    defaultValue: 0,
    rules: [
      {
        pattern: /^\d+$/,
        error: '请输入合法的用户ID'
      },
      {
        pattern (value) {
          return value !== 0;
        },
        error: '请输入用户ID'
      }
    ]
  }
})(BookEditor);

export default BookEditor;