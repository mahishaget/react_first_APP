import React,{useState} from 'react'
import { useMemo } from "react";
import SubChild from './SubChild';

function UseMemoHooks() {
const [count,setCount]= useState(0)
function clickHandler(){
    setCount(count+1)
}
const SubChildmemo=useMemo(()=>{
    return <SubChild></SubChild>

},[])
return (

<div>
    <h3>Count:{count}</h3>
    <button onClick={clickHandler}>Increment</button>
    <SubChild></SubChild>
    {SubChildmemo}
</div>
)
}

export default UseMemoHooks;
