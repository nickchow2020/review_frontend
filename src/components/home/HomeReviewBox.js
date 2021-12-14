import React from "react";
import "./HomeReviewBox.css";
import { Link } from "react-router-dom";
import Rate from "../RateDisplay"

const HomeReviewBox = ({title,id,description,score,image_url,type})=>{

  const isPark = type === "park"

  return (
    <div className="homeReviewWrapper">
      <div className="imageWrapper">
        <img src={image_url} alt="dog_park" className="homeReviewImage" />
      </div>
      <div>
        <h3 className="smallReviewTitle">
        {isPark ? <Link to={`/dog_parks/${id}/${score}/${type}`}>{title}</Link> : <Link to={`/dog_hospitals/${id}/${score}/${type}`}>{title}</Link>}
        </h3>
        <p>{description}</p>
        <Rate score={score}/>
      </div>
    </div>
  )
};

export default HomeReviewBox;