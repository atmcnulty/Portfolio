import React, { Component, useState } from "react";


import {animated, config, useSpring} from 'react-spring';
import Clock from './Clock';
import NavOptions from './NavOptions';

import 'bootstrap/dist/css/bootstrap.min.css';
 function Navbar() {


    

  
  




    const spring = useSpring({
      from: { color: 'purple', opacity: 0, 'translate3d(0,0,0)': 'translate3d(-200px,-20px,0)'},

      to:{
        color: 'darkgreen',
        opacity: 1,
       
        
      }, 
      config: config.slow
      


    })

      
   
     

   

   

  
      return(
      <React.Fragment>
        
        <nav  id="navbarSupportedContent" class=" navbar-expand-md  nav-sm  navbar-dark bg-dark sticky-top pt-3 ">

          <ul class = "navbar-nav nav-sm justify-content-space-eveny ">
         
            <animated.h3 style={spring}> Andrew McNulty's Portfolio</animated.h3>
        
            
            <NavOptions name="home"/>
            <NavOptions name="tech"/>
            <NavOptions name="projects"/>
            <NavOptions name="Github"/>
            
            <Clock />
            <button > button</button>
            </ul>
        </nav>

      </React.Fragment>
      );
      }
 export default Navbar