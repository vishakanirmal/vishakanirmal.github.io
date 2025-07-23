import React, { useState } from "react";
import "../styles/global.css";

const GridComponent = ({ projects }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (id) => setHoveredProject(id);
  const handleMouseLeave = () => setHoveredProject(null);
  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="grid-container" onMouseMove={handleMouseMove}>
      {projects.map((project) => (
        <div
          className="grid-item"
          key={project.id}
          onMouseEnter={() => handleMouseEnter(project.id)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={project.imageUrl} alt="" />
          {hoveredProject === project.id && (
            <div
              className="tooltip"
              style={{
                left: mousePos.x + 15,
                top: mousePos.y + 15,
              }}
            >
              {project.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
