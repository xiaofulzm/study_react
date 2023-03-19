import React, { Component } from 'react';
import store from '../../redux/store';


// import Count from "./components/count_redux";
// import Count from '../../containers/count';
import Count from './components/count_react_redux';
import Person from './components/person';

import "./index.css";
class ReduxDemo extends Component {
    render() {
        return (
            <div className='redux-wrap' >
                {/*  给容器组件传递store */}
                <Count  />
                <hr />
                <Person  />
            </div>
        );
    }
}

export default ReduxDemo;