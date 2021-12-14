import React from "react";
import "./DogPlaceBanner.css";
import Rate from "./RateDisplay";
import { Tag } from 'antd';
const  DogPlaceBanner = ({score,title})=>{
  return (
    <div className="DogPlaceBanner">
      <h1>{title}</h1>
      <Rate score={score} />
      <Tag color="gold" className="BannerTag">dog_park</Tag>
    </div>  
  ) 
};

export default DogPlaceBanner;