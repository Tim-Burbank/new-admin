/**
 * Created by Yurek on 2016/8/30.
 */



import * as actionTypes from '../constants/actionTypes'

export function routerChange(dist,path,isreplace=false){
    return (dispatch, getState) => {
        let state=getState();
        if(!isreplace){
            state.history.push({path:path,dist:dist});
        }
        //if(isreplace){
        //    this.context.router.replace(path);
        //}else{
        //    state.history.push({path:path,dist:dist});
        //    this.context.router.push(path);
        //}
        return dispatch({
            type:actionTypes.ROUTECHANGE,
            dist:dist,
            path:path
        });
    };

}

export function historyBackStyle(){
    return (dispatch, getState) => {
        let state=getState();
        let dist='fade';
        const h=state.history[state.history.length-1];
        if(h) {
            if (h.dist == 'left') {
                dist = 'right';
            }
            else if (h.dist == 'right') {
                dist = 'left';
            }
            return dispatch({
                type: actionTypes.HISOTRYBACKSTYLE,
                dist: dist,
            });
        }
    };
}

export function historyBack(){
    return (dispatch, getState) => {
        let state=getState();
        state.history.pop();
        dispatch(historyBackStyle());
        return dispatch({
            type: actionTypes.HISOTRYBACK,
        });
    };
}


export function fetchModalShow(data){
    return {
        type:actionTypes.FETCHMODAL_SHOW,
        data:data
    }
}

export function fetchModalHidden(){
    return {
        type:actionTypes.FETCHMODAL_HIDDEN,
        data:{}
    }
}



