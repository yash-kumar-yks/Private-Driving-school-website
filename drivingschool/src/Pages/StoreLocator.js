import React from 'react'
import Header from '../Components/Header/Header';
import Map from '../Components/Map/Map';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const StoreLocator = () => {
  const { City } = useParams();
    console.log(City)
  return (
    <div>
    <Header/>
    <Map City={City}/>
    </div>
  )
}

export default StoreLocator