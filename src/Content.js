import React from 'react';
import './App.css';

function Content (props){


    return(
        <div className="cContent"> 
            <h1> {props.title}  </h1>
            
                <p>{props.content}</p>
            
        </div>
    );


} export default Content