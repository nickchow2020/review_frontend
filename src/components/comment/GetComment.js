import React,{useState} from "react";
import "./GetComment.css";

const CommentForm = ({addComment})=>{

  const [comment,setComment] = useState("");

  const handleChange = (e)=>{
    setComment(e.target.value)
    addComment(e.target.value)
  }

  return (
      <textarea className="formTextArea" onChange={handleChange} value={comment}></textarea>
  )
}

export default CommentForm;