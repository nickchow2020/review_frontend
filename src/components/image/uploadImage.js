import React from "react";
import "./uploadImage.css";

const UploadImage = ({getFile})=>{

  const handleChange = (e)=>{
      const file = e.target.files[0]
      getFile(file)
  }

  return (
    <form>
      <input
      type="file"
      accept="image/jpeg"
      onChange={handleChange}/>
    </form>
  )
};

export default UploadImage;