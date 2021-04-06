import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid ted'
    }
    return <input type='text'
     style = {inputStyle}
     onChange={props.changed}
     value={props.currentName}></input>
}

export default userInput;