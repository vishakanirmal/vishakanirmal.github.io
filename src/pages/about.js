import React from 'react';
import Layout from '../components/layout';
import '../styles/global.css';
import image2 from '/src/images/about/uw.jpg';
import image3 from '/src/images/about/allergycard.png';

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <div className="base-page">
          <div className="aboutinfo">
          <h1>
              Hi, I’m Vishaka. 
          </h1>
          <div className="about-image">
             <img src={image2} alt="A description of the image" className="about-image" />
          </div>
          <div>
              <h2>
              Currently~
              </h2>
              <p>
              I’m a masters student at Brown and RISD, focused on <b>designing interactions that weave digital technology into the tangible world.</b>                 
              </p>
            </div>
            <div>
              <h2>
              The basic info:              
              </h2>
              <p>
              I spent 4 years working at Lucid Software, designing tools for virtual collaboration. Prior to this role, I completed my undergraduate degree at the University of Washington, in <b>Human Centered Design & Engineering</b>, with concentrations in <b>Human-Computer Interaction</b>, and <b>3D animation</b>.
              Outside of this role, I have worked on client projects for Dandelion Chocolate, Microsoft, and King County Metro, where I worked on designing spatial and immersive experiences across a variety of contexts. 
              </p>
            </div>
            <div>
              <h2>
              Why design?              
              </h2>
              <div className="about-image">
                <img src={image3} alt="Designed allergy cards" className="about-image" />
              </div>
              <p>
              I have a wide range of severe food allergies that shape my daily interactions. Whether it’s grocery shopping, dining out, traveling, or even picking out dog treats, I often encounter systems that weren’t designed with people like me in mind.
              </p>
              <p>
              Technology has been a tool that helps me bridge these gaps—making communication and tracking allergens just a little easier. But I know technology isn’t always seamlessly integrated into the real world. That’s why <b>I design for complex interactions, creating solutions that make navigating both digital and physical spaces more intuitive for everyone.</b>
              </p>
            </div>
            <div>
              <h2>
              Things not on my resume              
              </h2>
              <ul>
                <li>I spent 3 years as a leadership mentor for high school students 🎒</li>
                <li>My favorite movie is Meet the Robinsons 💡</li>
                <li>I’ve spent years crafting the best london fog 🫖</li>
                <li>My pandemic hobby was taking up snowboarding 🏂</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
