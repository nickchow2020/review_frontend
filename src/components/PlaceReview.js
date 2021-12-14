import React from "react";
import Rate from "./RateDisplay";
import { Tag } from 'antd';
import {NavLink} from "react-router-dom";
import "./PlaceReview.css";

const ParkReview = ({id,title,description,image_url,score,place_type,type})=>{
  
  return (
    <div className="reviewWrapper">
      <div className="dogReviewImageWrapper">
        <img src={image_url} alt="dog_park" className="dogReviewImage" />
      </div>
      <div className="reviewContentWrapper">
        <h2><NavLink to={`/${place_type}/${id}/${score}/${type}`}>{`${id} ${title}`}</NavLink></h2>
        <Rate score={score}/>
        <div>
          <Tag color="magenta">{place_type}</Tag>
        </div>
        <p align="left">{description}</p>
        <NavLink to="#">More</NavLink>
      </div>
    </div>
  )
}

export default ParkReview;