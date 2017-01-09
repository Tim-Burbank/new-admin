import { Row, Col, Collapse, Alert } from 'antd';
import {routeChange, fetchDefaultUserinf} from '../../utils/index';
import React,{Component,PropTypes} from 'react';
import {connect } from 'react-redux';


class Home extends React.Component {
  constructor () {
    super()
  }

  componentWillMount() {
    const {dispatch, userinfo} = this.props;
    console.log(userinfo)
    if(!userinfo) {
      fetchDefaultUserinf.bind(this)(dispatch, 1);
    }
  }

  callback() {

  }

  render () {
      return (
      <div>
        <p>HELLO</p>
      </div>
    )
  }
}


Home.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state){
  const {user} = state;
  return {
    user: user.login,
    userinfo: user.userinfo
  };
};


export default connect(mapStateToProps)(Home)