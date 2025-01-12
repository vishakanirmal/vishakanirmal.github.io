import React, { useEffect } from "react";

const TypingAnimation = () => {
  useEffect(() => {
    let words = [
      "a human centered designer.",
      "a design strategist.",
      "a user researcher.",
      "a user experience designer.",
      "a design technologist.",
      "a motion designer.",
      "a human-factors designer."
    ];

    // Shuffle the array of words
    function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    }

    shuffle(words);

    let placeholder = document.getElementById("home-typer");
    let index = 0;

    function type(word) {
      let i = 0;
      let writing = setInterval(() => {
        placeholder.innerHTML += word.charAt(i);
        i++;
        if (i >= word.length) {
          clearInterval(writing);
          setTimeout(erase, 3000);
        }
      }, 75);
    }

    function erase() {
      let deleting = setInterval(() => {
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
    <h1 id="home-typer" className="typer"></h1>
  );
};

export default TypingAnimation;
