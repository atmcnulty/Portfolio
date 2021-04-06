import React, { Component, useState } from "react";
import { AbsoluteWrapper } from './AbsoluteWrapper.js';

import { animated, config, useSpring, interpolate } from 'react-spring';

export const Resume = () => {

    const spring = useSpring({
        from: {
            color: "white",
            fontSize: '10px'

        },
        to: {
            color: "green",
            fontSize: '50px'
        },

    })

    const [selected, setSelected] = useState(false);
    const expand = useSpring({
        from: {
            xys: [0, 0, 0]

        },
        to: {
            xys: [0, 0, 1]
        }


    })

    const comeFromSide = useSpring({
        from: {
            transform: "translate(100%, 0)"
        },
        to: {
            transform: "translate(0%, 0)"
            
        },
        config:  config.wobbly,
        delay: '1500ms'
        
    })

   



    return (
        <AbsoluteWrapper>

            <animated.div className="Jumbotron  p-2" style={comeFromSide}>

                <animated.h1 style={spring}>Resume</animated.h1>
                <animated.div className="card w-50 p-3"
                     >
                    <img src='./Capture.PNG'></img>


                </animated.div>

            </animated.div>


        </AbsoluteWrapper>
    );
}
