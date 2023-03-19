
/*
 *该文件专门为count组件生成action对象 
 * 
*/

import{ADDPERSON} from "../constant";

// 增加一个人
export const personAction  = (personObj) =>({type:ADDPERSON,data:personObj});
