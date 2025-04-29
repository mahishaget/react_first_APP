import React from 'react';
import {useState} from 'react';
function UseStatecounter2(){
    const initialvalue=0;
    const [count,countupdater]= useState(initialvalue);
  return (
    <div>
        count:{count}
      <button onClick={() => countupdater(initialvalue)}>Reset</button>
      <button onClick={() => countupdater(count+1)}>Increment</button>
      <button onClick={() => countupdater(count-1)}>Decrement</button>
    </div>
  )
}
export default UseStatecounter2;
