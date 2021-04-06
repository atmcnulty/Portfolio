
import {useSpring , animated, interpolate} from 'react-spring'
import {useState} from 'react';

function Movement() {

    
        const [isToggled, setToggle] = useState(false);
        const fade = useSpring({
            opacity: isToggled ? 1 : 0
        })
    


    const spring = useSpring({
        from: {
          transform: `translate(10px)`,

        },
        to: {
          transform: `translate(500px)`,
        
                    
      }},);

      const AnimatedDiv= animated('h1');


    
      return <div><AnimatedDiv style={{...spring,   }} > text here </AnimatedDiv>
      
      

      
      <animated.button style={fade} onClick={() => setToggle(!isToggled)}> is Button </animated.button>
      </div>
    } export default Movement