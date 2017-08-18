import React from 'react';
import FormItem from '../components/FormItem';
import formProvider from '../utils/formProvider';

class UserAdd extends React.Component{
	handleSubmit(e){
		// 阻止表单submit事件自动跳转页面的动作
		e.preventDefault();

		const {form: { name, age, gender }, formValid} = this.props;
		if(!formValid){
			console.log('请填写正确的信息后重试');
			return;
		}

		fetch('http://localhost:8080/user', {
			method: 'post',
			body: JSON.stringify({
				name: name.value,
				age: age.value,
				gender: gender.value
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((res) => res.json())
		.then((res) => {
			// 当添加成功时,返回的json对象中应包含一个有效的id字段
			// 所以可以使用res.id来判断添加是否成功
			if(res.id){
				console.log("添加用户成功");
			}else{
				console.log("添加失败");
			}
		})
		.catch((err) => console.error(err));
	}

	render(){
		const {form: {name, age, gender}, onFormChange} = this.props;
		return (
			<div>
				<header>
					<h1>添加用户</h1>
				</header>

				<main>
					<form onSubmit={(e) => this.handleSubmit(e)}>
						<FormItem label="用户名:" 
						  valid={name.valid} 
							error={name.error}>
							<input type="text" 
						       value={name.value} 
									 onChange={(e) => onFormChange('name', e.target.value)} />
						</FormItem>

						<FormItem label="年龄:" 
						    valid={age.valid} 
								error={age.error}>
							 <input type="text" 
						       value={age.value||''} 
									 onChange={(e) => onFormChange('age', +e.target.value)} />
						</FormItem>

						<FormItem label="性别:" 
						   valid={gender.valid} 
							 error={gender.error}>
							 <select value={gender.value} 
											onChange={(e) => onFormChange('gender', e.target.value)}>
								<option value="">请选择</option>
								<option value="male">男</option>
								<option value="female">女</option>
							</select>
						</FormItem>
						<br/>
						<input type="submit" value="提交"/>
					</form>
				</main>
			</div>
		)
	}
}

UserAdd = formProvider({
	name: {
		defaultValue: '',
		rules: [
			{
				pattern: function(value){
					return value.length > 0;
				},
				error: '请输入用户名'
			},
			{
				pattern: /^.{1,4}$/,
				error: '用户名最多4个字符'
			}
		]
	},
	age: {
		defaultValue: 0,
		rules: [
			{
				pattern: function(value){
					return value >= 1 && value <= 100;
				},
				error: '请输入1~100的年龄'
			}
		]
	},
	gender: {
		defaultValue: '',
		rules: [
			{
				pattern: function(value){
					return !!value;
				},
				error: '请选择性别'
			}
		]
	}
})(UserAdd);

export default UserAdd;