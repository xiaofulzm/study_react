
import React, { Component } from 'react';
import PropTypes from "prop-types";


import Item from '../item';
import "./index.css";

class List extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeTodo: PropTypes.func.isRequired,
        deteleTodo:PropTypes.func.isRequired
    }

    render() {
        let {todos,changeTodo,deteleTodo} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map(todo=>{
                        return  <Item deteleTodo={deteleTodo} changeTodo={changeTodo} key={todo.id} todo = {todo} ></Item>
                    })
                }
                
            </ul>
        );
    }
}

export default List;