
import React, { Component } from 'react';

import "./index.css";

class Footer extends Component {

    handleCheckAll = (e)=>{
        console.log(e.target.checked); 
        this.props.checkAllTodo(e.target.checked);
    }
    // 清除已完成
    handleClearDone = ()=>{
        if( window.confirm("确定清除全部已完成?") ){
            this.props.clearDone();
        }
        
    }

    render() {
        const {todos} = this.props;
        // 已完成的
        const doneCount = todos.reduce((pre,cur)=> pre + (cur.done?1:0),0)
        // 总数
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                <input onChange={this.handleCheckAll} checked={doneCount===total&&total!==0?true:false}  type="checkbox"  />
                </label>
                <span>
                <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearDone}  className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;