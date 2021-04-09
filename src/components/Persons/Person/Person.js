import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = (props) => {
    console.log('[Person.js] rendering....')
    return (
        <div className='Person'>
            <p onClick={props.click}>I'm a {props.name}! I'm {props.age} year old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Radium(person);