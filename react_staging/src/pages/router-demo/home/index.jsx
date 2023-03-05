import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom";

import MyNavLink from "../../../components/myNavLInk"
import News from "../news"

export default class Home extends Component {
  render() {
    //   console.log(this.props);
    return (
      <div>
        我是home的内容
        <MyNavLink to="/home/news" >新闻</MyNavLink>
        <Switch>
            <Route path="/home/news" component={News} ></Route>
        </Switch>
      </div>
    )
  }
}
