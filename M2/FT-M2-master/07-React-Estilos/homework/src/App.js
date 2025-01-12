import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "./data.js";

function App() {
  return (
    <div className="App">
      <div className="title text-light">
        <span>Pronóstico del clima</span>
      </div>
      <div>
        <Cards cities={data} />
      </div>
      <div>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </div>
    </div>
  );
}

export default App;
