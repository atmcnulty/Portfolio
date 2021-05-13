import React, { Component, useState } from "react";


import { animated, config, useSpring, Spring } from 'react-spring';

export const PageThree = () => {


    const spring = useSpring({
        from: {
            color: "white",
            fontSize: '10px'
        },
        to: {
            color: "#4ddb3d",
            fontSize: '50px'
        },
        config: {
            tension: 180,
            friction: 80
        }


    })

    const comeFromSide = useSpring({
        from: {
            transform: "translate(0, 100%)"
        },
        to: {
            transform: "translate(0, 0%)"
            
        },
        config: {
            tension: 200,
            friction: 50,
            
        } 
        
    })

    return (
        <section class="Container Container-fluid">
           


            <animated.div className="container-fluid " style={comeFromSide}>
            <animated.h1 style = {spring} className = "text-center">Course Projects</animated.h1>
            <br />
            <h2 classname = "text-center">Technical Projects</h2>
            <div className = "d-flex flex-row justify-content-around p-3">
            <div className="card card-body m-2 p-1"  >
                    Event Driven SuperMarket Simulator
                <div class="card card-body ">
                 UVM Software Development  Team Project, Fall 2018
                    This was a group project where we were tasked with creating a simulation of a supermarket.
                    Our team created an event driven simulation using java and javaFX to simulate customers coming into a store, finding items and checking out.
                    The program allows you to select the amount of time, the amount of customers and the amount of registers for the simulation. 
                    This project was entered in UVM Code Fest, Fall 2019
                    <a  href="https://github.com/liambeliveau/SupermarketSimulator">GitHub Link</a>
                </div>
               
               
            </div>
            

            <div className="card card-body m-2 p-1"  >
                   Boston Code Camp App
                <div class="card card-body ">
               This was a group project where we were tasked with creating an application capable of letting users enter room counts to keep track of the attendance at Boston Code Camp.
               We did not finish the program, but we created a well defined architecture using facades to seperate the front end from the back end. 
                    <a  href="https://www.dropbox.com/s/ppz9j1bgl9pa4e4/FinalBostonCodeCampProgram-20210513T150756Z-001.zip?dl=0">Dropbox Link</a>
                </div>
               
               
            </div>

            <div className="card card-body m-2 p-1" >
                    Tetris
           
                <div class="card card-body">

                    This was a project for my object-oriented programming class. We were tasked with using Java and JavaFX to recreate the game Tetris. 
                    
                </div>
                
               
            </div>
            <div className="card card-body m-2 p-1"  >
                    Tank game
                   

                
           
                <div class="card card-body ">
                This was a group project for my advanced programming class. We learned C++ and used it to create a two-player tank game where players try to shoot the other tank. 
                The game allows the user to select which map they want to use, and saves their top scores. 
                    <a  href="https://www.dropbox.com/s/i699ysgunubht7d/CS%20120%20Final-20210513T024142Z-001.zip?dl=0">Dropbox link</a>
                </div>
               
               
            </div>
            
          
            </div>

            <h2 classname = "text-center">Gen-Ed Work</h2>
            <div className = "d-flex flex-row justify-content-around p-3">

            <div className="card  m-2 p-1">
                <div className="card-body">
                    Geological History of New Zealand
                

                <div className="card card-body">
                    This is a research paper I Wrote about the geological history of New Zealand. It was one of the first research papers I wrote in college. 
                    <a  href="https://www.dropbox.com/scl/fi/51qt9jlndz6qt50tfs7kd/McNulty_paper1.docx?dl=0&rlkey=7fqx0oyf5l2o6o0t7nhnpjlic">Dropbox link</a>
                </div>
                </div>
            </div>
            <div className="card  m-2 p-1">
                <div className="card-body">
                    Ice Ages
                

                <div className="card card-body">
                    This is a research paper I wrote about the cause, evidence and impact of glacial ice ages. There have been multiple points in Earths history where there have been glaciation. Despite the fact that humanity was around during the last glacial maximum, ice ages are a rare phenomena. In this paper I examine the previous ice ages in earths history.
                </div>
                </div>
            </div>
            

            <div className="card  m-2 p-1">
                <div className="card-body">
                    Darkness at Noon
                

                <div className="card card-body">
                    In this paper, I discuss how the Soviet Union became a violent authoritarian state in Joeseph Keller's Darkness at Noon. 
                </div>
                </div>
            </div>
            
            </div>

            <h2 classname = "text-center">Software Development Papers</h2>
            <div className = "d-flex flex-row justify-content-around p-3">
            <div className="card  m-2 p-1">
                <div className="card-body">
                   Don't Make Me Think
                

                <div className="card card-body">
                    I wrote this essay about the book Dont Make Me Think by Steve Krug. This book discusses common problems with the user-experience of websites or software, and how to create software that avoids these problems.
                    <a  href="https://www.dropbox.com/s/wy6cjgst0jz74bx/Dont%20Make%20me%20think%202.doc?dl=0">Dropbox Link</a>
                </div>
                </div>
            </div>
            <div className="card  m-2 p-1">
                <div className="card-body">
                   Test Driven Development
                

                <div className="card card-body">
                    In this paper, I discuss what test driven development is, and how developers can use test driven development by writing tests first in their programs. Some of the benefits of test driven development are that bugs are found when they are created and it increases the total test coverage of the project. 
                    <a  href="https://www.dropbox.com/s/5qe9akeb3ps2rbr/McNulty%20Test%20Driven%20Development.docx?dl=0">Dropbox Link</a>
                </div>
                </div>
            </div>
            

            <div className="card  m-2 p-1">
                <div className="card-body">
                    Containers
                

                <div className="card card-body">
                    In this paper I discuss containers, and how they allow software to be distributed horizontally to a variety of systems. I also discuss how they compare to virtual machines. 
                    <a  href="https://www.dropbox.com/s/czvjkcrzpr8ebvg/Containers.docx?dl=0">Dropbox Link</a>
                </div>
                </div>
            </div>
            
            </div>
                
        </animated.div>
           
        </section>
    );
}
