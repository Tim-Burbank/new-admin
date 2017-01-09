import {toFixed,numberWithCommas} from './common'

// 所有时间字段
let allColumns={

    //Amount
    totbudget:{ title: 'Total Budget',type:'amount' },
    taxamount:{ title: 'Tax Amount',type:'amount'},
    netamount:{ title: 'Net Amount',type:'amount'},
    salary:{ title: 'Salary',type:'amount'},
    cola:{ title: 'COLA',type:'amount'},
    bonus:{ title: 'Bonus',type:'amount'},
    comSocial:{ title: 'Company Social',type:'amount'},
    othincome:{ title: 'Other Income',type:'amount'},
    amount:{ title: 'Amount',type:'amount'},
    personsocial:{ title: 'Peronal social',type:'amount'},
    comsocial:{ title: 'Common socia',type:'amount'},
    taxamt:{ title: 'Tax amount',type:'amount'},
    actsalary:{ title: 'Actual salary',type:'amount'},
    socialMin:{ title: 'Social Min',type:'amount'},
    socialMax:{ title: 'Social Max',type:'amount'},
    personSocial:{ title: 'Personal Social',type:'amount'},
    salaryIncrease:{title:'Salary Increase',type:'amount'},
    salaryYear:{title:'Salary Year',type:'amount'},
    increaseYear:{title:'Increase Year',type:'amount'},
    afterYear:{title:'After Year',type:'amount'},
    increasedSalary:{title:'Monthly Salary After',type:'amount'},
    cost:{ title: 'Cost',type:'amount'},


    //number
    taxrate:{ title: 'Tax Rate',type:'number'},
    discount:{ title: 'Discount',type:'number'},
    totaljob:{ title: 'Total Job',type:'number'},
    mulRate:{ title: 'Mul Rate',type:'number',width:50},
    dictRate:{ title: 'Dict Rate',type:'number',width:50},
    benRate:{ title: 'Benefit Rate',type:'number',width:50},
    overRate:{ title: 'Overhead Rate',type:'number',width:50},
    mkpRate:{ title: 'Markup Rate',type:'number',width:50},
    taxRate:{ title: 'Tax Rate',type:'number',width:50},
    invRate:{ title: 'Inv Rate',type:'number',width:50},
    divRate:{ title: 'Div Rate',type:'number',width:50},

    //percent
    incRate:{ title: 'Increase Rate',type:'percent'},
    actualRate:{ title: 'Actual Increase',type:'percent'},


    //date
    validDt: { title: 'Valid Date',type:'date'},
    invalidDt: { title: 'Invalid Date',type:'date'},
    startDt:{ title: 'Start Date',type:'date'},
    leaveDt:{ title: 'Leaving Date',type:'date'},
    birthday:{ title: 'Birthday',type:'date'},
    actualLeaveDt:{ title: 'Active Leaving Date',type:'date'},
    reviewDt:{ title: 'Review Date',type:'date'},
    recdate:{ title: 'Recipt Date',type:'date'},
    pldate:{ title: 'Plan Leave Date',type:'date'},
    updatedAt:{ title: 'Update Date',type:'date'},
    createdAt:{ title: 'Create Date',type:'date'},

    //sow
    id:{ title: 'Code' },
    version:{ title: 'Version' },
    versionflag:{ title: 'Final Confirm' },
    createUsr:{ title: 'Create User' },

    //basic info
    age:{ title: 'Age'},

    // setting office
    person:{ title: 'Person'},
    mobile:{ title: 'Mobile'},
    zipNo:{ title: 'Zip.no'},
    email:{ title: 'Email'},
    faxNo:{ title: 'Fax'},
    TaxNo:{ title: 'Tax'},
    address1:{ title: 'Address1'},
    address2:{ title: 'Address2'},
    address3:{ title: 'Address3'},
    note1:{ title: 'Note1'},
    note2:{ title: 'Note2'},
    note3:{ title: 'Note2'},
    telephone:{ title: 'Telephone'},
    regAddress:{ title: 'Reg Address'},
    regTel:{ title: 'Reg Tel'},

    //setting billTo
    contact:{ title: 'Contact'},
    taxNo:{ title: 'Tax'},

    //setting salaryType
    desc:{ title: 'Description'},
    salaryflag:{ title: 'Salary Flag'},
    colaflag:{ title: 'Cola Flag'},
    bonusflag:{ title: 'Bonus Flag'},
    taxflag:{ title: 'Tax Flag'},
    socialflag:{ title: 'Social Flag'},
    rate:{ title: 'Rate'},
    othincomeflag:{title:'Othincome Flag'},
    salary13thflag:{title:'Salary13th Flag'},
    recordflag:{title:'Record Flag'},

    //setting section
    sectiontype:{ title: 'Team Type'},

    //setting social
    des:{ title: 'Description'},
    socialType:{ title: 'Social Type'},
    socialrates:{ title: 'Social Rate'},

    //Salary Record
    period:{ title: 'Month'},
    excRate:{ title: 'Exc Rate'},

    //other
    HCCategory:{ title: 'HC Category'},
    salaryIncreased:{title:'Salary Increased'},
    sysCls:{title:'Owner'},
    country:{title:'Country'},
    advanceLeaveMonth:{title:'Advance Leave Month'},
    salaryTypeId:{title:'Salary type'},
    countNum:{title:'NO.'},
    operation:{title:'Operation'},
    purchaserequistionId:{ title: 'Purchasere quistion'},
    recruitstatus:{ title: 'Recruit Status'},
    rlsstatus:{ title: 'Release Status'},
    name:{ title: 'Name'},
    jobcode:{ title: 'Job'},
    jobId:{ title: 'Job'},
    projectId:{ title: 'Project'},
    seqno:{ title: 'Sequence'},
    location:{ title: 'Expat/Local'},
    projectdetailId:{ title: 'Project'},
    peId:{ title: 'PE'},
    gender:{ title: 'Gender'},
    reviewCly:{ title: 'Review Cycle'},
    incCly:{ title: 'Increase Cycle'},
    currencyId:{ title: 'Currency'},
    payBy:{ title: 'Pay By'},
    fiscalYear:{title: 'Year'},
    code:{title: 'Code'},
    jobstatus:{title: 'Status'},
    companyName:{title: 'Company'},
    customId:{title: 'Unit'},
    officeId:{title: 'Office'},
    fordFunctionId:{title: 'Ford Function'},
    sectionId:{title: 'Department'},
    stdTitleId:{title: 'Standardized Title'},
    activeflag:{title: 'Active Status'},
    stafftype:{ title: 'Staff Type'},
    staffstatus:{ title: 'Staff Status'},
    staffcode:{title: 'Staff Code'},
    staffname:{title: 'Employee'},
    staffId:{title: 'Employee'},
    stdpos:{title: 'Standardized Position'},
    level:{title: 'Level'},

    //entry order , job order ,leave order table Columns
    jobAmount:{ title: 'Job Amount' },
    jobCost:{ title: 'Job Cost' },
    jobRest:{ title: 'Job Rest' },
    sectionAmount:{ title: 'Team Amount' },
    sectionCost:{ title: 'Team Cost' },
    sectionRest:{ title: 'Team Reset' },
    sowSalary:{ title: 'Sow Salary' },
    sowCola:{ title: 'Sow Cola' },
    sowBonus:{ title: 'Sow Bonus' },
    sowOthincome:{ title: 'Sow Other Income' },
    sowRate:{ title: 'Sow Rate' },
};
let formColumns= {
    ...allColumns,
    name: {title: 'Name'}
};


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

