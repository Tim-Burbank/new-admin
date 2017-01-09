import React, { PropTypes } from 'react'
import { Form, Input, Button, Row, Col, notification,Icon } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login ,getUserInf} from '../../actions/user'
import {routeChange} from '../../utils/index.js';
import * as actions from '../../actions';

const FormItem = Form.Item



const propTypes = {
  user: PropTypes.object,
  loggingIn: PropTypes.bool,
  loginErrors: PropTypes.string
};

const contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

class Login extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
          "a":"abc"
    }
  }

  componentWillReceiveProps(nextProps) {
      const error = nextProps.loginErrors;
      const isLoggingIn = nextProps.loggingIn;
      const user = nextProps.user

      if (error != this.props.loginErrors && error) {
          notification.error({
              message: 'Login Fail',
              description: error
          });
      }

      if (!isLoggingIn && !error && user)  {
          notification.success({
              message: 'Login Success',
              description: 'Welcome ' + user.username
          });
      }
      if (user) {
          routeChange.call(this,'fade','/home',true)
      }
  }

    handleSubmit(e){
        e.preventDefault();
        const {dispatch} = this.props;
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            console.log('save values',values)
            this.props.login(values)
                .then(e=>{
                    if(!e.error){
                        this.props.getUserInf();
                    }
                })
        });
    }
  render () {

    const { getFieldDecorator } = this.props.form
    return (
        <Form  onSubmit={this.handleSubmit.bind(this)} className="login-form">
            <FormItem>
                {getFieldDecorator('username',{
                    rules: [
                        { required: true,message: 'Please input your username!' }
                    ]})(<Input addonBefore={<Icon type="user" />} placeholder='admin' />)}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password',{
                    rules: [{ required: true,message: 'Please input your Password!' }]
                })(<Input addonBefore={<Icon type="lock" />} type='password' placeholder='Password'  />)}
            </FormItem>
            <FormItem>
                <Button style={{width:"100%",margin:"2px 0 -25px 0"}}type='primary' className="login-form-button" htmlType='submit'>Log in</Button>
            </FormItem>
        </Form>
    )
  }
}

Login.contextTypes = contextTypes;

Login.propTypes = propTypes;

Login = Form.create()(Login);

function mapStateToProps(state) {
  const {user} = state;
   const result = {
        user:user.login
    };
    return result;
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(actions.login, dispatch),
    getUserInf:bindActionCreators(actions.getUserInf, dispatch),
    routerChange:bindActionCreators(actions.routerChange,dispatch)
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login)
