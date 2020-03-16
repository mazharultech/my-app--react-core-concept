import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  var persion = {
    name: 'Mazharul Islam',
    occupation: 'Front web developer & WordPress Developer'
  }

  var style = {
    color: 'red',
    backgroundColor: 'yellow'
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>This my first react learning with Jhankar Mahbub</p>
        <h1>Name Heading: {persion.name + " " + persion.occupation + " " + 12 * 12}</h1>
        <h1 className="" style={style}>create react app</h1>
      </header>
    </div>
  );
}

export default App;
