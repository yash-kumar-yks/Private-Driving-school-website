import React from 'react'
  import SearchableDropdown from '../../UI/Dropdown';
  import './FindYourCity.css';
  import MapPhoto from "../../assets/search-bg.jpg";
const FindyourCity = () => {
  const options = [
    { value: 'new-york', label: 'New York' },
    { value: 'los-angeles', label: 'Los Angeles' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'houston', label: 'Houston' },
    { value: 'phoenix', label: 'Phoenix' },
    // Add more options as needed
  ];
  
  const handleSelect = (selectedValue) => {
    alert(`Selected value: ${selectedValue}`);
  };
  return (
    <div className='FindYourCityDiv'>
    <div className='FindYorCityHeading'>We have come closer to you. Now locate us</div>
    <div style={{color:"white"}}> Locate a driving school in your city</div>
    <div className='FindCityDropdown'>
    <SearchableDropdown options={options} onSelect={handleSelect}/>
    </div>
    </div>
  )
}

export default FindyourCity
