import React,{useEffect,useContext} from "react";
import LoginFrom from "./form/LoginForm";
import theUserContext from "./context/userContext";
import {useNavigate} from "react-router-dom";
import Logo from "./Logo";

const Login = ()=>{

    const {checkLogin} = useContext(theUserContext);

    const history = useNavigate();

    useEffect(()=>{
        const isLogin = checkLogin();

        if(isLogin !== "undefined"){
            console.log("Yea, login!");
            history("/");
        }
    });


    return(
        <>
            <Logo />
            <LoginFrom />
        </>
    );
}

export default Login;