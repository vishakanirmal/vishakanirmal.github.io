import React, { useEffect } from "react";
import Layout from '../components/layout';
import '../styles/global.css';
import image from '/src/images/profile.jpg';

const AboutPage = () => {
  useEffect(() => {
    const words = [
      "#1 she has double-jointed thumbs",
      "#2 she is a native seattlite, but doesn't drink coffee",
      "#3 her favorite fish is salmon",
      "#4 she is a die-hard dog lover", 
      "#5 she began snowboarding during the pandemic",
      "#6 she is the proud owner of an Animal Crossing themed switch",
      "#7 she worked on an animated film about squirrels",
      "#8 she learned web development to make this website!",
      "#9 her favorite movie is Meet the Robinsons",
      "#10 her most recent international trip was to Guatemala",
      "#11 she has most recently binge watched Severance", 
      "#12 she can fully understand Malayalam, but can't speak it",
      "#13 she is obsessed with anything allergen-friendly",
      "#14 she has a london fog every morning",
    ];

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffle(words);

    let index = 0;
    const placeholder = document.getElementById("about-typer");

    function type(word) {
      let i = 0;
      const writing = setInterval(() => {
        placeholder.innerHTML += word.charAt(i);
        i++;
        if (i >= word.length) {
          clearInterval(writing);
          setTimeout(erase, 3000);
        }
      }, 75);
    }

    function erase() {
      const deleting = setInterval(() => {
        placeholder.innerHTML = placeholder.innerHTML.slice(0, -1);
        if (placeholder.innerHTML.length <= 0) {
          clearInterval(deleting);
          index++;
          if (index >= words.length) {
            index = 0;
          }
          type(words[index]);
        }
      }, 25);
    }

    type(words[index]);
  }, []);

  return (
    <Layout>
      <main>
        <div className="base-page">
          <div className="base-page-intro">
            <div className="statictext">
              <h1>Vishaka's fun facts:</h1>
            </div>
            <h1 id="about-typer" className="typer"></h1>
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