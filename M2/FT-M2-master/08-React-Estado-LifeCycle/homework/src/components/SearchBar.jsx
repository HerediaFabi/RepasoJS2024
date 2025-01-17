import React, { useState } from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState("");
  function onChangeInput(e) {
    setCity((city) => e.target.value);
  }

  return (
    <form
      class="d-flex"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity((city) => ""); //Resetear estado
        e.target[0].value = ""; //Limpiar input
      }}
    >
      <input
        class={`form-control me-2 bg-light ${styles.input}`}
        type="search"
        placeholder="Ingrese ciudad"
        aria-label="Search"
        onChange={onChangeInput}
      />
      <button class={`btn btn-outline-success ${styles.button}`} type="submit">
        Buscar
      </button>
    </form>
  );
}
