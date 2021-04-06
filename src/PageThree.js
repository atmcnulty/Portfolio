import React, { Component, useState } from "react";


import { animated, config, useSpring, Spring } from 'react-spring';

export const PageThree = () => {


    const comeFromSide = useSpring({
        from: {
            transform: "translate(100%, 0)"
        },
        to: {
            transform: "translate(0%, 0)"
            
        },
        config:  config.wobbly,
        delay: '500ms'
        
    })

    return (
        <section class="Container Container-fluid">
            <h1> Course Projects</h1>

         
            <animated.div className="card bg-primary" style={comeFromSide}>
               

            <div className="card-body" >
                    Event Driven SuperMarket Simulator
                   

                
           
                <div class="card card-body">
                 UVM Software Development  Team Project, Fall 2018
                    <p>A real time event driven simulation of a supermarket made in Java</p>
                   
                </div>
                <a style={{ color: 'white' }} href="https://github.com/liambeliveau/SupermarketSimulator">GitHub Link</a>
               
            </div>
            

            <div className="card-body bg-secondary" >
                    Tetris
           
                <div class="card card-body">
                 UVM Computer Science, Fall 2016
                    <p>A recreation of the game Tetris made in Java</p>
                   
                </div>
                
               
            </div>
            <div className="card bg-primary">
                <div className="card-body">
                    Geology Papers
                

                <div className="card card-body">
                    A geologogical history of New Zealand
                    Ice Ages
                </div>
                </div>
            </div>
            <div className="card bg-secondary">
                <div className="card-body">
                    Software Development Papers
                
                <div className="card card-body">
                    Use Cases
                </div>
                </div>
            </div>
        </animated.div>
           
        </section>
    );
}
