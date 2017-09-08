import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import {Input} from 'antd';
import style from '../styles/go-login.less';

class GoLogin extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={style.goLogin}>
				<div className={style.content}>
					<Link to="/login">去登录</Link>
				</div>
			</div>
    );
  }
}

GoLogin.propTypes = {
  value: PropTypes.any,
  options: PropTypes.array,
  onChange: PropTypes.func
};

export default GoLogin;
