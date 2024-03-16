// CatSearch.jsx
import React, { useState } from "react";
import Axios from "axios";

const CatSearch = ({ setCatFact, setLoadingFact, setCatBreed, setLoadingBreed }) => {
  const fetchCatFact = () => {
    setLoadingFact(true);
    Axios.get("https://catfact.ninja/fact?max_length=140")
      .then((response) => {
        setCatFact(response.data.fact);
        setLoadingFact(false);
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
        setLoadingFact(false);
      });
  };

  const fetchCatBreed = () => {
    setLoadingBreed(true);
    Axios.get("https://catfact.ninja/breeds?limit=1")
      .then((response) => {
        setCatBreed(response.data.data[0].breed);
        setLoadingBreed(false);
      })
      .catch((error) => {
        console.error("Error fetching cat breed:", error);
        setLoadingBreed(false);
      });
  };

  return (
    <div className="button-container">
      <button className="generate-button" onClick={fetchCatFact}>Generate Cat Fact</button>
      <button className="breed-button" onClick={fetchCatBreed}>Fetch Cat Breed</button>
    </div>
  );
};

export default CatSearch;
