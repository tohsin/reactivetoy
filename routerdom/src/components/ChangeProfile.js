import { useState } from "react"
import { AppContext } from "../App";
import { useContext } from "react";

export const ChangeProfile=()=>{
    const [newUsername, setNewUserName] = useState("");
    const { setUsername } = useContext(AppContext)
    return(
        <div>
            <input onChange={(event)=>{setNewUserName(event.target.value)}} />

            <button onClick={()=>{setUsername(newUsername)}}> Change Username</button>
        </div>
    )
}