import React, { Component, useState } from "react";


import {animated, config, useSpring} from 'react-spring';

export const PageOne =()=>{

    const spring = useSpring({
        from: {
            color:"white"
        },
        to:{
            color:"lightOrange"
        }
    })



    return(
        <div className="Container text-center justify-content-left">
            
            <animated.h1 style={spring}>About Me</animated.h1>

            
        </div>
    );
} 
