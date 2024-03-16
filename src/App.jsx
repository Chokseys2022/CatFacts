import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [catFact, setCatFact] = useState("");
  const [catBreed, setCatBreed] = useState("");
  const [loadingFact, setLoadingFact] = useState(true);
  const [loadingBreed, setLoadingBreed] = useState(true);

  useEffect(() => {
    fetchCatFact(); // Fetch cat fact when the component mounts
    fetchCatBreed(); // Fetch cat breed when the component mounts
  }, []); // Empty dependency array means this effect runs only once after initial render

  const fetchCatFact = () => {
    setLoadingFact(true); // Set loading to true before fetching the fact
    Axios.get("https://catfact.ninja/fact?max_length=140")
      .then((response) => {
        setCatFact(response.data.fact); // Extracting the cat fact from response.data.fact
        setLoadingFact(false); // Set loading to false after the fact is fetched
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
        setLoadingFact(false); // Ensure loading is set to false even if there's an error
      });
  };

  const fetchCatBreed = () => {
    setLoadingBreed(true); // Set loading to true before fetching the breed
    Axios.get("https://catfact.ninja/breeds?limit=1")
      .then((response) => {
        setCatBreed(response.data.data[0].breed); // Extracting the cat breed from response.data
        setLoadingBreed(false); // Set loading to false after the breed is fetched
      })
      .catch((error) => {
        console.error("Error fetching cat breed:", error);
        setLoadingBreed(false); // Ensure loading is set to false even if there's an error
      });
  };

  return (
    <div className="App">
      <div className="button-container">
        <button className="generate-button" onClick={fetchCatFact}>Generate Cat Fact</button>
        <button className="breed-button" onClick={fetchCatBreed}>Fetch Cat Breed</button>
      </div>
      <div className="content">
        <div className={`fact ${loadingFact ? 'hidden' : ''}`}>{catFact}</div>
        <div className={`breed ${loadingBreed ? 'hidden' : ''}`}>Breed: {catBreed}</div>
      </div>
    </div>
  );
}

export default App;
