import React, { useState } from "react";
import { AbsoluteWrapper } from './AbsoluteWrapper.js';

import { animated, config, useSpring, interpolate } from 'react-spring';

import { Project } from './Project.js';
export const Resume = () => {

    const spring = useSpring({
        from: {
            color: "white",
            fontSize: '10px'

        },
        to: {
            color: "#4ddb3d",
            fontSize: '50px'
        },

    })

    const [selected, setSelected] = useState(false);

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
        <AbsoluteWrapper>

            <animated.div className="Jumbotron  p-2" style={comeFromSide}>

                <animated.h1 className="text-center" style={spring}>Resume</animated.h1>
                <div className="d-flex flex-columb justify-content-around">
                <Project name="North Suburban Eye Associates" LinkName="OCT imaging" Link="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1531864/" content="Performed non-invasive tests on patients using OCT imaging and Visual Field machines, helped maintain computer systems, and optimized the user experience of online medical forms using NextGen EHR" />
                <Project name="Kernwood Country Club" LinkName="Kernwood Country Club" Link="https://www.kernwood.org/club/scripts/section/section.asp?NS=HP" content="Maintained an 18-hole golf course and club property using machinery such as greens mowers, sand-pros, utility vehicles, backpack blowers and push mowers." />
                <Project name="Vinwood Caterers" Link= "https://www.vinwood.com/" LinkName="Vinwood Caterers" content="Worked as a waiter, worked at an event-hall, hotel and a cruise ship that hosted events such as weddings. I would set up for events, serve hor d'oeuvres to guests, and serve dinner." />
                </div>
            </animated.div>


        </AbsoluteWrapper>
    );
}
