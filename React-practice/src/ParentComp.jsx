import React, { useState } from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
    
    const [uiColor,setUiColor]=useState(null)

    const style={
      width:"200px",
      height:"200px",
      backgroundColor:`${uiColor}`
    }

    const getColor=(color)=>{
        setUiColor(color);
    }
  return (
    <div>ParentComp
        <div style={style}>color</div>
        <ChildComp getColor={getColor} />
    </div>
  )
}

export default ParentComp