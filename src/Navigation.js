import React, { Component, useState } from "react";
import { animated, config, useSpring } from 'react-spring';
import { NavLink } from 'react-router-dom';


const Navigation = () => {

    const springName = useSpring({
        from: {
            fontSize: '20px',
            opacity: .25,
            
        },
        to: {
            fontSize: '50px',
            opacity: 1,
            

        },
        config: {
            delay: '(2000ms)',
            mass: 200,
            friction: 300
        }
    });

   








    return (


        <div className="Container Container-fluid pr-3 float-left p-2 Border border-secondary">
            <nav className="navbar navbar-expand-md  p-3 navbar-light bg-primary  sticky-top border border-secondary  justify-content-center" style={{   opacity: .75}}>

                <buton className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </buton>
                <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto  d-flex flex-row">
                        <animated.h3 style={springName}> Andrew McNulty's Portfolio</animated.h3>
                        <NavLink  
                       
                       
                        exact
                          to="/" className="nav-item nav-link p-2" activeClassName="nav-item nav-link active border border-info p-3">Home</NavLink>
                        <NavLink 
                        
                        exact
                        to="/resume" className="nav-item nav-link p-2" activeClassName="nav-item nav-link active border border-info p-3">Resume</NavLink>
                        
                        <NavLink 
                      
                        exact
                        to="/projects" className="nav-item nav-link p-2" activeClassName="nav-item nav-link active border border-info p-3">Course Projects</NavLink>


                    </div>
                </div>


            </nav>
        </div>

    );
}

export default Navigation