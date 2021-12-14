import React,{useState,useContext} from "react";
import userContext from "../../context/userContext";
import { useParams } from 'react-router-dom';
import API from "../../Api";
import "./UserDetail.css";

const UserDetail = ({user})=>{

  const {firstname,lastname,email,avatar_url} = user;

  const {username} = useParams();

  const {updateUser,token} = useContext(userContext);

  const initialValue = {
    first_name:firstname,
    last_name:lastname,
    email,
    avatar_url
  };

  const [userInfo,setUserInfo] = useState(initialValue);

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setUserInfo(data => ({
      ...data,
      [name]:value
    }))
  };

  const updateUserData = async ()=>{
    API.token = token
    await API.updateUserInfo(username,userInfo)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {
      firstname:userInfo.first_name,
      lastname:userInfo.last_name,
      email:userInfo.email,
      avatar_url:userInfo.avatar_url
    }

    updateUser(data)
    updateUserData()
  }

  return (
    <div>
      <h1 className="userDetailFormHeader">Hi,{`${user.firstname}`}</h1>
      <form className="userDetailForm" onSubmit={handleSubmit}>
        <div className="inputSection">
          <label>First Name:</label>
          <input type="text" value={userInfo.first_name} name="first_name" onChange={handleChange} />
        </div>

        <div className="inputSection">
          <label>Last Name:</label>
          <input type="text" value={userInfo.last_name} name="last_name" onChange={handleChange} />
        </div>

        <div className="inputSection">
          <label>Email:</label>
          <input type="email" value={userInfo.email} name="email" onChange={handleChange} />
        </div>

        <div className="inputSection">
          <label>Avatar URL:</label>
          <input type="text" value={userInfo.avatar_url} name="avatar_url" onChange={handleChange} />
        </div>
        
        <div className="inputSection">
          <input type="submit" value="Save" className="submitBtn" onChange={handleChange} />
        </div>
      </form>
    </div>
  )
}


export default UserDetail