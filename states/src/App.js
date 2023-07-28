
import './App.css';
import { useState } from "react";

function App() {
  // let age = 0
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("Tola")
  const [showtext, setShowText] = useState(true)
  const [textColor, setColor] = useState("black")
  const increaseAge = () =>{
    // age += 1;
    setAge(age+1)
    // console.log(age)
  }
  const handleInputChange = (event) =>{
    setUsername(event.target.value);
  };
  return (
    <div className="App">
     {age}
     {username}
     <button onClick={increaseAge }>Increase Age</button>
     <input type='text' onChange={handleInputChange}/>
     <div>
     <button onClick={
      () => setShowText(!showtext)
      }>Hide/Reveal</button>
     {showtext && <h1>Hi I am Oppenihimer</h1>}
     </div>
    
    

    <div>
    <button onClick={
          () => setColor(textColor === "black" ? "red" : "black")
    }>Color Shift</button>

    <h1 style={{color : textColor}}>Hi I am bi Color</h1>
    </div>

</div>
  );
}

export default App;
