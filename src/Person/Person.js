import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name}! I'm {props.age} year old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person