import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }

  const temp_celsius = kelvinToCelsius(props.temp);
  const min_celsius = kelvinToCelsius(props.min);
  const max_celsius = kelvinToCelsius(props.max);

  // acá va tu código
  return (
    <div className={`${styles.container} text-light`}>
      <button
        className={`${styles.closeButton} btn btn-close`}
        onClick={props.onClose}
      ></button>
      <p className={styles.title}>{props.name}</p>
      <div className={styles.info}>
        <div className={styles.data}>
          <p className={styles.temp}>{temp_celsius}°C</p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <p>Min</p>
              <p>{min_celsius}°C</p>
            </div>
            <div className={styles.detail}>
              <p>Max</p>
              <p>{max_celsius}°C</p>
            </div>
          </div>
        </div>
        <div className={styles.icon}>
          <img
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
