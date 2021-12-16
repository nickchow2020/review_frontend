import React,{useState,useContext} from "react";
import { Modal, Button } from 'antd';
import UploadImage from "./uploadImage";
import UserContext from "../../context/userContext";
import S3 from 'react-aws-s3';
import API from "../../Api";
// import {REACT_APP_AWS_ACCESS_KEY,REACT_APP_AWS_SECRET_KEY} from "../../keys"
import "./imageUploadModal.css";

const ImageUploadModal = ({uploadImage,placeId}) => {

  const { token, awsAccessKey,awsSecretKey} = useContext(UserContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [file,setFile] = useState(null);

  // for local mode

  // const config = {
  //   bucketName: 'caps2image',
  //   region: 'us-west-1',
  //   accessKeyId: REACT_APP_AWS_ACCESS_KEY || awsAccessKey,
  //   secretAccessKey: REACT_APP_AWS_SECRET_KEY || awsSecretKey
  // };

  //for deploy mode
  const config = {
    bucketName: 'caps2image',
    region: 'us-west-1',
    accessKeyId: awsAccessKey,
    secretAccessKey: awsSecretKey
  };


  
  const ReactS3Client = new S3(config)

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    const url = await uploadImge(file);
    updateImage(placeId,url);
    uploadImage(url)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getFile = (data)=>{
    setFile(data)
  };

  const uploadImge = async (file)=>{
    const resp = await ReactS3Client.uploadFile(file)
    return resp.location
  }

  const updateImage = async (place_id,url)=>{
    API.token = token
    await API.addImage(place_id,url)
  }


  return (
    <>
      <Button type="primary" onClick={showModal} className="uploadButton">
        Add Image
      </Button>
      <Modal title="Upload Image" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <UploadImage getFile={getFile}/>
      </Modal>
    </>
  );
}


export default ImageUploadModal