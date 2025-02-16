// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'en' });

  setHeadComponents([
    <link
      key="favicon"
      rel="icon"
      href="/favi.png"
      type="image/png"
    />,
    <title key="title">Vishaka Nirmal</title> // Set the tab title here
  ]);
};
