import React,{useState,useEffect,useContext} from "react";
import { useSearchParams } from 'react-router-dom';
import API from "../../Api";
import Header from "../Header";
import { v4 as uuid } from 'uuid';
import { useLoadScript } from "@react-google-maps/api";
import Map from "../Map";
import ParkReview from "../PlaceReview";
import UserContext from "../../context/userContext";
import "./SearchResult.css";
import {REACT_APP_GOOGLE_MAP_API_KEY} from "../../keys"

const SearchResult = ()=>{
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchResult,setSearchResult] = useState({});
  const {token} = useContext(UserContext);

  const [markers,setMarkers] = useState([]);
  
  const search = searchParams.get('search');

  useEffect(()=>{
    const getResultData = async()=>{
      API.token = token;
      const searchResult = await API.getSearchResult(search);
      setSearchResult(searchResult);

      const markerData = searchResult.map(data => {
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
    };

    getResultData();
  },[])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAP_API_KEY // Add your API key
  });

  return (
    <>
      <Header />
      <div className="parksReviewWrapper">
        <div className="parkViewDisplay">
          <h1>Search Result</h1>
          <div className="parksDisplay">
          {
            searchResult[0] !== undefined 
            ? searchResult.map(place => <ParkReview 
            id={place.id}
            title={place.title}
            description={place.description}
            image_url={place.image_url}
            score={place.avg_score}
            place_type={`dog_${place.place_type}s`}
            type={`${place.place_type}`}
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

export default SearchResult;