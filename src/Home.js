import React, {useContext,useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import UserContext from "./context/userContext";
import Navbar from "./components/home/Navbar";
import TopSix from "./components/home/Topsix";
import Footer from "./Footer";
import API from "./Api";
const Home = ({user})=>{

    const {checkLogin,token,handleSearch} = useContext(UserContext);
    const [topSix,setTopSix] = useState({});
    const history = useNavigate();

    useEffect(()=>{
        const isLogin = checkLogin();
        if(isLogin === "undefined"){
            history("/login")
        }

        const getTopSix = async ()=>{
            API.token = token;
            const result = await API.getTopSixs();
            setTopSix(result)
        }

        getTopSix()
    },[]);


    return (
        <>
            <Navbar user={user} handleSearch={handleSearch}/>
            <TopSix topSix={topSix}/>
            <Footer />
        </>
        
    )
};

export default Home;