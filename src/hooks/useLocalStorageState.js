import {useEffect,useState} from "react"

const useLocalStorageState = (key,defaultVal)=>{

    const [state,setState] = useState(()=>{
        let value = window.localStorage.getItem(key) || defaultVal
        return value
    })

    useEffect(()=>{
        window.localStorage.setItem(key,state)
    })

    return [state,setState]
}

export default useLocalStorageState;