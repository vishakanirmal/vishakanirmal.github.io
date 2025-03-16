// src/components/Card.js
import React from 'react';

const Card = ({ title, text, image, color }) => {
  return (
    <div className="card" style={{ outlineColor: color }}>
    {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
