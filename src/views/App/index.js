import React, { Component, PropTypes }  from 'react';
import {connect} from 'react-redux';
import {Affix , Row, Col} from 'antd';
import Sidebar from '../../components/Sidebar'
import {fetchProfile, logout,fetchPower} from '../../actions/user';
import {routeChange} from '../../utils/index.js';
import * as common from '../../utils/index.js';
import * as config from '../../config';




class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {dispatch,user} = this.props;
    //dispatch(fetchProfile());
    //dispatch(fetchPower())

    if(Object.keys(user.userinfo).length<1) {
      common.fetchDefaultUserinf.bind(this)(dispatch, 1);
    }
    common.bindHistorylistener.bind(this)();
  }

  componentWillReceiveProps(nextprops){
    if(nextprops.user.loggingOut == true && nextprops.user.loggingIn == false){
      routeChange.call(this,'fade','/login',true)
    }
  }


  render() {
    const {user, actions} = this.props;

    return (
      <div className="ant-layout-aside" style={{minWidth: config.layoutMinWidth}}>
        <Sidebar />
        <div className="ant-layout-main" style={{marginLeft:config.leftAside}}>
          <div className="ant-layout-container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,

};

App.contextTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state){
  const {user} = state;
  return {user};
};



export default connect(mapStateToProps)(App);
