import React, { useEffect, useState } from 'react'
  import SearchableDropdown from '../../UI/Dropdown';
  import './FindYourCity.css';
  import MapPhoto from "../../assets/search-bg.jpg";
  import {
    GetCountries,
    GetState,
    GetCity,
    GetLanguages, 
  } from "react-country-state-city";
import { FaCommentsDollar } from 'react-icons/fa';

const FindyourCity = () => {
  const [options, setOptions] = useState([]);
const [citiesNameList, setCitiesNameList] = useState([]);
const fetchData = async () => {
  try {
    const result = await GetState(101);
    const citiesData = await Promise.all(result.map((data) => GetCity(101, data.id)));
    return citiesData;
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

useEffect(() => {
  const executeFunctions = async () => {
    const data = await fetchData();
    if (data) {
      setCitiesNameList(data);
    }
  };

  executeFunctions();
}, []);

useEffect(() => {
  const newOptions = [];
  const cityNamesSet = new Set();

  citiesNameList.forEach((cityData) => {
    cityData.forEach((city) => {
      if (!cityNamesSet.has(city.name)) {
        cityNamesSet.add(city.name);
        newOptions.push({ value: city.name, label: city.name });
      }
    });
  });

  setOptions(newOptions);
}, [citiesNameList]);

  const handleSelect = (selectedValue) => {
    return (selectedValue);
  };
  return (
    <div className='FindYourCityDiv'>
    <div className='FindYorCityHeading'>We have come closer to you. Now locate us</div>
    <div style={{color:"white"}}> Locate a driving school in your city.</div>
    <div className='FindCityDropdown'>
    <SearchableDropdown options={options} onSelect={handleSelect}/>
     
    </div>
    </div>
  );
}

export default FindyourCity
