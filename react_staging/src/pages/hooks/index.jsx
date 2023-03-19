
import React, {useEffect,useRef,Fragment} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

export default function Demo(){

    const [count,setCount] = React.useState(0);
    const [name,setName] = React.useState('小夫');

    const myRef = useRef('myRef');

    useEffect(()=>{
        console.log('456');
        let time = setInterval(()=>{
            // setCount(count+1) // 第一种
            setCount((v)=>{
                return v+1;
            })
        },1000);
        return ()=>{
            clearInterval(time)
        }
    },[])
    // 卸载组件
    function unmount(){
        // createRoot(document.getElementById('a')).unmount();
        console.log(myRef.current.value);
    }
    function add(){
        // setCount(count+1) // 第一种
        console.log('123');
        setCount((v)=>{
            return v+1;
        })
    }
    function fnName(){
        setName('呀呀呀');
    }
    return (
        <Fragment  >
            <h1>当前求和:{count}</h1>   
            <h2>我的名字是:{name}</h2>
            <button onClick={add} >+1</button>
            <button onClick={fnName} >改名</button>
            <button onClick={unmount} >卸载组件</button>
            <input type='text' ref={myRef} ></input>
        </Fragment>
    )
}