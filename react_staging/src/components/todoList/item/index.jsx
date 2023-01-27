
import React, { Component } from 'react';

import "./index.css";

class Item extends Component {

    state = {mouse:false}

    // 鼠标移出移入函数
    handleMouse = (e)=>{
        return ()=>{
            this.setState({mouse:e})
        }
    }

    //  勾选,取消
    handleCheck=(id)=>{
        return (e)=>{
            this.props.changeTodo(id,e.target.checked)
        }
    }

    //  删除一个
    handleDetele = (id)=>{
         return ()=>{
            if( window.confirm("确定删除吗?") ){
                this.props.deteleTodo(id);
            }
         }
    }

    render() {
        let {todo} = this.props
        return (
            <li onMouseLeave={this.handleMouse(false)} 
                onMouseEnter={this.handleMouse(true)}
                style={{backgroundColor:this.state.mouse?'#ddd':''}}
            >
                <label>
                    <input onChange={this.handleCheck(todo.id)} type="checkbox" checked={todo.done} />
                    <span>{todo.name}</span>
                    </label>
                <button  onClick={this.handleDetele(todo.id)} className="btn btn-danger" style={{display:this.state.mouse?'block':'none'}} >删除</button>
            </li>
        );
    }
}

export default Item;