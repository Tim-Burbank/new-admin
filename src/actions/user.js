
import {easyfetch} from '../utils/index.js'

import {getCookie} from '../utils';

import * as actionTypes from '../constants/actionTypes'




const loginrequest=()=>({type:actionTypes.LOGIN_PENDING});
const loginsuccess=(json)=>{
    return {
        type:actionTypes.LOGIN_SUCCESS,
        login:json
    }
};
const loginfailure=(error)=>({type:actionTypes.LOGIN_ERROR,error});



export const login=(condition)=>{
    return dispatch=>{
        dispatch(loginrequest());
        return easyfetch('/account/login','put',condition)
            .then(json=>dispatch(loginsuccess(json)))
            .catch(error=>dispatch(loginfailure(error)))
    }
};
export function logout(){
    return dispatch=>{
        return easyfetch('account/logout','put')
            .then(json=>dispatch({type:actionTypes.LOGOUT_SUCCESS,status:'success'}))
            .catch(error=>dispatch({type:'FETCTH_FAILURE',error:error}))
    }
}

export const getUserSuccess = (json) => {
    return {
        type: actionTypes.GETUSER_SUCCESS,
        json: json
    }
};
const getUserFailure = (error) => {
    return {
        type: actionTypes.GETUSER_FAILURE,
        error: error
    }
};

export const getUserInf = () => {
    return (dispatch) => {
        return easyfetch('/userinfo', 'get')
            .then(json => {
                dispatch(getUserSuccess(json));
            })
            .catch(error => {
                dispatch(getUserFailure(error));
            })
    }
};

