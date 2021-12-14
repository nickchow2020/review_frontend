import React,{ useState } from 'react';
import { Rate } from 'antd';
import "./Rate.css";
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rater = ({updateScore})=>{

  const [rate,setRate] = useState(0)

  const handleChange = value => {
    setRate(value)
    updateScore(value)
  };

    return (
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={rate} />
        {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ''}
      </span>
    );
}

export default Rater