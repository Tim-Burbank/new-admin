import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { Menu, Icon ,message} from 'antd'
import {routeChange} from '../../utils/index.js';
//import { logout,saveNavSuccess } from '../../actions/user'
import './index.scss';
import * as config from '../../config';
import * as actions from '../../actions';
import logo from '../logo/logo'
const SubMenu = Menu.SubMenu

  
class Sidebar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current : "0"
    };
    this.menuClickHandle = this.menuClickHandle.bind(this);
    //this.subMenuClick = this.subMenuClick.bind(this);
  }

  componentWillMount(){
    const {dispatch} = this.props
    console.log("props!!!",this.props)
  }
  //subMenuClick(key){
  //
  //}

  menuClickHandle (item) {
    //this.props.updateNavPath(item.keyPath, item.key);
    const {dispatch} = this.props;
    console.log(item);
    console.log('menuClickHandle=',this)
    //click user
    console.log('click ', item);
    this.setState({
      current: item.key,
    });
    if(item.keyPath.indexOf('user')>-1){
      if(item.keyPath.indexOf('logout')>-1){
        //dispatch(logout())
        this.props.logout()
      }else{
        message.warning('Coming soon');
      }
    }else{

      //click nav
      //dispatch(saveNavSuccess(item.key))

      routeChange.call(this,'fade','/'+item.keyPath.reverse().join('/'),false)
      //this.props.routerChange.call('Sidebar','fade','/'+item.keyPath.reverse().join('/'),false)

    }
  }

  render () {

    const  items_base  =[{
      key: 'menua',
      name: 'Menu_a',
      icon: 'team',
      child: [
        {
          name: 'Menu1',
          key: 'menu1',
          show:true
        },
        {
          name: 'Menu2',
          key: 'menu2',
          show:true
        }
      ]
    },
      {
        key: 'menub',
        name: 'Menu_b',
        icon: 'team',
        child: [
          {
            name: 'Menu3',
            key: 'menu3',
            show:true
          },
          {
            name: 'Menu4',
            key: 'menu4',
            show:true
          }
        ]
      }];
    const{user,userinfo} = this.props;
    const menua = ()=>{
      let menu = [];
      let _items_base = items_base.slice(0);
      _items_base.map((ibn, i1)=> {
        if (ibn.child != null && ibn.child.length > 0) {
          ibn.child.map((ibnc, i2)=> {
            if (ibnc.show == true || ibnc.show == null) {

            }
            else {
              for (let cno in ibnc.scopes) {
                let cnoo = ibnc.scopes[cno];
                //if (user.scopes.indexOf(cnoo) >= 0) {
                //  ibnc.show = true;
                //  ibn.show=true;
                //}
              }
              if (ibnc.show != true) {
                ibn.child.splice(i2,1);
              }
            }
          })
        }
      })

      menu = _items_base.map((item) => {
        return (

            <SubMenu style={{display:item.child.length>0&&item.show==true &&item.show==null}}
              key={item.key}
              title={<span><Icon type={item.icon} />{item.name}</span>}
            >
              {item.child.map((node) => {
                return (
                      <Menu.Item style={{display:node.show==true&&node.show==null}}
                          key={node.key}>{node.name}</Menu.Item>
                )
              })}
              <Menu.Divider />
            </SubMenu>
          )
      })
      return menu
    };
    const menut = menua();

    let userMeun;
    if(Object.keys(userinfo).length){
      userMeun=(<SubMenu  title={<span><Icon type="user" />{userinfo.username}</span>} key="user">
        <Menu.Item key="home"><Icon type="home" /> My account</Menu.Item>
         <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" /> logout</Menu.Item>
      </SubMenu>)
    }
    return (
      <aside className="ant-layout-sider" style={{width:config.leftAside}}>
        <div className="ant-layout-logo">
          <div>{logo()}</div>
          <Link to="/home">iMwork</Link></div>
        <Menu mode="inline"
              onClick={this.menuClickHandle}
              style={{fontSize:"14px"}}
              selectedKeys={[this.state.current]}>
          {<Menu.Divider />}
          {menut}
          {<Menu.Divider />}
          {userMeun}
        </Menu>
      </aside>
    )
  }
}


Sidebar.contextTypes = {
  router: PropTypes.object.isRequired
};



function mapStateToProps(state){
  const {user} = state;
  return {
    user: user.login,
    userinfo: user.userinfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: bindActionCreators(actions.logout, dispatch),
    routerChange:bindActionCreators(actions.routerChange,dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
