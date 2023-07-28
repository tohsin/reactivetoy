//  
import { useReducer } from 'react';
import './App.css';
import {ListUser, User} from './ListUser'
// import styles from './App.module.css';

function App() {
  const name = 'pedro'
  const title = <h1>Welcome To site</h1>
  const template_ = (
  <div>
     {title}
    <p1>{name}</p1>
  </div>);
  const age_ = 19;
  const names = ['tosin', 'akin']
  const users = [
    {name : 'bolanle', age : 3},
    {name : 'adam', age : 3},
  ]
  const isGreen = false
  return (
    <div className="App">
      {/* compnent  is called like this*/}
    < User name ='Pedro' age = {21} email='oluwatosin.oseni@gmail.com'/> 
    < User name ='Tosin' age = {21} email='oluwatosin.oseni@gmail.com'/> 
    {title}
    <p1>{name}</p1>
    {template_}
    <h1>Lists 1 </h1>
    {names.map((name, idx) => {
      return <p1 idx = {idx}>{name}</p1>
    })}

    <h1>Lists 2 </h1>
    {users.map((user, idx) => {
      return (<div>
        {user.name}         {user.age}
      </div> );
    })}


    <h1>Lists 3 </h1>
    {users.map((user, idx) => {
      return  <ListUser name = {user.name} age = {user.age}/>
    })}
    {age_ >= 18 ? <h1>Over Age</h1> : <h1>Right Age</h1>}
    <h1 style={{color: isGreen ? "green" : "red"}}> THis has color</h1>

    {isGreen && <button>Butts</button>}
    </div>
  );
}

const get_name = () => { // a js function
  return 'Tosin';
}
const props ={
  name : 'pedro',
  age: 21,
  email:'babe@gmail.com'

}
//compenet should start with caps
const Get_name_component = () =>{ //a component to return a react compnent start woth caps als
  return <p> Tosin </p>;
}


export default App;
