import React, {Component} from 'react';
import { Modal } from 'react-bootstrap';

class Welcome extends Component {

    state =  {
        list:[
            {
            id:1,
            name: 'encode'
            },
            {
                id:2,
                name: 'edu'
             },
            {
                    id:3,
                    name: 'encode'
            }
        ],


    }


    render(){
        return(
       
            <ul>
                {this.state.list.map(list => (

                    <li>{list.name}</li>
                ))}
                <li></li> 
            </ul>
        );

    }
} export default Welcome