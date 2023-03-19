
// 引入count的ui组件
import CountUi from '../pages/redux_demo/components/count_react_redux';

// 引入action
import { 
    createDecrementAction,
    createIncrementAsyncAction,
    createIncrementAction 
} from '../redux/actions/count_action';


// 引入connect 用于链接ui主机开年与redux
import { connect } from 'react-redux';


// a函数的返回值作为状态传递给UI组件
function mapStateToPreps(state){
    return {count:state.he};
}

function mapDispatchToProps(dispatch){
    return {
        jia:data => dispatch(createIncrementAction(data)),
        jiaAsync:(data,time)=> dispatch(createIncrementAsyncAction(data,time)),
        jian:data => dispatch(createDecrementAction(data))
    }
}

// 创建并暴露一个conut的容器组件
export default connect(mapStateToPreps,mapDispatchToProps)(CountUi);

