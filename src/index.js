import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect, useRouterHistory} from 'react-router';
import {createHistory} from 'history'

import configureStore from './store/configureStore';

import App from './views/App';
import Home from './views/Home';
import Login from './views/Login';
import Menu1 from './containers/Menu1';
import Menu2 from './containers/Menu2';


import {getCookie} from './utils';
import 'antd/dist/antd.min.css';
import '../public/scss/global.scss';


const history = useRouterHistory(createHistory)({ basename: '' });
const store = configureStore();

const validate = function (next, replace, callback) {
  const isLoggedIn = !!getCookie('uid')
  if (!isLoggedIn && next.location.pathname != '/login') {
    replace('/login')
  }
  callback()

}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" >
          <IndexRedirect to="home" />
          <Route component={App}>
            <Route path="home" component={Home}/>
            <Route path="/menua">
              <Route path="menu1" component={Menu1}/>
              <Route path="menu2" component={Menu2}/>
            </Route>
          </Route>
          <Route path="login" component={Login}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
