import React, { Component } from 'react';
import store from '../../redux/store';


// import Count from "./components/count_redux";
import Count from '../../containers/count';


import "./index.css";
class ReduxDemo extends Component {
    render() {
        return (
            <div className='redux-wrap' >
                {/*  给容器组件传递store */}
                <Count store={store} />
            </div>
        );
    }
}

export default ReduxDemo;