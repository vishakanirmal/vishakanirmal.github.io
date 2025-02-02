import React, { useState, useEffect } from "react"
import Layout from '../components/layout'
import { Link } from "gatsby"
import TypingAnimationMisc from "../components/TypingAnimationMisc"
import sketch1 from "/src/images/2.png"
import sketch2 from "/src/images/1.png"
import sketch3 from "/src/images/4.png"
import sketch4 from "/src/images/5.png"
import sketch5 from "/src/images/6.png"
import sketch6 from "/src/images/3.png"

const sketches = [
  { src: sketch1, top: 20, left: 5 },
  { src: sketch2, top: 15, left: 35 },
  { src: sketch3, top: 20, left: 65 },
  { src: sketch4, top: 55, left: 15 },
  { src: sketch5, top: 60, left: 45 },
  { src: sketch6, top: 55, left: 70 },
];

const IndexPage = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [visibleSketches, setVisibleSketches] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });

      const updatedVisibility = {};
      sketches.forEach((_, index) => {
        const sketchX = (window.innerWidth * sketches[index].left) / 100;
        const sketchY = (window.innerHeight * sketches[index].top) / 100;
        const distance = Math.hypot(sketchX - e.clientX, sketchY - e.clientY);

        updatedVisibility[index] = distance < 300; // Adjust radius for fade effect
      });

      setVisibleSketches(updatedVisibility);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Layout>
      <div className="base-page">
        {/* Background Sketches */}
        <div className="sketch-container">
          {sketches.map((sketch, index) => (
            <img
              key={index}
              src={sketch.src}
              alt={`Sketch ${index + 1}`}
              className={`sketch ${visibleSketches[index] ? "visible" : ""}`}
              style={{
                top: `${sketch.top}%`,
                left: `${sketch.left}%`,
              }}
            />
          ))}
        </div>

        {/* Intro Content */}
        <div className="base-page-intro">
          <div className="statictext">
            <h1>Vishaka is a human-centered designer who crafts intuitive experiences.</h1>
            <h1>She's also a strong collaborator and ambitious technologist.</h1>
            <Link to="/work"> Learn more about my work → </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
