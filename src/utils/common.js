import React from 'react'
import {message,Row,Col,Modal} from 'antd'

// antd form check 
export function checkMobile(rule, value, callback) {
    let isEmpty=value==='' || typeof value==='undefined';
    if (isEmpty || /^1[3|4|5|7|8][0-9]\d{8}$/.test(value)) {
        callback();
    } else {
        callback([new Error('Please enter a valid phone number')]);
    }
}
export function checkZip(rule, value, callback) {
    let isEmpty=value==='' || typeof value==='undefined';
    if (isEmpty || /^[1-9][0-9]{5}$/.test(value)) {
        callback();
    } else {
        callback([new Error('Please enter a valid Zip number')]);
    }
}

// 所有时间字段
export const dataFieldList=['leavedate','createdAt','updatedAt','pldate','recdate','upDt','rlsDt','startDt','birthday','date','validDt','invalidDt','leaveDt','actualLeaveDt','actleavedate'];

import moment from 'moment';
//转换时间格式的字段
export function  checkTransformDate(item) {
    for(let key in item){
        if(typeof item[key] === 'object'){
            item[key]=checkTransformDate(item[key]);
        }else if(Array.isArray(item[key])){
            item[key]=item[key].map(item=>{
                return checkTransformDate(item);
            });
        }else if(dataFieldList.indexOf(key)>-1){
            item[key]=moment(item[key]).format('YYYY-MM-DD');
        }
    }
    return item;
}

// check Select Option 属性值
export function getSelectOptionList(item) {
    let value=item.id || item.name || item.value;
    let text=item.name || item.desc || item.code || item.text;
    return {value:value,text:text}
}


// confirmModal
export function getConfirmModal(columns,title,fetch,confirmText='Confirm'){
    let content=columns.map((item,i)=>{
        return  (
            <Row key={item.title+i} style={{marginTop:10}}>
                <Col span={10} style={{textAlign:'right'}}>{item.title} :</Col>
                <Col span={12} offset={2}>{item.value}</Col>
            </Row>
        )
    });
    let loading=false;
    Modal.confirm({
        title: title,
        content: content,
        confirmLoading:loading,
        cancelText:'Cancel',
        okText:confirmText,
        width:480,
        onOk:()=>{
            loading=true;
            fetch().then((e)=>{
                if(e.error){
                    message.error(e.error.message,4);
                }else{
                    loading=false;
                }
            });
        }
    });
}


// 禁用表单 Columns:(Array)禁用的表单,list:(Array)禁用表单的dataIndex值,exclude:(Array)列外的dataIndex值
export let disabledColumns=(columns,list,exclude=[])=>{
    if(list){
        return columns.map(item=>{
            if(list.indexOf(item.dataIndex)>-1){
                return {...item,disabled:true};
            }
            return item;
        })
    }else{
        return columns.map(item=>{
            if(exclude.indexOf(item.dataIndex)<0){
                return {...item,disabled:true};
            }
            return item;
        })
    }
};

exports.toFixed=(num,fractionDigits=2)=>(Math.round(num * Math.pow( 10, fractionDigits  ))/Math.pow(10,fractionDigits)).toFixed(2);

exports.numberWithCommas=(x)=>{
    x=x===undefined?0:x;
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};