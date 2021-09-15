import React from "react";
import "./DrinkData.css";

const DrinkData = ({ text, data }) => {
  return (
    <p>
      <span className='drink-data'>{text} :</span>
      {data}
    </p>
  );
};

export default DrinkData;
