import React from "react";
import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=67531ccb";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div>
      <h1>React App</h1>
    </div>
  );
}

export default App;
