/**
 * Created by Yurek on 2016/8/31.
 */
//import{
//    ROUTECHANGE,
//    HISOTRYBACKSTYLE,
//    HISOTRYBACK,
//    FETCHMODAL_SHOW         ,
//    FETCHMODAL_HIDDEN       ,
//} from '../actions/common'


//import {
//    SAVE_NAV
//} from '../actions/user';

import * as actionTypes from '../constants/actionTypes'

export function router(state={
},action){
    switch (action.type){
        case actionTypes.ROUTECHANGE:
            return Object.assign({},state,{
                dist:action.dist,
                backdist:null
            });
        case actionTypes.HISOTRYBACKSTYLE:
            state.dist=action.dist;
            return Object.assign({},state,{
                backdist:action.dist
            });
        default:
            return state;
    }
}

export function history(state=[],action){
    switch (action.type){
        case actionTypes.ROUTECHANGE:
            return state;
        case actionTypes.HISOTRYBACK:
            return state;
        default:
            return state;
    }
}

export function modal(state={
    visible:false,
    data:{},
},action){
    switch(action.type){
        case actionTypes.FETCHMODAL_SHOW:
            return {
                ...state,
                visible:true,
                data:action.data
            };
        case actionTypes.FETCHMODAL_HIDDEN:
            return {
                ...state,
                visible:false,
                data:action.data
            };
        default:
            return state;
    }
}

export function saveNavState (state={
    nav:""
},action){
    switch (action.type){
        case actionTypes.SAVE_NAV:
            return{
                ...state,
                nav:action.nav
            }
        default:
            return state
    }
}
