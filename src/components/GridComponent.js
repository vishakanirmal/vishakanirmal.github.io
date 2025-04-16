import React from "react";
import "../styles/global.css";
import ai from "../images/playground/ai.png";
import cv from "../images/playground/drawing.gif";
import zoomy from "../images/playground/zoomytunez.gif";
import id from "../images/playground/id.png";
import weather from "../images/playground/weather.gif";
import fruit from "../images/playground/physical computing.png";
import allergy from "../images/playground/allergy.png";
import tactileUI from "../images/playground/table.gif";
import anim from "../images/playground/takingflight.gif"
import emp from "../images/playground/emp.jpg";
import ar from "../images/playground/ar.gif";



const GridComponent = () => {
  const projects = [
    { id: 4, imageUrl: tactileUI, description: "Designed an interactive drawing tabletop utilizing object tracking, computer vision, and projection mapping." },
    { id: 3, imageUrl: ai, description: "Drafted and designed a graphic novel in collaboration with AI generation tools." },
    { id: 6, imageUrl: id, description: "Designed and prototyped a dual-sided measuring tape for easy midpoint measurements." },
    { id: 13, imageUrl: ar, description: "Developed museum-inspired AR prototypes to usability test UI vs kinesthetic interaction modalities for 3D data analysis." },
    { id: 1, imageUrl: anim, description: "Worked on story, art, 3D modeling, and character animation for a short film about flying squirrels." },
    { id: 2, imageUrl: cv, description: "Designed a collaborative drawing interactive program using computer vision and body segmentation." },
    { id: 11, imageUrl: allergy, description: "Crafted allergen translation cards for easy communication while traveling" },
    { id: 5, imageUrl: weather, description: "Developed an ambient weather module that provides progressive disclosure on weather conditions on as you approach it." },
    { id: 8, imageUrl: fruit, description: "Developed a smart fruit bowl to track current and optimal fruit storage conditions." },
    { id: 10, imageUrl: zoomy, description: "Design and development for a running application that builds playlists based on your running patterns, using the Spotify API." },
    { id: 12, imageUrl: emp, description: "Usability testing with a paper and cardboard prototype for an in-museum experience." },

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
