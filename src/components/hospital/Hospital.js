import React,{ useState,useEffect, useContext} from "react";
import Header from "../Header";
import "./Hospital.css";
import HospitalReview from "../PlaceReview";
import API from "../../Api";
import { v4 as uuid } from 'uuid';
import { useLoadScript } from "@react-google-maps/api";
import UserContext from "../../context/userContext";
import {REACT_APP_GOOGLE_MAP_API_KEY} from "../../keys"
import Map from "../Map";


const Hospital = ()=>{

  const [hospitals,setHospitals] = useState({});

  const {token,googleMapKey} = useContext(UserContext);

  const [markers,setMarkers] = useState([])

  useEffect(()=>{
    const getAllHospitals = async()=>{
      API.token = token
      const hospitalsData = await API.getDogHospitals()
      setHospitals(hospitalsData)

      const markerData = hospitalsData.map(data => {
        return {
            id:data.id,
            name:data.title,
            position:{
              lat:data.latitude,
              lng:data.longitude
            }
        }
      })

      setMarkers(markerData)
    }

    getAllHospitals()

  },[token]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAP_API_KEY || googleMapKey // Add your API key
  });

  return (
    <>
      <Header />
      <div className="hospitalsReviewWrapper">
        <div className="hospitalViewDisplay">
          <h1>Southern California Dog Hospital Reviews</h1>
          <div className="hospitalsDisplay">
          {
            hospitals[0] !== undefined 
            ? hospitals.map(park => <HospitalReview 
            id={park.id}
            title={park.title}
            description={park.description}
            image_url={park.image_url}
            score={park.avg_score}
            place_type={"dog_hospitals"}
            type={"hospital"}
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

export default Hospital