import React from "react";
import "../styles/global.css";
import ai from "../images/playground/ai.png";
import cv from "../images/playground/computer vision.png";
import laser from "../images/playground/laser.gif";
import shapes from "../images/playground/shapesinuse.gif";
import zoomy from "../images/playground/zoomytunez.gif";
import id from "../images/playground/id.png";
import weather from "../images/playground/physical computing-2.png";
import fruit from "../images/playground/physical computing.png";
import dog from "../images/playground/doghealth.png";



const GridComponent = () => {
  const projects = [
    { id: 1, imageUrl: ai, description: "Graphic novel created using AI" },
    { id: 2, imageUrl: cv, description: "Computer vision for collaborative drawing" },
    { id: 3, imageUrl: id, description: "A dual measuring tape for midpoints" },
    { id: 4, imageUrl: weather, description: "An API driven weather module" },
    { id: 5, imageUrl: laser, description: "A self erasing canvas tool" },
    { id: 6, imageUrl: fruit, description: "A smart fruit bowl for optimal storage" },
    { id: 7, imageUrl: shapes, description: "A dynamic shape library" },
    { id: 8, imageUrl: zoomy, description: "Spotify API driven playlists" },
    { id: 9, imageUrl: dog, description: "A dog health tracking application" },

  ];

  return (
    <div className="grid-container">
      {projects.map((project) => (
        <div className="grid-item" key={project.id}>
          <div className="overlay-text">{project.description}</div>
          <img src={project.imageUrl} alt={project.description} />
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
