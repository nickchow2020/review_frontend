import React from 'react';
import { useNavigate } from "react-router-dom";
import { Input } from 'antd';
import "./SearchBar.css";

const { Search } = Input;

const SearchBar = ({handleSearch})=>{

  let navigate = useNavigate();

  const onSearch = value => {
    handleSearch(value)
    navigate(`/dog_place?search=${value}`)
  };

  
  return(
    <>
      <Search
      placeholder="search by dog place title"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      className="searchBar"
      />
    </>
  )
};

export default SearchBar





