
import React, { Component } from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import Home from './home';
import About from './about';
import MyNavLink from "../../components/myNavLInk"
import "./index.css"

class RouterDemo extends Component {
    render() {
        return (
            <div>
                <h1 className='title' >React Router Demo</h1>
                <div className='title' >
                    {/* <NavLink activeClassName="red"  to="/home" style={{marginRight:'20px'}} >首页</NavLink> */}
                    {/* 重定向路由 */}
                    <MyNavLink to="/home"  >首页</MyNavLink>
                    <MyNavLink to="/about"  >about</MyNavLink>
                    {/* <Link to="/about" >about</Link> */}
                    <Switch>
                        <Route path="/home" component={Home} ></Route>
                        <Route path="/about" component={About} ></Route>
                        <Redirect to="/home" ></Redirect>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default RouterDemo;