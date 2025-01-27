// src/components/TypingAnimationAbout.js
import React, { useEffect } from 'react';

const TypingAnimationAbout = () => {
  useEffect(() => {
    const words = [
      "And she is a native Seattlite, but doesn't drink coffee.",
      "And she is a die-hard dog lover.", 
      "And she's an amateur snowboarder (pandemic hobby).",
      "And she is the proud owner of an Animal Crossing themed switch.",
      "And she worked on an animated film about squirrels.",
      "And she learned web development to make this website!",
      "And her favorite movie is Meet the Robinsons.",
      "And she has most recently binge watched Severance.", 
      "And she is obsessed with anything allergen-friendly.",
      "And she has a london fog every morning.",
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
