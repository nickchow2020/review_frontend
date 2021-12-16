import React,{useEffect,useContext,useState} from "react";
import UserContext from "../context/userContext";
import { useParams } from "react-router-dom";
import Header from "./Header";
import DogPlaceBanner from "./DogPlaceBanner";
import Image from "./Image";
import Comment from "./Comment";
import API from "../Api";
import { v4 as uuid } from 'uuid';
import { useLoadScript } from "@react-google-maps/api";
import Map from "./PlaceMap";
import CommentBox from "./comment/Comment";
import ImageUpload from "./image/imageUploadModal";
// import {REACT_APP_GOOGLE_MAP_API_KEY} from "../keys"
import "./PlaceDetail.css";


const PlaceDetail = ()=>{

  const { id , score, type } = useParams();
  const {localStorageLogin,googleMapKey} = useContext(UserContext);
  const [placeData,setPlaceData] = useState({});
  const [markers,setMarkers] = useState([])
  const [loading,setLoading] = useState(false)




  useEffect(()=>{
    const getPlaceData = async (id,type)=>{
      API.token = localStorageLogin();

      if(type === "park"){
        const placeData = await API.getDogPark(id)
        setPlaceData(placeData)
        setMarkers([
          {
            id:1,
            name:placeData.title,
            position:{
              lat:placeData.lat,
              lng:placeData.lng
            }
          }
        ])
      }else{
        const placeData = await API.getDogHospital(id)
        setPlaceData(placeData)
        setMarkers([
          {
            id:1,
            name:placeData.title,
            position:{
              lat:placeData.lat,
              lng:placeData.lng
            }
          }
        ])
      }
    }

    getPlaceData(id,type)
  },[loading])

  const updateCommentSection = (comments)=>{
    setPlaceData({
      ...placeData,
      comments:[...placeData.comments,comments]
    })

    setLoading(!loading)
  }

  const uploadImage = (image)=>{
    setPlaceData(data =>({
      ...data,
      image:[...data.image,image]
    }))
  }

  const isData = placeData.address !== undefined;

  // for local mode
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: REACT_APP_GOOGLE_MAP_API_KEY || googleMapKey // Add your API key
  // });


  // for deploy mode
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapKey // Add your API key
  });

  return (
    
    <>
      <Header />
      {
        isData 
        ?<div>
          <DogPlaceBanner score={score} title={placeData.title}/>
          <div className="buttonsWrapper">
            <CommentBox placeId={id} updateComment={updateCommentSection}/>
            <ImageUpload uploadImage={uploadImage} placeId={id}/>
          </div>
          <div className="detailContextDisplay">
            <h1 className="image_title">About the place</h1>
            <p className="about_place">
            {
              placeData.description
            }
            </p>
            <hr className="placeDetailSeparateLine"/>
            <h1 className="image_title">Images</h1>
            <div className="detailImageWrapper">
            {
              placeData.image.map(url => <Image url={url} key={uuid()}/>)
            }
            </div>
            <h1 className="image_title">Location</h1>
            <div className="locationWrapper">
              <div className="placeDetailMap">
                {
                    isLoaded ? <Map markers={markers} key={uuid()}/> : null
                }
              </div>
              <div className="placeDetailAddress">
                <h2>Address</h2>
                <p>{`${placeData.address} ${placeData.city} ${placeData.state} ${placeData.zipcode}`}</p>
                <h2>Phone</h2>
                <p>{`${placeData.phone}`}</p>
              </div>
            </div>
            <hr className="placeDetailSeparateLine"/>
            <h1 className="image_title">Comments</h1>
            <div className="commentDisplayWrapper">
            {
              placeData.comments.map(data => <Comment 
              firstName={data.first_name}
              lastName={data.last_name}
              avatar={data.avatar_url}
              score={data.score}
              comment={data.comment}
              theLikes={data.likes}
              theDislikes={data.dislikes}
              comment_id={data.comment_id}
              key={uuid()}
              />)
            }
            </div>
            </div>
        </div>
        :null
      }
    </>
  )
};

export default PlaceDetail;