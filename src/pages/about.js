import React from 'react';
import Layout from '../components/layout';
import '../styles/global.css';
import image from '/src/images/profile.jpg';
import uw from '/src/images/logos/uw.png';
import brown from '/src/images/logos/brown.png';
import risd from '/src/images/logos/risd.png';
import lucid from '/src/images/logos/lucid.png';
import microsoft from '/src/images/logos/microsoft.jpg';
import metro from '/src/images/logos/metro.png';
import TypingAnimationAbout from '../components/TypingAnimationAbout';

// Tool categories and their respective tools
const tools = {
  'Research': ['UserResearch.com', 'Optimal Workshop', 'Maze', 'Lucid', 'Mural', 'Miro'],
  '2D': ['Illustrator', 'Photoshop', 'Figma', 'Sketch'],
  '3D': ['Fusion', 'Blender', 'Unity', 'Rhino', 'Maya'],
  'Fabrication': ['Laser Cutter', '3D Printing', 'CNC', 'Sewing', 'Embroidery'],
  'Code': ['HTML/CSS', 'Javascript', 'Java', 'Python', 'Processing', 'p5', 'SQL', 'R'],
  'Other': ['Arduino', 'Raspberry Pi'],
};

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <div className="base-page">
          <div className="aboutinfo">
            <div className="about-image">
              <img src={image} alt="A description of the image" className="about-image" />
            </div>
            <div>
              <p>
              Hi! I’m Vishaka, a designer usually based out of Seattle, Washington. 
              </p>
              <p>
              For as long as I can remember, I’ve always designed for people — ranging from organizing cabinets to help my family find things they need, to crafting individualized presents for birthdays/holidays.               </p>
              <p>
              As I grew up, I was surrounded by a constant source of medical and aerospace terminology from my parent’s complex work environments. In navigating my career path, I knew that I wanted to blend my understanding of complex, technical fields with the simplicity of reorganizing cabinets for efficiency.               </p>
              <p>
              In the future, I want to continue designing for complex problems and technology, and making them as intuitive as reaching in a cabinet to find the thing you need most.               </p>
            </div>
          </div>
          <div className="tools-section">
            <h2>I work with a variety of toolkits, including:</h2>
            <table className="tools-table">
              <thead>
                <tr>
                  {Object.keys(tools).map((category) => (
                    <th key={category}>{category}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.max(...Object.values(tools).map((col) => col.length)) }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.keys(tools).map((category) => (
                      <td key={category}>
                        {tools[category][rowIndex] || ''} {/* Handle uneven rows */}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="logo-section">
            <h2>I've had the joy of working with:</h2>
            <div className="logo-container">
              <img src={uw} alt="University of Washington" />
              <img src={brown} alt="Brown University" />
              <img src={risd} alt="RISD" />
              <img src={lucid} alt="Lucid Software" />
              <img src={microsoft} alt="Microsoft" />
              <img src={metro} alt="King County Metro" />
              {/* Add more logos as needed */}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
