import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
function Cards(props) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div className={styles.container}>
      {props.cities &&
        props.cities.map((city) => (
          <Card
            name={city.name}
            temp={city.temp}
            max={city.max}
            min={city.min}
            img={city.img}
            country={city.country}
            onClose={props.onClose}
            id={city.id}
            key={city.id}
          />
        ))}
    </div>
  );
}

export default Cards;
