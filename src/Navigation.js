import React, { Component, useState } from "react";
import { animated, config, useSpring } from 'react-spring';
import { NavLink } from 'react-router-dom';
import Image from './Mountains.png';

const Navigation = () => {

    const springName = useSpring({
        from: {
            fontSize: '20px',
            opacity: .1,
            color: 'black'
        },
        to: {
            fontSize: '50px',
            opacity: 1,
            color: '#4ddb3d'

        },
        config: {
            delay: '(2000ms)',
            mass: 200,
            friction: 200
        }
    });

   








    return (


        <div className="Container Container-fluid pr-3 mr-5  Border border-secondary">
            <nav className="navbar navbar-expand-md  p-3 navbar-dark bg-primary  sticky-top border border-secondary  justify-content-center" >

                <buton className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </buton>
                <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto  d-flex flex-row justify-content-around">
                       
                        <animated.h3 style={springName}> Andrew McNulty's Portfolio</animated.h3>
                        <NavLink  
                       
                       
                        exact
                          to="/" className="nav-item nav-link p-2" activeClassName="nav-item nav-link active border border-info p-3">Home</NavLink>
                        <NavLink 
                        
                        exact
                        to="/resume" className="nav-item nav-link p-2" activeClassName="nav-item nav-link active border border-info p-3">Resume</NavLink>
                        
                        <NavLink 
                      
                        exact
                        to="/projects" className="nav-item nav-link p-2" activeClassName="nav-item nav-link active border border-info p-3">Academic Work and Projects</NavLink>
                         <img src={Image} alt-text="logo" style={{width: '3%', height: '3%'}}></img>

                    </div>
                </div>


            </nav>
        </div>

    );
}

export default Navigation