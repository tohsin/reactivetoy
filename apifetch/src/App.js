
import './App.css';
import Axios from "axios"
import {useEffect, useState} from "react"

// fetch("https://catfact.ninja/fact")
//     .then((res) => res.json())
//     .then((data) =>{
//       console.log(data);
//     })

  
function App() {
  const [catFact, setCatFact] = useState("")
  const fetchCatApi =() =>{
    Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact);
  })
  }
  useEffect(() =>{ fetchCatApi(); },[])
  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState(null)

  const fetchAgeAPi=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictedAge(res.data)
    })
  };


  return (
    <div className="App">
      <div>
      <button onClick={fetchCatApi}> Generate Cat Fact </button>
      <p>{catFact}</p>
      </div>
    <div>
      <input placeholder='Adam' 
        onChange={(event) =>{
          setName(event.target.value)
      }}/>
      <button onClick={fetchAgeAPi}> Guess Age </button>
      <h1>Predicted Age: {predictedAge?.age}</h1>
      <h1>Predicted Count: {predictedAge?.count}</h1>
    </div>
    </div>
  );
}

export default App;
