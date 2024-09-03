// src/pages/about.js
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

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <div className="base-page">
          <div className="base-page-intro">
            <div className="statictext">
              <h1>Vishaka's fun facts:</h1>
            </div>
            <TypingAnimationAbout />
          </div>
          <div className="aboutinfo">
            <div className="about-image">
              <img src={image} alt="A description of the image" className="about-image" />
            </div>
            <div>
              <p>
               I am a human-centered designer currently focused on crafting virtual collaboration tools. My academic journey in Human-Centered Design & Engineering from the University of Washington, combined with my ongoing studies in Design Engineering at Brown University and the Rhode Island School of Design, equips me with a deep understanding of user needs and effective design.
              </p>
              <p>
              With three years of experience as a UX Designer at Lucid Software and Microsoft Dynamics 365, I’ve had the opportunity to work on impactful projects. At Lucid, I designed Quick Tools and Visual Activities, enhancing user interactions and the functionality of our products. My role also involved refining core features to improve the overall user experience.
              </p>
              <p>
              Looking ahead, I’m excited to explore interdisciplinary approaches to design, particularly in researching and creating hybrid digital-physical products. I’m passionate about pushing the boundaries of traditional design and creating innovative solutions that bridge the digital and physical worlds.
              </p>
              <p>
              Outside of work, you can find me enjoying a visit to a local tea house, experimenting with new creative hobbies, or taking a walk with my dog.
              </p>
            </div>
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
