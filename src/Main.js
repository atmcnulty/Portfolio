import React, {useState} from 'react';
import {animated, useSpring} from 'react-spring'
function Main() {

    const eventHandle = (e) => {
        setValue("EDOSOFTU");
        setCount(count +1 );
      
    }

    let [count, setCount] = useState(2);

    var [value, setValue] = useState("Example text")    

   



    return(
        <animated.div className="Content">
            
        <p> Name: {value}</p>
        <p>{count}</p>
        <button onMouseOver={eventHandle} > x</button>
        </animated.div>
    );

 
} export default Main