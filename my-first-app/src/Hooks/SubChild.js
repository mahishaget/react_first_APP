import { useMemo } from "react";
import React,{useEffect}from 'react'
let renderCount=0;
function SubChild() {
    useEffect(()=>{
        renderCount++;
    })
  return (
    <div>
      renderCount:{renderCount}
    </div>
  )
}

export default SubChild
