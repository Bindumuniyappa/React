import React, { useState } from 'react'

const ChildComp = ({getColor}) => {

    const [color,setColor]=useState("")

    const handleChange=(e)=>{
         setColor(e.target.value);
         getColor(e.target.value);
    }
  return (
    <div>ChildComp
        <input placeholder='color' onChange={handleChange} value={color}/>
    </div>
  )
}

export default ChildComp