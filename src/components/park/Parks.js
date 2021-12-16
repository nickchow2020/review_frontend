import React,{ useState,useEffect, useContext } from "react";
import Header from "../Header";
import "./Parks.css";
import ParkReview from "../PlaceReview";
import API from "../../Api";
import { v4 as uuid } from 'uuid';
import { useLoadScript } from "@react-google-maps/api";
import UserContext from "../../context/userContext";
import {REACT_APP_GOOGLE_MAP_API_KEY} from "../../keys"
import Map from "../Map";


const Parks = ()=>{

  const [parks,setParks] = useState({});

  const [markers,setMarkers] = useState([]);

  const {token,googleMapKey} = useContext(UserContext);


  useEffect(()=>{
    const getAllParks = async()=>{
      API.token = token;
      const parksData = await API.getDogParks();
      setParks(parksData);

      const markerData = parksData.map(data => {
        return {
            id:data.id,
            name:data.title,
            position:{
              lat:data.latitude,
              lng:data.longitude
            }
        }
      });

      setMarkers(markerData);
    }

    getAllParks();

  },[token]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAP_API_KEY || googleMapKey  // Add your API key
  });

  return (
    <>
      <Header />
      <div className="parksReviewWrapper">
        <div className="parkViewDisplay">
          <h1>Southern California Dog Parks Reviews</h1>
          <div className="parksDisplay">
          {
            parks[0] !== undefined 
            ? parks.map(park => <ParkReview 
            id={park.id}
            title={park.title}
            description={park.description}
            image_url={park.image_url}
            score={park.avg_score}
            place_type={"dog_parks"}
            type={"park"}
            key={uuid()}
            />) 
            : null 
          }
          </div>
        </div>
        <div className="mapDisplay">
          {
            isLoaded ? <Map markers={markers}/> : null
          }
        </div>
      </div>
    </>
  )
}

export default Parks