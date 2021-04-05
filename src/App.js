import './App.css';
import React,  { useState } from 'react';
import Person from './Person/Person';

const App = () => {
  const [personState, setPersonsState] = useState({
    persons: [
      {name:"Viet Duc2", age:25},
      {name:"Minh Nam", age:25},
      {name:"Anh Trung", age:25}
    ],
    otherState: "some other value"
  });


  const [otherState, setOtherState] = useState('some other value2');
  console.log(personState);
  console.log(otherState);
  // console.log(personState.otherState);

  const switchDisplayName = (newName) =>{
    setPersonsState({
      persons: [
        {name: newName, age:25},
        {name: "Minh Nam", age:25},
        {name: "Anh Trung", age:27}
      ]
    })
  }

    return (
      <div className="App">
        <div className='App'>
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button onClick={() => this.switchDisplayName('Maximilia!!')}>Switch name</button>
          <Person 
            name={personState.persons[0].name} 
            age={personState.persons[0].age} />
          <Person 
            name={personState.persons[1].name} 
            age={personState.persons[1].age}
            click={this.switchDisplayName}>My hobbies: playing game</Person>
          <Person 
            name={personState.persons[2].name} 
            age={personState.persons[2].age} />
        </div>
      </div>
    )
  };

export default App;


