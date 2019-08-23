import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { axiosWithAuth } from './../utils/axiosWithAuth'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getData = () => {
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(result => {
      console.log('✅ BubblePage axiosWithAuth result: ', result)
      setColorList(result.data)
    })
    .catch(error => console.log('❌ BubblePage axiosWithAuth get colors: ', error))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ColorList getData={getData} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;