

import{ADDPERSON} from "../constant";

const initState = [{id:1,name:'fu',age:18}];
export default function personReducer(preState=initState,action){
    const {type,data} = action;

    switch (type){
        case ADDPERSON: // 加
            return [data,...preState];
        default:
            return preState;
    }
}