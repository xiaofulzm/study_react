

/**
 * 1. 该文件是用于创建一个为count组件服务的reducer, reducer的本质就是一个函数
 * 2. reducer函数会接到两个参数, 分别为: 之前的状态(preState), 动作对(action)
 * 
*/

import{INCREMENT,DECREMENT} from "../constant";

const initState = 0;
export default function countReducer(preState=initState,action){
    const {type,data} = action;

    switch (type){
        case INCREMENT: // 加
            return preState +  data;
        case DECREMENT: // 减
            return preState -  data;
        default:
            return preState;
    }
}