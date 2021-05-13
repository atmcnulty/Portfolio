import React, { Component, useState } from "react";


import { animated, config, useSpring } from 'react-spring';

import Paddleboard from './paddleboard.jpeg'
export const PageTwo = () => {


    const spring = useSpring({
        from: {
            color: "white"
        },
        to: {
            color: "#4ddb3d"
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
        <absoluteWrapper>
            <animated.div style={comeFromSide} className="container-fluid justify-content-center  " >

                <animated.h1 className="text-center" style={spring}>About Me</animated.h1>
                <div class="card  m-4 justify-content-center">
                    <div class="card-body text-center" >
                        <p>My name is Andrew McNulty and I am an undergraduate student at Curry College.
                        I am majoring in software development, and my other areas of strength include mathematics and geology.
                        My experiences include improving the user experience of medical forms for an electronic medical record software for ophthalmologists,
                        and performing non-invasive diagnostic tests on patients such as visual fields, and OCT imaging.
                        In the future I am hoping to become a full-stack web developer or to develop software for medical systems. 
                        I have learned a wide variety of topics related to software development
                        including requirements engineering, agile development, test-driven development, and user-experience design.
                        This website is my portfolio for my senior year of college. It is some of the first web-development I have done.
                        This site was built using React js, Bootstrap, and a physics based React animation package called React Spring.
                        Thank you for visiting my website. If you look on the other pages you will find some of my projects and papers that I am choosing to showcase. 

                    </p>
                    </div>
                </div>


                <animated.h1 className="text-center" style={spring}>Skills</animated.h1>
                <div class="card  m-4 justify-content-center" >
                    <div class="card-body  text-center" >
                        <ul style={{ display: "inline-block" }}>
                            <li>Java</li>
                            <li>C#</li>
                            <li>React JS</li>
                            <li>Javascript</li>
                            <li>Node Js</li>
                        </ul>
                        <ul style={{ display: "inline-block" }}>
                            <li>IntelliJ</li>
                            <li>Eclipse</li>
                            <li>Visual Studio</li>
                            <li>Visual Studio Code </li>
                            <li>Microsoft Office suites</li>
                            <li>NextGen EMR</li>
                        </ul>

                        <ul style={{ display: "inline-block" }}>
                            <li>Learning things</li>
                            <li>Problem Solving</li>
                            <li>Adaptability </li>
                            
                            <li>Working on virtual teams</li>
                            <li>Working with users/customers</li>

                        </ul>

                    </div>
                </div>
                <animated.h1 className="text-center" style={spring}>Other Interests</animated.h1>
                <div class="card  m-4 justify-content-around" >
                   
                    <div class="card-body  text-center" >

                        <p>In my free time I enjoy playing music, spending time outdoors, skiing, playing tennis, and coding. 
                            I have been playing guitar for 12 years and I also play bass, drums and banjo. I also enjoy woodworking.
                             I built a stand-up paddleboard with my dad.

                        </p>
                    </div>
                </div>

            </animated.div>
        </absoluteWrapper>
    );
}