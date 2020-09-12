import React, { useState, useEffect } from "react";
import { fetchColors } from '../hooks/fetchColors';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  
  const [colorList, setColorList] = useState([]);
  
  useEffect(() => {
    fetchColors()
    .then(res => {
      setColorList(res.data)
    })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;