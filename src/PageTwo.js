import React, { Component, useState } from "react";


import { animated, config, useSpring } from 'react-spring';

export const PageTwo = () => {


    const spring = useSpring({
        from: {
            color: "white"
        },
        to: {
            color: "orange"
        },
        config: {
            tension: 180,
            friction: 80
        }
        

    })



    return (
        <div className="Container Container-fluid p-4   ">

            <animated.h1 style={spring}>About Me</animated.h1>
            <div class="card p-5 m-4">
                <div class="card-body">Andrew McNulty
                <p> Undergraduate student with strengths in software development, information technology and geology. </p>
                    <p>Experiences include improving the user experience of electronic medical record software for Ophthalmologists, </p>
                    <p>and performing diagnostic tests such as visual fields, and OCT imaging. Has experience in multiple areas of software development </p>
                    <p>including requirements engineering, agile development, test-driven development, and user-experience design. </p>
                    <p>Aspiring to become a software engineer and to develop software for medical systems.</p>
                </div>
            </div>


            <animated.h1 style={spring}>Skills</animated.h1>
            <div class="card p-5 m-4">
                <div class="card-body">
                <p> Java, C#, React.JS, Javascript, Node.JS,  </p>
                <p>Visual Studio, Visual Studio Code, Microsoft Office</p>
                </div>
            </div>

        </div>
    );
}