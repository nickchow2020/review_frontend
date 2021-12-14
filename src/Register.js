import React from "react";
import RegisterForm from "./form/RegisterForm";
import Logo from "./Logo"
import "./Register.css"
const Register = ()=>{
  return(
    <div className="registerWrapper">
      <Logo className="register_logo"/>
      <h1>Welcome Onboard</h1>
      <div className="formWrapper">
        <RegisterForm />
      </div>
    </div>
  )
}


export default Register