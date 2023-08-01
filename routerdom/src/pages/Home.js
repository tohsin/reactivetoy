import { useContext } from "react"
import { AppContext } from "../App"

export const Home= () =>{
    const { userName } = useContext(AppContext)
    return <h1>Welcome Home  {userName} </h1>
}