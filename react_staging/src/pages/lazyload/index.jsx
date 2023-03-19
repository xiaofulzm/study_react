import React, { Component,lazy,Suspense} from 'react'
import {Route,Switch} from "react-router-dom";

import MyNavLink from "../../components/myNavLInk"
import {Button} from "antd";

const A = lazy(()=>import('./a'))
const B = lazy(()=>import('./b'))


export default class Lazy extends Component {
  render() {
    return (
      <div >
        <MyNavLink to="/a"  ><Button>A</Button></MyNavLink>
        <MyNavLink to="/b"  >B</MyNavLink>
        <Switch>
            <Suspense fallback={<h1>加载中...</h1>} >
                <Route path="/a" component={A} ></Route>
                <Route path="/b" component={B} ></Route>
            </Suspense>
           
        </Switch>
      </div>
    )
  }
}
