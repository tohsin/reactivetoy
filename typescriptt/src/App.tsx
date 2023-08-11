import React from 'react';
import './App.css';
import {Person, Country} from './components/Person'

function App() {
  return (
    <div className="App">
      <Person
      name='pedro'
      email='pedro@gmail.com'
      age={21}
      isMarried={true}
      friends={['Tola', "Banke"]}
      country={Country.brazil }
      />
    </div>
  );
}

export default App;
