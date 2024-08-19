// src/components/TypingAnimationAbout.js
import React, { useEffect } from 'react';

const TypingAnimationAbout = () => {
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
    <h1 id="about-typer" className="typer"></h1>
  );
};

export default TypingAnimationAbout;
