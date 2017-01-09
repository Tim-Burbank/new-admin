import * as qs from 'querystring';
import * as config from '../config';

import {routerChange,historyBack} from '../actions/common';
import {getUserSuccess} from '../actions/user';



export function isPromise(value) {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function';
  }
}

export function getCookie (name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

export function routeChange (dist,path,isreplace=false) {
  //const {dispatch} = this.props;
  //dispatch(routerChange(dist,path));
  if(!this.props.dispatch){
    this.props.routerChange(dist,path)
  }else{
    const {dispatch} = this.props;
    dispatch(routerChange(dist,path));
  }
  if(isreplace){
    this.context.router.replace(path);
  }else{
    this.context.router.push(path);
  }
}

export function bindHistorylistener(){
  const {dispatch,history} = this.props;
  function listener(e){
    return dispatch(historyBack());
  }
  window.addEventListener('popstate', listener, false);
}

export function checkStatus(response) {
  if (!response.ok) {   // (response.status < 200 || response.status > 300)
    const error = new Error(response.statusText,-1);
    error.response = response;
    throw error;
  }
  return response;
}

export function checkRsponseStatus(response) {
  if (response.status!='success') {   // (response.status < 200 || response.status > 300)
    let error = new Error(response.msg,response.code);
    error.code=response.code;
    throw error;
  }
  return response;
}

export function parseJSON(response) {
  return response.json();
}


export function easyfetch(url, method, args) {
  switch (method.toLowerCase()) {
    case 'post':
    case 'put':
    case 'delete':
      return fetch(`${config.serverurl}${url}`, {
        method: method,
        credentials: 'include',
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
          "Accept-language":"all"
        },
        body: qs.stringify(args)
      }).then(checkStatus) .then(parseJSON).then(checkRsponseStatus);
    case 'get':
        let qsStringify=qs.stringify(args);
      qsStringify=qsStringify?'?'+qsStringify:'';
      return fetch(`${config.serverurl}${url}${qsStringify}`, {
        method: method,
        credentials: 'include',
        headers: {
          Accept: 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
          "Accept-language":"all"
        }
      }).then(checkStatus) .then(parseJSON).then(checkRsponseStatus)

  }
}


//type: 0, 不强制登录； 1,返回到当前页面； 2， 强制登录并返回到userhome
export function fetchDefaultUserinf(dispatch, type) {
  return easyfetch('/userinfo?a=1', 'get',{},'',{
    Accept: 'application/x-www-form-urlencoded',
    'Content-Type': 'application/x-www-form-urlencoded'
  },true)
      .then(json => {
        if(!json.id) {
          if(type == 1) {
            routeChange.call(this, 'right', '/login?backurl='+location.pathname, false);
          }else if(type == 2) {
            routeChange.call(this, 'right', '/login', false);
          }
        }else {
          dispatch(getUserSuccess(json));
          //let args = {
          //  fid: json.id
          //};
          //dispatch(fetchuserhome(args));
          //easyfetch('/proxy/saveopenid', 'get');
        }
      })
      .catch(error => {
        if(type == 1) {
          routeChange.call(this, 'right', '/login?backurl='+location.pathname, false);
        }else if(type == 2) {
          routeChange.call(this, 'right', '/login', false);
        }
      })
}

// 增加对象key的前缀
export let addPrefixObjectKeys=(obj,prefix)=>{
  return Object.assign({},
      ...Object.keys(obj) .
      map(key => ({[`${prefix}${key}`]: obj[key]}))
  );
};

//防抖动
export  function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  var later = function() {
    var last = +new Date - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout)
          context = args = null;
      }
    }
  };

  return function() {
    context = this;
    args = arguments;
    timestamp = +new Date;
    var callNow = immediate && !timeout;

    if (!timeout)
      timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}