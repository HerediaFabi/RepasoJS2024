import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className="searchbar-container">
      <input type="text" id="search-input" placeholder="Ingrese ciudad" />
      <button
        onClick={() =>
          props.onSearch(document.getElementById("search-input").value)
        }
      ></button>
    </div>
  );
}
