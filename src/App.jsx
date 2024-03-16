import React, { useState } from "react";
import CatSearch from "./components//CatSearch";
import "./App.css";

function App() {
  const [catFact, setCatFact] = useState("");
  const [catBreed, setCatBreed] = useState("");
  const [loadingFact, setLoadingFact] = useState(true);
  const [loadingBreed, setLoadingBreed] = useState(true);

  return (
    <div className="App">
      <CatSearch
        setCatFact={setCatFact}
        setLoadingFact={setLoadingFact}
        setCatBreed={setCatBreed}
        setLoadingBreed={setLoadingBreed}
      />
      <div className="content">
        <div className={`fact ${loadingFact ? 'hidden' : ''}`}>{catFact}</div>
        <div className={`breed ${loadingBreed ? 'hidden' : ''}`}>Breed: {catBreed}</div>
      </div>
    </div>
  );
}

export default App;
