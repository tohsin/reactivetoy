import {useQuery} from "@tanstack/react-query"
import Axios from "axios"

export const useGetCat = () =>{
    const {data, 
            refetch,
            isLoading : iscatLoading,
            error
    } = useQuery(['cat'], async() => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })
    const refetchData = () => {
        alert("Reloading")
        refetch()
    }
    return {data, refetchData, iscatLoading, error}

}