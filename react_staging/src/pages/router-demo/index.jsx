
import React, { Component } from 'react';
import {Link,Route,NavLink} from "react-router-dom";
import Home from './home';
import About from './about';
import "./index.css"

class RouterDemo extends Component {
    render() {
        return (
            <div>
                <h1 className='title' >React Router Demo</h1>
                <div className='title' >
                    <NavLink activeClassName="red"  to="/home" style={{marginRight:'20px'}} >首页</NavLink>
                    <Link to="/about" >about</Link>
                    <Route path="/about" component={About} ></Route>
                    <Route path="/home" component={Home} ></Route>
                </div>
                
                
            </div>
        );
    }
}

export default RouterDemo;