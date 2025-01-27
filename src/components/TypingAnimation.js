import React, { useState, useEffect } from "react"; 

const TypingAnimation = () => {
  const defaultText = {
    base: "vishaka is a ",
    designing: "designer",
  };

  const variations = [
    {
      base: " human-centered",
    },
    {
      base: " highly collaborative",
    },
    {
      base: " future-thinking",
    },
  ];

  const [currentText, setCurrentText] = useState(defaultText);
  const [index, setIndex] = useState(0);
  const [variationText, setVariationText] = useState({
    base: "",
  });

  // Helper function to type out variation text gradually
  const typeText = (text, part, callback) => {
    let i = 0;
    const interval = setInterval(() => {
      setVariationText((prev) => ({
        ...prev,
        [part]: prev[part] + text.charAt(i),
      }));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        callback(); // Once typing is complete, call the callback to proceed
      }
    }, 75);
  };

  useEffect(() => {
    let typingTimeout;

    // Function to animate the next variation text after a short delay
    const animateText = () => {
      setVariationText({
        base: "",
      }); // Reset the variation text
      setCurrentText(defaultText); // Render default text immediately

      setTimeout(() => {
        typeText(variations[index].base, "base", () => {
        });
      }, 100); // Delay before starting the first line
    };

    typingTimeout = setTimeout(animateText, 500); // Initial delay before animation starts

    return () => clearTimeout(typingTimeout);
  }, [index]); // Trigger animation when index changes

  // Shuffle function to reset and switch to a new variation
  const handleShuffle = () => {
    setVariationText({
      base: "",
    }); // Reset variation text
    setCurrentText(defaultText); // Reset to default text
    setIndex((prevIndex) => (prevIndex + 1) % variations.length); // Cycle through variations
  };

  return (
    <div>
      {/* Render default text and variation text in separate spans */}
      <h1>
        <span className="statictext">{currentText.base}</span>
      </h1>
      <h1>
        <span className="typer">{variationText.base}</span>
      </h1>
      <h1>
        <span className="statictext">{currentText.designing}</span>
      </h1>


      <button onClick={handleShuffle}>remix</button>
    </div>
  );
};

export default TypingAnimation;
