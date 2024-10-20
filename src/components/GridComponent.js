import React from "react";
import "../styles/global.css"; // Assume you will create this CSS file for styling
import image1 from "../images/playground/emp.jpg";
import image2 from "../images/playground/highlighter.gif";
import image3 from "../images/playground/laser.gif";
import image4 from "../images/playground/shapesinuse.gif";
import image5 from "../images/playground/zoomytunez.gif";

const GridComponent = () => {
  const projects = [
    { id: 1, imageUrl: image1, description: "Low-fidelity prototyping for a museum application"},
    { id: 2, imageUrl: image2, description: "Designing interactions for a highlighter canvas tool"},
    { id: 3, imageUrl: image3, description: "Designed a dynamic facilitator-activated laser canvas tool"},
    { id: 4, imageUrl: image4, description: "Research and design for a dynamic shape library"},
    { id: 5, imageUrl: image5, description: "Using the Spotify API to create running playlists based on your speed"},

    // Add more project details here
  ];

  return (
    <div className="grid-container">
      {projects.map((project) => (
        <div className="grid-item" key={project.id}>
          <img src={project.imageUrl} alt={project.description} />
          <div className="overlay">
            <div className="overlay-text">{project.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
