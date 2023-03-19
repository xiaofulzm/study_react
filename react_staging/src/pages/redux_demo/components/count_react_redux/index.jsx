import React, { Component } from 'react';

import { 
    createDecrementAction,
    createIncrementAsyncAction,
    createIncrementAction 
} from '../../../../redux/actions/count_action';
import { connect } from 'react-redux';
class Count extends Component {

    state = {count:0}

    // 检测redux中状态的变化, 只要变化, 就调用render
    componentDidMount(){
         
    }
    // 加法
    increment = ()=>{
        const {value} = this.selecNumber;
        this.props.jia(Number(value))
    }
    // 减法
    decrement= ()=>{
        const {value} = this.selecNumber;
        this.props.jian(Number(value))

    }
    // 奇数再加
    incrementIfOdd= ()=>{
        const {value} = this.selecNumber;
        if(this.props.count %2 !==0){
            this.props.jia(Number(value))
        }
    }
    // 异步
    incremenAsync= ()=>{
        const {value} = this.selecNumber;
        this.props.jiaAsync(Number(value),500)

    }
  render() {
    return (
      <div>
        <h1>当前求和为:{this.props.count}.人数{this.props.ren.length}</h1>
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


export default connect(
    state => ({count:state.he,ren:state.rens}),
    {
        jia:createIncrementAction,
        jiaAsync:createIncrementAsyncAction,
        jian:createDecrementAction
    }
)(Count)