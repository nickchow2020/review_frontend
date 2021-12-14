import React, { useState, useEffect, useContext} from 'react';
import { Modal, Button } from 'antd';
import CommentForm from "./GetComment";
import Rate from "../Rate";
import API from "../../Api";
import UserContext from '../../context/userContext';
import "./Comment.css";

const Comment = ({placeId,updateComment}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment,setComment] = useState("");
  const [score,setScore] = useState(0);
  const [userId,setUserId] = useState('');
  const [currentUser,setCurrentUser] = useState({});
  const {token,username} = useContext(UserContext);

  useEffect(()=>{
    const getUserInfo = async()=>{
      API.token = token;
      const user = await API.userInfo(username);
      setUserId(user.user_id)
      setCurrentUser(user)
    }
    getUserInfo()
  },[token,username]);
  
  const addComment = (text)=>{
    setComment(text);
  };

  const updateScore = (score)=>{
    setScore(score);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async() => {
    setIsModalVisible(false);
    const newComment = await API.addComment(userId,placeId,score,comment);
    const neededUpdateComment = {
      first_name:currentUser.firstname,
      last_name:currentUser.lastname,
      avatar_url:currentUser.avatar_url,
      user_id:currentUser.user_id,
      comment_id:newComment.id,
      comment:comment,
      likes:0,
      dislikes:0,
      score:score
    }

    updateComment(neededUpdateComment)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} className="commentButton">
        Add Comment
      </Button>
      <Modal title="Add new Comment" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className="modal_wrapper">
        <CommentForm 
          addComment={addComment}
        />
        <h3>Rate:</h3>
        <Rate updateScore={updateScore}/>
      </Modal>
      </>
  );
};

export default Comment;