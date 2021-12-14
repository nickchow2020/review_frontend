import './App.css';
import "antd/dist/antd.css";
import{
  BrowserRouter,
  Route,
  Routes} from "react-router-dom";
import React, {useState,useEffect} from "react";
import Home from "./Home";
import UserContext from "./context/userContext";
import useLocalStorageState from './hooks/useLocalStorageState';
import Register from "./Register";
import Login from "./Login";
import Parks from "./components/park/Parks";
import Hospital from "./components/hospital/Hospital";
import API from "./Api";
import PlaceDetail from './components/PlaceDetail';
import SearchResult from './components/search/SearchResult';
import { message } from 'antd';
import User from "./components/user/User";
import Logout from "./Logout.js";


function App() {

  const [currentUser,setCurrentUser] = useState({});
  const [token,setToken] = useLocalStorageState("token");
  const [username,setUsername] = useLocalStorageState("username");

  const loginError = (msg) => {
    message.error(`${msg}`);
  };

  const registerError = (msg) => {
    message.warning(`${msg}`);
  };

  const userLogin = async (data) =>{
    try{
      const token = await API.login(data);
      API.token = token;
      const user = await API.userInfo(data.username);
      setCurrentUser(user);
      setToken(token);
      setUsername(user.username);
      return true;
    }catch(err){
      loginError("Invalid username/password");
      return false;
    }
  }

  const userRegister = async (data)=>{
    try{
      const token = await API.register(data);
      API.token = token;
      const user = await API.userInfo(data.username);
      setCurrentUser(user);
      setToken(token);
      setUsername(user.username);
      return true;
    }catch(err){
      console.log(err);
      registerError("Username is already taking, try another one please!")
      return false;
    }
  }

  const userLoginFromLocalStorage = ()=>{
    return token
  }

  const checkUserLogin = ()=>{
    return username
  }

  const updateUser = (newData)=>{
    setCurrentUser(data =>({
      ...data,
      ...newData
    }))
  }

  const logout = ()=>{
    setToken("")
    setUsername("")
  }

  useEffect(()=>{
    async function getUserData(username,token){
      API.token = token
      const user = await API.userInfo(username)
      setCurrentUser(user)
    }

    if(username && token){
      getUserData(username,token)
    }else{
      window.location = '/login';
    }
  },[username,token])

  return (
      <div className="App">
      <UserContext.Provider value={{
        user:currentUser,
        login:userLogin,
        register:userRegister,
        localStorageLogin:userLoginFromLocalStorage,
        checkLogin:checkUserLogin,
        updateUser:updateUser,
        token,
        username
      }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home user={currentUser}/>}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/dog_parks" element={<Parks />}></Route>
            <Route exact path="/dog_parks/:id/:score/:type" element={<PlaceDetail />}></Route>
            <Route exact path="/dog_hospitals" element={<Hospital />}></Route>
            <Route exact path="/dog_hospitals/:id/:score/:type" element={<PlaceDetail />}></Route>
            <Route exact path="/dog_place" element={<SearchResult />}></Route>
            <Route exact path="/users/:username" element={<User user={currentUser}/>}></Route>
            <Route exact path="/logout" element={<Logout logout={logout}/>}></Route>
          </Routes>
        </BrowserRouter> 
        </UserContext.Provider>
      </div>
  );
}

export default App;