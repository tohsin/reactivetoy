import {useQuery} from "@tanstack/react-query" 
import Axios from "axios"

export const Home= () =>{
    const { data: catData,
            isLoading,
            isError,
           refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    });
    if(isLoading){
        return <p>Loading....</p>
    }
    if (isError){
        return <h1>Something went wwrong</h1>
    }
    return (<h1>Welcome Home <p>{catData?.fact}</p>
    <button onClick={refetch}>Update Data</button> </h1>)
}