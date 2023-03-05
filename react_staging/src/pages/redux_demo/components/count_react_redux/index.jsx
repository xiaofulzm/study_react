import React, { Component } from 'react';

export default class Count extends Component {

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
      console.log(this.props);
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
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
