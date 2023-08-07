import { useGetCat } from "./useGetCat"


export const Cat = () =>{
    // const {data : catData} = useQuery(['cat'], async() => {
    //     return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    // })
    const {catData, refetchData, iscatLoading, error} = useGetCat()
    if (iscatLoading) return <h1>Loading..</h1>

    return (
    <div>
        <button onClick={refetchData}> refetch </button>
        <h1>{ catData?.fact }</h1>
    </div>)
}