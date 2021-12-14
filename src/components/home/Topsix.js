import React from 'react';
import HomeReviewBox from "./HomeReviewBox";
import { v4 as uuid } from 'uuid';

import "./Topsix.css";


const TopSix = ({topSix})=>{
  return(
    <div className="topSixWrapper">
      <h2>Most Popular Dog Parks</h2>
      <hr className="header_underline"/>
      <div className="displayHomeReviewSection">
      {
        topSix.topSixPark 
        ? topSix.topSixPark.map(data=> <HomeReviewBox 
                                        title={data.title} 
                                        image_url={data.image_url} 
                                        description={data.description} 
                                        id={data.id} 
                                        score={data.avg_score}  
                                        key={uuid()}
                                        type={"park"}
                                        />)
        : null
      }
      </div>
      <h2>Most Popular Dog hospitals</h2>
      <hr className="header_underline"/>
      <div className="displayHomeReviewSection">
      {
        topSix.topSixHospital 
        ? topSix.topSixHospital.map(data=> <HomeReviewBox 
                                        title={data.title} 
                                        image_url={data.image_url} 
                                        description={data.description} 
                                        id={data.id} 
                                        score={data.avg_score}  
                                        key={uuid()}
                                        type={"hospital"}
                                        />)
        : null
      }
      </div>
    </div>
  )
}


export default TopSix;


