import React, { useState } from 'react'

const ToggleTask = () => {

    const [toggle,setToggle]=useState(true);
    // const [sty,setSty]=useState(false);

    const style={
        backgroundColor:toggle?"white":"black",
        color:toggle?"black":"white",
        width:"400px",
        height:"200px",
        padding:"50px"
    }
  return (
    <div style={style}>
        <button onClick={()=>setToggle(!toggle)}>Toggle to {toggle?"Dark mode":"Light mode"}</button>
    </div>
  )
}

export default ToggleTask