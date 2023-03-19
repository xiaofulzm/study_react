import './App.css';
// import TodoList from "./components/todoList"
// import RouterDemo from "./pages/router-demo";

// import Lazyload from "./pages/lazyload";
import Hooks from "./pages/hooks";

import {Button} from "antd";
import {
    WechatOutlined
  } from '@ant-design/icons';
import "antd/dist/reset.css"

import ReduxDemo from './pages/redux_demo';

function App() {
  return (
    <div className="App">
        {/* <ReduxDemo /> */}
      {/* <TodoList /> */}
      {/* <RouterDemo /> */}
      {/* <Lazyload></Lazyload> */}
      <Hooks></Hooks>
    </div>
  );
}

export default App;
