import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div className={styles.container}>
      {props.cities.map((city) => (
        <Card
          name={city.name}
          temp={city.main.temp}
          max={city.main.temp_max}
          min={city.main.temp_min}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          key={city.id}
        />
      ))}
    </div>
  );
}
