// import React, { useEffect,useRef,useState } from 'react';

// function TimerWithRef() {
// const [timer,setTimer]= useState(0)
// const intervalref=useRef(null)
// useEffect(()=>{
// intervalref.current=setInterval(()=>{
//     setTimer(prevTimer =>prevTimer+1)
//   },1000)
//   return()=>{
//     clearInterval(intervalref.current)
//   }
//   }, [])
//   return (
//     <div>
//       Timer-{timer}
//       <button onClick={()=>clearInterval(intervalref.current)}>stop Timer</button>
//     </div>
//   )
// }

// export default TimerWithRef;
