import React from 'react'
import { Image } from 'antd';
import "./Image.css"

const ImageDemo = ({url})=>{
  return (
    <div className="theDetailImage">
      <Image
        width={300}
        src={url}
      />
    </div>
  );
}

export default ImageDemo;