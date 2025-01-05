import React from "react";
import "../styles/global.css";
import ai from "../images/playground/ai.png";
import cv from "../images/playground/drawing.gif";
import laser from "../images/playground/laser.gif";
import shapes from "../images/playground/shapesinuse.gif";
import zoomy from "../images/playground/zoomytunez.gif";
import id from "../images/playground/id.png";
import weather from "../images/playground/physical computing-2.png";
import fruit from "../images/playground/physical computing.png";
import dog from "../images/playground/doghealth.png";
import tactileUI from "../images/playground/table.gif";
import terra from "../images/playground/terra.gif";


const GridComponent = () => {
  const projects = [
    { id: 1, imageUrl: terra, description: "A generative-AI powered game controller" },
    { id: 4, imageUrl: tactileUI, description: "Computer vision for an interactive tabletop" },
    { id: 3, imageUrl: ai, description: "Graphic novel created using AI" },
    { id: 5, imageUrl: weather, description: "An API driven weather module" },
    { id: 2, imageUrl: cv, description: "Computer vision for collaborative drawing" },
    { id: 6, imageUrl: id, description: "A dual measuring tape for midpoints" },
    { id: 7, imageUrl: laser, description: "A self erasing canvas tool" },
    { id: 8, imageUrl: fruit, description: "A smart fruit bowl for optimal storage" },
    { id: 9, imageUrl: shapes, description: "A dynamic shape library" },
    { id: 10, imageUrl: zoomy, description: "Spotify API driven playlists" },
    { id: 11, imageUrl: dog, description: "A dog health tracking application" },

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
