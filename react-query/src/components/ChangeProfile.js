import { useState } from "react"

export const ChangeProfile=()=>{
    const [newUsername, setNewUserName] = useState("");
  
    return(
        <div>
            <input onChange={(event)=>{setNewUserName(event.target.value)}} />

            <button onClick={()=>{}}> Change Username</button>
        </div>
    )
}