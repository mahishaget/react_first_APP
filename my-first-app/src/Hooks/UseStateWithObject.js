import React, { useState } from 'react'

function UseStateWithObject() {
    const[name,setName]=useState({
        firstName:"",
        lastName:"",
        email:"",
        // phoneNumber:"",
        // address:"",
        // city:"",
        // state:"",
        // country:""

    })
return (

    <div>
{/* <form>
        <input type="text" placeholder="Enter your name" /><br></br>
        <input type="text" placeholder="Enter your email" /><br></br>
        <input type="password" placeholder="Enter your password" /><br></br>
        <input type="text" placeholder="Enter your phone number" /><br></br>
        <input type="text" placeholder="Enter your address" /><br></br>
        <input type="text" placeholder="Enter your city" /><br></br>
        <input type="text" placeholder="Enter your state" /><br></br>
        <input type="text" placeholder="Enter your country" /><br></br>
        </form> */}
        <form>
            <input type="text" value={name.firstName} placeholder='First Name' onChange={e=>setName(...name.firstName.target.value)} />
            <input type="text" value={name.lastName} placeholder='last Name'  onChange={e=>setName(...name.lastName.target.value)}/>
            <input type="text" value={name.email} placeholder='email '/>
            <h1>Your First Nameis:{name.firstName}</h1>
            <h1>Your last Name is:{name.lastName}</h1>
        </form>
    </div>
  )
}

export default UseStateWithObject;
