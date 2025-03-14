import React, { useState } from 'react'

const SignupPage = () => {

    const [data,setData]=useState({name:"",email:"",password:""});
    const [store,setStore]=useState([])

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData((prevData)=>({
            ...prevData,
            [name]:value,
    }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setStore((prevStore)=>[...prevStore,data]);
        console.log([...store,data]); 
        setData({name:"",email:"",password:""})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"
            placeholder='Username' value={data.name} onChange={handleChange}/>
            <input type='email' placeholder='Email' name="email" value={data.email} onChange={handleChange}/>
            <input type="password" placeholder='Password' name="password" value={data.password} onChange={handleChange}/>
            <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default SignupPage