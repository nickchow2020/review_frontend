import React from 'react';
import { Rate } from 'antd';
import "./Rate.css";
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rater = ({score})=>{
  
    return (
      <span>
        <Rate tooltips={desc}  value={score} />
      </span>
    );
}

export default Rater