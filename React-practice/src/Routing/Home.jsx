import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate("/Contact")
    }
   
  return (
    <div>
        <button onClick={handleClick}>Contact</button>
    </div>
  )
}

export default Home