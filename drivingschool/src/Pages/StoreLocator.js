import React from 'react'
import Header from '../Components/Header/Header';
import Map from '../Components/Map/Map';
import { useState } from 'react';

const StoreLocator = () => {
    const [City, setCity] = useState("Lucknow")
  return (
    <div>
    <Header/>
    <Map City={City}/>
    </div>
  )
}

export default StoreLocator