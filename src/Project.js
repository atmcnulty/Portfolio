import React, {  useState } from "react";
import { AbsoluteWrapper } from './AbsoluteWrapper.js';

import { animated, config, useSpring, interpolate } from 'react-spring';

 export const Project = (props) => {

const [selected, setSelected] = useState(false);



return (
<div className = "card m-2 " style= {{width: '35%'}} >
    <div className= "card-body">
        <h3>{props.name}</h3>
        {props.content}
        <br></br>
        <a href={props.Link}>{props.LinkName} </a>
    </div>
   
</div>







);



}
export default Project;