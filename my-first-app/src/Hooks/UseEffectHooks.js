import React, { useEffect, useState } from 'react';

function UseEffectHooks() {
    const [counter,updateCounter]= useState(0);
    useEffect(()=>{
        console.log(counter)},[]);
        
return (
    <div>
        You Clicked{counter} times {""}
        <button onClick={() => updateCounter(counter+1)}>Increment</button>
    </div>
)}
export default UseEffectHooks;
