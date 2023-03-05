import React, { Component } from 'react';
// 引入store 用于获取redux中的状态
import store from "../../../../redux/store";
// 引入action, 在专门用于创建action对象
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from "../../../../redux/count_action.js";

console.log(store);
export default class Count extends Component {

    state = {count:0}

    // 检测redux中状态的变化, 只要变化, 就调用render
    componentDidMount(){
         store.subscribe(()=>{
             this.setState({})
         })
    }
    // 加法
    increment = ()=>{
        const {value} = this.selecNumber;
       store.dispatch(createIncrementAction(Number(value)))
    }
    // 减法
    decrement= ()=>{
        const {value} = this.selecNumber;
        store.dispatch(createDecrementAction(Number(value)))

        
    }
    // 奇数再加
    incrementIfOdd= ()=>{
        const {value} = this.selecNumber;
        const count = store.getState();
        if(count % 2 !== 0){
            store.dispatch(createIncrementAction(Number(value)))
        }
    }
    // 异步
    incremenAsync= ()=>{
        const {value} = this.selecNumber;
            store.dispatch(createIncrementAsyncAction(Number(value),500))
    }
  render() {
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
        <select ref={c=>this.selecNumber = c} >
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
        </select>
        <button onClick={this.increment} >+</button>
        <button onClick={this.decrement} >-</button>
        <button onClick={this.incrementIfOdd} >当前求和为奇数再加</button>
        <button onClick={this.incremenAsync}>异步加</button>
      </div>
    )
  }
}