export function getColumnsProps(list,render=false,allList=allColumns){
    // console.log('getColumnsProps start');
    let findColumn=(field)=>{
        let titleField=field;

        //如果输出表格render
        if(field.indexOf('_')>-1){
            let fields=field.split('_');
            titleField=render?fields[1]:fields[0];
        }

        let column={dataIndex:field,key:field};
        if(allList[titleField]){
            column={...column,...allList[titleField]};
        }else{
            console.log('allList can not get '+field);
        }
        return column;
    };
    //is array
    if(Array.isArray(list)){
        return list.map(item=>{
            let column={};

            //合并list，columns
            if(typeof  item==='string'){
                column=findColumn(item);
            }else {
                if(item.dataIndex){
                    column={...findColumn(item.dataIndex),...item};

                    //get columns children
                }else if(item.children){
                    column={...item};
                    column.children=getColumnsProps(column.children,render,allList);
                }
            }

            //是否增加 render (用于表格格式化输出)
            if(render){

                //设置数字，金额表格的默认宽度
                if((column.type==='amount' || column.type==='number')&&!column.width){
                        column.width=column.title.length*9;
                }

                let getRenderValue=(text,type)=>{

                    //number
                    if(!isNaN(text)){
                        if(type==='number'){
                            text=numberWithCommas(text);

                            //amount
                        }else if(type==='amount'){
                            text=numberWithCommas(toFixed(text));
                        }else if(type==='percent'){
                            let num=toFixed(parseFloat(text)*100);
                            text=`${isNaN(num)?0:num}%`;
                        }
                    }
                    return text;
                };
                let customRender=column.render;
                let numAry=['amount','number','percent'];
                //record has deep object
                if(column.dataIndex&&column.dataIndex.indexOf('_')>-1){
                    let fields=column.dataIndex.split('_');
                    column.render=(text, record,index)=>{
                        let value=record[fields[0]]?record[fields[0]][fields[1]]:'';
                        if(numAry.indexOf(column.type)>-1){
                            column.className=`render-${column.type}`;
                            if(customRender){
                                return getRenderValue(customRender(value,record,index),column.type);
                            }else{
                                return getRenderValue(value,column.type)
                            }
                        }else{
                            return value;
                        }

                    };
                }else if(numAry.indexOf(column.type)>-1){
                    column.className=`render-${column.type}`;
                    if(customRender){
                        column.render=(text, record,index)=>getRenderValue(customRender(text,record,index),column.type)
                    }else{
                        column.render=(text, record,index)=>getRenderValue(text,column.type);
                    }
                }

            }

            return column;
        });

        //is object
    }else if(typeof list ==='object'){
        let columns={};
        for (let key in list){
            if(Array.isArray(list[key])){

                //get form columns
                if(key.indexOf('form')>-1){
                    columns[key]=getColumnsProps(list[key],false,formColumns);
                }else{

                    //get table columns
                    columns[key]=getColumnsProps(list[key],true);

                }
            }
        }
        return columns;
    }

}

// entry order , job order ,leave order modalTable
export const jobCostTableColumns=['jobAmount','jobCost','jobRest','sectionAmount','sectionCost','sectionRest','sowSalary','sowCola','sowBonus','sowOthincome','sowRate',];

export function querySelectColumnsRender(columns,querySelect){
    return columns.map(item=>{
        if(querySelect[item.dataIndex] && !item.render){
            let render=(text,record,index)=>{

                //遍历querySelect 查找text
                querySelect[item.dataIndex].every(subItem=>{
                    if(subItem.value==text){
                        text=subItem.text;
                        return false;
                    }
                    return true;
                });
            return text;
            }
            return {...item,render};
        }
        return item;
    });
}
