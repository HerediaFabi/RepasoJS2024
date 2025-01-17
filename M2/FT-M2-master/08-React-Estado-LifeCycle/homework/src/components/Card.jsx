import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={`${styles.container} text-light`}>
      <button
        className={`${styles.closeButton} btn btn-close`}
        onClick={() => props.onClose(props.id)}
      ></button>
      <p className={styles.title}>
        {props.name}
        {props.country && ", " + props.country}
      </p>
      <div className={styles.info}>
        <div className={styles.data}>
          <p className={styles.temp}>{props.temp}°C</p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <p>Min</p>
              <p>{props.min}°C</p>
            </div>
            <div className={styles.detail}>
              <p>Max</p>
              <p>{props.max}°C</p>
            </div>
          </div>
        </div>
        <div className={styles.icon}>
          <img
            src={`https://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
