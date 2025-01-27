import React, { useEffect } from "react";

const TypingAnimationMisc = () => {
  const words = [
    "a strong collaborator.",
    "an ambitious technologist.",
    "an investigative researcher.",
    // Add more project descriptions as needed
  ];

  useEffect(() => {
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffle(words);

    let index = 0;
    const placeholder = document.getElementById("new-page-typer");

    function type(word) {
      let i = 0;
      const writing = setInterval(() => {
        if (placeholder) {
          placeholder.innerHTML += word.charAt(i);
          i++;
        }
        if (i >= word.length) {
          clearInterval(writing);
          setTimeout(erase, 3000);
        }
      }, 75);
    }

    function erase() {
      const deleting = setInterval(() => {
        if (placeholder) {
          placeholder.innerHTML = placeholder.innerHTML.slice(0, -1);
          if (placeholder.innerHTML.length <= 0) {
            clearInterval(deleting);
            index++;
            if (index >= words.length) {
              index = 0;
            }
            type(words[index]);
          }
        }
      }, 25);
    }

    type(words[index]);
  }, []);

  return <h1 id="new-page-typer" className="typer"></h1>;
};

export default TypingAnimationMisc;
