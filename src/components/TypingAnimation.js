import React, { useEffect } from "react";

const TypingAnimation = () => {
  useEffect(() => {
    let words = [
      "using a human-centered lens.",
      "working with multi-modal technologies.",
      "collaborating with diverse teams",
      "interested in complex human interactions.",
      "rooted in user research.",
    ];

    // Shuffle the array of words
    function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    }

    shuffle(words);

    let placeholder = document.getElementById("text");
    let index = 0;

    function type(word) {
      let i = 0;
      let writing = setInterval(() => {
        placeholder.innerHTML += word.charAt(i);
        i++;
        if (i >= word.length) {
          clearInterval(writing);
          setTimeout(erase, 2000);
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

  return <span id="text"></span>;
};

export default TypingAnimation;
