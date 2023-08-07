import {useState} from 'react'

export const useToggle = (inital_value = false) =>{
    // with a custom hook you can use other hooks
    const [state, setState] = useState(inital_value);

    const toggle=()=>{
        setState((prev)=> !prev)
    }

    // return [state, toggle ]
    return {state, toggle}
};