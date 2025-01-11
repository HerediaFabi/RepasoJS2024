import React from "react";

export default function Card(props) {
  console.log(props);

  // acá va tu código
  return (
    <div className="card-container">
      <button className="close" onClick={props.onClose}>
        X
      </button>
      <p className="title">{props.name}</p>
      <div className="wheather-info">
        <div className="min-temp">
          <p>Min</p>
          <p>{props.min}</p>
        </div>
        <div className="max-temp">
          <p>Max</p>
          <p>{props.max}</p>
        </div>
        <div className="image">
          <img
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
