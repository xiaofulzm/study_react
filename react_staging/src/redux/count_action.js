
/*
 *该文件专门为count组件生成action对象 
 * 
*/

import{INCREMENT,DECREMENT} from "./constant";


export const  createIncrementAction = data=>({type:INCREMENT,data});

// 异步action  异步action中 一般都会调用同步action
export const  createIncrementAsyncAction = (data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data));
        },time)
    }
}

export const createDecrementAction = data=>({type:DECREMENT,data});
