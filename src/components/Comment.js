import React, { createElement, useState, useEffect, useContext } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import Rate from "./RateDisplay";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import UserContext from '../context/userContext';
import API from "../Api";
import "./Comment.css";

const MyComment = ({firstName,lastName,avatar,score,comment,theLikes,theDislikes,comment_id}) => {
  const [likes, setLikes] = useState(theLikes);
  const [dislikes, setDislikes] = useState(theDislikes);
  const [action, setAction] = useState(null);
  const {token} = useContext(UserContext);

  const like = () => {
      setLikes(likes + 1);
      setDislikes(dislikes);
      setAction('liked');
  };

  const dislike = () => {
    setLikes(likes);
    setDislikes(dislikes + 1);
    setAction('disliked');
  };

  useEffect(()=>{
    const updateLikes = async(comment_id,likes,dislikes)=>{
      API.token = token;
      await API.updateLikes(comment_id,likes,dislikes)
    }

    updateLikes(comment_id,likes,dislikes)
  },[likes,dislikes,token,comment_id])

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
  ];

  return (
    <Comment
      actions={actions}
      author={`${firstName} ${lastName}`}
      avatar={<Avatar src={avatar} alt={`${firstName} ${lastName}`} />}
      content={
        <div className="rateDisplay">
          <Rate score={score} />
          <p className="commendDisplay">
            {comment}
          </p>
        </div>
      }
    />
  );
};

export default MyComment;