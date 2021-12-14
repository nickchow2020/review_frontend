import React,{useEffect} from "react";
import Header from "./UserHeader";
import UserDetail from "./UserDetail";
import "./User.css";

const User = ({user})=>{

  useEffect(()=>{
    console.log("Yes, Hello, World")
  },[])

  const isUser = user.firstname !== undefined;

  return(
    <>
      <Header />
      {
        isUser ? <UserDetail user={user} /> : null
      }
    </>
  )
}

export default User