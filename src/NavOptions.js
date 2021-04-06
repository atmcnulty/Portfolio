import React, {useState} from 'react'; 
import {animated, config, useSpring} from 'react-spring';
import './App.css'

const NavOptions = (props) =>{

    


   
    const [isToggled, setToggle] = useState(false);

     
    

       const size = useSpring({
        
            fontSize: isToggled ? '2rem':'3rem',
            color: isToggled ? 'red': 'green',
            
        
        
    });




    return(
        <li class="nav-item">
        <animated.a  class="nav-link pt-5"  href="#"  style={size} onClick={()=>setToggle(!isToggled)}
       
        >{props.name}</animated.a>
        </li>
    );
}; export default NavOptions