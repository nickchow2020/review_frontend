import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import "./SearchBar.css";

const { Search } = Input;

const SearchBar = ()=>{
  const [searchValue,setSearchValue] = useState();

  const onSearch = value => setSearchValue(value);

  let navigate = useNavigate();

  useEffect(()=>{
    if(searchValue){
      navigate(`/dog_place?search=${searchValue}`)
    }
  },[searchValue])
  
  return(
      <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      className="searchBar"
      />
  )
};

export default SearchBar





