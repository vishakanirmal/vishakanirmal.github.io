import React, { useState } from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import sketch1 from "/src/images/1.svg"
import sketch2 from "/src/images/2.svg"
import sketch3 from "/src/images/3.svg"

const interactiveWords = [
  { text: "intuitive interactions", color: "#E62A9E", sketch: sketch1, note: "In one of my first UX projects, I set up a fake museum for usability testing, see how people interacted with our designed technology within the space.", top: "45%", left: "80%" },
  { text: "strong collaborator", color: "#3300FF", sketch: sketch2, note: "By designing for the virtual canvas at Lucid Software, I've built a strong toolkit for collaboration, learning how teams across industries work together.", top: "45%", left: "80%" },
  { text: "ambitious technologist", color: "#FF7D19", sketch: sketch3, note: "The first time I explored 3D tools was to model and animate flying squirrels for a short film.", top: "45%", left: "80%" },
];

const IndexPage = () => {
  const [hoveredWord, setHoveredWord] = useState(null);

  return (
    <Layout>
    <div className="base-page-home">
      {/* Background Sketch (Only one displayed at a time) */}
      {hoveredWord && (
        <img
          src={hoveredWord.sketch}
          alt="Sketch"
          className="sketch-visible"
          style={{ top: hoveredWord.top, left: hoveredWord.left }}
        />
      )}

      {/* Intro Content */}
      <div className="intro-content">
        <h1>
          Vishaka is a human-centered designer who crafts{" "}
          <span
            className="interactive-word"
            style={{ "--hover-color": interactiveWords[0].color }}
            onMouseEnter={() => setHoveredWord(interactiveWords[0])}
            onMouseLeave={() => setHoveredWord(null)}
          >
            intuitive interactions 
            {hoveredWord === interactiveWords[0] && (
              <span className="tooltip">{interactiveWords[0].note}</span>
            )}
          </span>
          {" "}across digital and tangible experiences.
        </h1>
        <h1>
          She's also a{" "}
          <span
            className="interactive-word"
            style={{ "--hover-color": interactiveWords[1].color }}
            onMouseEnter={() => setHoveredWord(interactiveWords[1])}
            onMouseLeave={() => setHoveredWord(null)}
          >
            strong collaborator
            {hoveredWord === interactiveWords[1] && (
              <span className="tooltip">{interactiveWords[1].note}</span>
            )}
          </span>{" "}
          &{" "}
          <span
            className="interactive-word"
            style={{ "--hover-color": interactiveWords[2].color }}
            onMouseEnter={() => setHoveredWord(interactiveWords[2])}
            onMouseLeave={() => setHoveredWord(null)}
          >
            ambitious technologist
            {hoveredWord === interactiveWords[2] && (
              <span className="tooltip">{interactiveWords[2].note}</span>
            )}
          </span>
          .
        </h1>
        <Link to="/work"> Learn more about my work → </Link>
      </div>
    </div>
  </Layout>
  );
};

export default IndexPage;
