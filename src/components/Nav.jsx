import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {


  const [show,setShow]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
       if(window.scrollY>580){
        setShow(true)
       }
       else{
        setShow(false)
       } 
    })
  })
  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img style={{width:'150px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt=""/>
    </div>
  )
}

export default Nav