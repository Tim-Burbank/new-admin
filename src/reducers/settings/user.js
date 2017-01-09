import * as actionTypes from '../../constants/actionTypes'

const initialState = {
  login: null,
  loggingIn: false,
  loggingOut: false,
  loginErrors: null,
  userinfo:{}
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOGIN_PENDING:
      return Object.assign({}, state, {loggingIn: true,loggingOut: false});
    case actionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {login: action.login,loggingIn: false});
    case actionTypes.GETUSER_SUCCESS: //获取用户登录信息，session
      return {
        ...state,
        userinfo: action.json
      };
    case actionTypes.GETUSER_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        login: null,
        loginErrors: action.error
      };
    case actionTypes.LOGOUT_SUCCESS:
      console.log('LOGOUT_SUCCESS',action)
      return {
        ...state,
        loggingIn: false,
        loggingOut: true,
        login: null,
        loginErrors: null,
        userinfo:{}
      };
    default:
      return state;
  }
}

