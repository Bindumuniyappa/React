import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'

const Nav = () => {
  return (
    <div  style={{display:"flex",justifyContent:"space-between",width:"1000px",alignItems:"center"}}>
        
        <Home/>
        {/* <Contact/>
        <About/>    */}
    </div>
  )
}

export default Nav