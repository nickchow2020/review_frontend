import React from "react";
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import "./Button.css";
const MyButton = ({text})=>{
    return (
      <>
        <Button type="primary" icon={<DownloadOutlined />} size={'large'} className="SingleButton">
          {text}
        </Button>
      </>
    );
}

export default MyButton