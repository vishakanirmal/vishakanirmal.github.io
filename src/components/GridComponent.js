import React from "react";
import "../styles/global.css";
import ai from "../images/playground/ai.png";
import cv from "../images/playground/drawing.gif";
import laser from "../images/playground/laser.gif";
import zoomy from "../images/playground/zoomytunez.gif";
import id from "../images/playground/id.png";
import weather from "../images/playground/weather2.gif";
import fruit from "../images/playground/physical computing.png";
import dog from "../images/playground/doghealth.png";
import tactileUI from "../images/playground/table.gif";
import anim from "../images/animation/newhero.png"



const GridComponent = () => {
  const projects = [
    { id: 4, imageUrl: tactileUI, description: "Designed an interactive drawing tabletop utilizing object tracking, computer vision, and projection mapping." },
    { id: 1, imageUrl: anim, description: "Worked on story, art, 3D modeling, and character animation for short film." },
    { id: 3, imageUrl: ai, description: "Drafted and designed a graphic novel in collaboration with AI generation tools." },
    { id: 6, imageUrl: id, description: "Designed and prototyped a dual-sided measuring tape for easy midpoint measurements." },
    { id: 5, imageUrl: weather, description: "Developed an ambient weather module that provides progressive disclosure on weather conditions on as you approach it." },
    { id: 2, imageUrl: cv, description: "Designed a collaborative drawing interactive program using computer vision and body segmentation." },
    { id: 7, imageUrl: laser, description: "Design for a self erasing canvas tool for Lucid's canvas platforms." },
    { id: 8, imageUrl: fruit, description: "Developed a smart fruit bowl to track current and optimal fruit storage conditions." },
    { id: 10, imageUrl: zoomy, description: "Design and development for a running application that builds playlists based on your running patterns, using the Spotify API." },
    { id: 11, imageUrl: dog, description: "Designed UI for a centralized dog health tracking application." },

  ];

  return (
    <div className="grid-container">
      {projects.map((project) => (
        <div className="grid-item" key={project.id}>
          <img src={project.imageUrl} alt={project.description} />
          <div className="overlay-text">{project.description}</div>
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
