import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./detail";

class news extends Component {
    state = {
        msgArr:[
            {id:'1',title:'消息1'},
            {id:'2',title:'消息2'},
            {id:'3',title:'消息3'}
        ]
    }
    render() {
        const {msgArr}  = this.state;
        return (
            <div>
                <ul>
                    {
                        msgArr.map(m=>{
                            return (
                                <li key={m.id} >
                                    {/* 路由组件传递params 参数 */}
                                    {/* <Link to={`/home/news/detail/${m.id}`} >{m.title}</Link> */}
                                    {/* 路由组件传递 search参数 */}
                                    {/* <Link to={`/home/news/detail/?id=${m.id}`} >{m.title}</Link> */}
                                    {/* 路由组件 state 参数 */}
                                    <Link to={{ pathname: '/home/news/detail', state: { id:m.id, }}} >{m.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path="/home/news/detail" component={Detail} ></Route>
            </div>
        );
    }
}

export default news;