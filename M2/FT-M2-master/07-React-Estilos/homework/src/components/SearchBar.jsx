import React from "react";
import styles from "./SearchBar.module.css";
console.log(styles);
export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={styles.container}>
      <form role="search">
        <input
          class={`bg-light ${styles.input}`}
          type="search"
          placeholder="Ingrese ciudad"
          aria-label="Search"
        />
        <button class={`btn btn-outline-light ${styles.button}`} type="submit">
          Buscar
        </button>
      </form>
    </div>
    // <div className={styles.container}>
    //   <input
    //     className={styles.input}
    //     type="text"
    //     id="search-input"
    //     placeholder="Ingrese ciudad"
    //   />
    //   <button
    //     className={styles.button}
    //     onClick={() =>
    //       props.onSearch(document.getElementById("search-input").value)
    //     }
    //   ></button>
    // </div>
  );
}
