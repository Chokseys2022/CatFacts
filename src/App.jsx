import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetchCatFact(); // Fetch cat fact when the component mounts
  }, []); // Empty dependency array means this effect runs only once after initial render

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact?max_length=140")
      .then(response => {
        setCatFact(response.data.fact); // Extracting the cat fact from response.data.fact
      })
      .catch(error => {
        console.error("Error fetching cat fact:", error);
      });
  };

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
