import React, { useState } from "react";

const LoginPage = () => {
  const [Email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(Email==="abc@gmail.com" && password==="abc@123"){
      console.log("Login successful");
      console.log("Email:"+Email,"password:"+password);
      
    }
    else{
      console.log("email and password invalid");
    }
  }
  
  return (
    <div>
      <div>Login Page</div>
      <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={Email} name="Email"/>
      <input placeholder="Passowrd" onChange={(e)=>setPassword(e.target.value)} value={password} name="password" />
      <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
