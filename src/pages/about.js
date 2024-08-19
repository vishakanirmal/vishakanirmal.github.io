// src/pages/about.js
import React from 'react';
import Layout from '../components/layout';
import '../styles/global.css';
import image from '/src/images/profile.jpg';
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
                As a designer, I find inspiration in the mundane. When I was younger, I would often take it upon myself to reorganize the pantry, media console, or even furniture. How could I make sure the right spices were accessible as my mother cooked? How could I rearrange cabinets to help my sister and I find our shared products easily? As a six-year-old, I didn't quite know what design was, but I was eager to understand my family's needs and positively impact my surroundings. Even today, I still strive to learn from how people interact with our world. Can I learn from how people interact with a microwave? A puzzle? Or at a grocery store? I keenly observe my surroundings, hoping to learn from each trivial interaction.
              </p>
              <p>
                With my undergrad at the University of Washington, I got to build upon my observation skills. I graduated with a B.S. in Human Centered Design & Engineering, with concentration tracks in Human-Computer Interaction, and 3D animation. Throughout the past couple years, I've gotten the opportunity to work with teams such as Microsoft Dynamics, and Lucid Software. With 3.5 years of industry experience in my toolkit, I'm now excited to pursue my Masters degree. I'll be spending my time at both RISD and Brown, honing in my digital+physical prototyping skills with a degree in Design Engineering.
              </p>
              <p>
                Throughout my design journey, I've strived to be an advocate for user needs, beautiful design, and functional experiences. And when I'm not engrossed in a design problem, you can often find me walking my dog Olive through a new park.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
