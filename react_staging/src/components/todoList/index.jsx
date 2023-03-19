
import React, { Component } from 'react';

import Header from './header';
import List from './list';
import Footer from './footer';
import "./index.css";

// todos案例

class TodoList extends Component {
    // 状态在哪里, 操作状态的方法就在那里

    // 初始化数据
    state = {
        todos:[
            {id:'001', name:'吃饭',done:false},
            {id:'002', name:'睡觉',done:false},
            {id:'003', name:'打代码',done:true},
            
        ]
    }
    // 添加一个todo
    addTodo= (data)=>{
        console.log(data);
        const {todos} = this.state;
        let newTodos = [data,...todos];
        this.setState({todos:newTodos}) 
        // 函数式state
        this.setState((state,prop)=>{
            return {todos:newTodos}
        })

    }

    changeTodo= (id,done)=>{
        const {todos} = this.state;
        const updateTodos =  todos.map(t=>{
            if(t.id===id) return {...t,done}
            else return t
        })
        this.setState({todos:updateTodos}) 

    }

    //  删除一个todo
    deteleTodo = (id)=>{
        const {todos} = this.state;
        const newTodos =  todos.filter(t=>{
             return t.id!==id ;
        })
        this.setState({todos:newTodos}) 

    }

    // 全选
    checkAllTodo = (done)=>{
        const {todos} = this.state;
        const newTodos =  todos.map(t=>{
            return {...t, done}
        }) 
        this.setState({todos:newTodos}) 
    }

    // 清除完成
    clearDone = ()=>{
        const {todos} = this.state;
        const newTodos =  todos.filter(t=>{
             return !t.done ;
        })
        this.setState({todos:newTodos}) 
    }

    render() {
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo = {this.addTodo} />
                        <List deteleTodo={this.deteleTodo}  changeTodo={this.changeTodo}  todos= {this.state.todos} />
                        <Footer clearDone={this.clearDone} checkAllTodo={this.checkAllTodo} todos= {this.state.todos} />  
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;