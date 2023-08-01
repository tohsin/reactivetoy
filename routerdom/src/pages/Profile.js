import { AppContext } from "../App";
import { useContext } from "react";
import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = () =>{
    const { userName } = useContext(AppContext)
    return (<div>Profile Page of {userName} <ChangeProfile /> </div>)
}