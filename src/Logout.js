import React,{useEffect} from "react";
const Logout = ({logout})=>{

  useEffect(()=>{
    logout()
  },[logout])
  return(
    <>
      
    </>
  )
}

export default Logout;