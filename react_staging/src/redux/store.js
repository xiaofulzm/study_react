/**
 * 该文件专门用于暴露一个store对象, 整个应用只有一个store对象
*/

// 引入createStore 专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux';
// 引入为count组件服务的reducer
import countReducer from "./reducers/count_reducers";

import personReducer from './reducers/person';

// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk';

const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
});
export default  createStore(allReducer,applyMiddleware(thunk));
