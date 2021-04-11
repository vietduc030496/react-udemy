import React, { Component } from 'react';
import './Person.css'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering....');
        return ([
            <p key='i1' onClick={this.props.click}>I'm a {this.props.name}! I'm {this.props.age} year old</p>,
            <p key='i2'>{this.props.children}</p>,
            <input key='i3' type='text' onChange={this.props.changed}
                value={this.props.name}></input>
        ]
        )
    };
}

export default Person;