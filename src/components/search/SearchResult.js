import React,{useState,useEffect,useContext} from "react";
import { useSearchParams } from 'react-router-dom';
import Header from "../Header";
import { v4 as uuid } from 'uuid';
import { useLoadScript } from "@react-google-maps/api";
import Map from "../Map";
import ParkReview from "../PlaceReview";
import UserContext from "../../context/userContext";
import {REACT_APP_GOOGLE_MAP_API_KEY} from "../../keys"
import "./SearchResult.css";
import NoResult from "../../NoResult";

const SearchResult = ()=>{
  const [searchParams, setSearchParams] = useSearchParams();

  const {googleMapKey,markers,searchResult,handleSearch} = useContext(UserContext);

  const search = searchParams.get("search")

  useEffect(()=>{
    handleSearch(search)
  },[])

  // for local mode

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAP_API_KEY || googleMapKey // Add your API key
  });

  // for deploy mode
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: googleMapKey // Add your API key
  // });

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
            : <NoResult />
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