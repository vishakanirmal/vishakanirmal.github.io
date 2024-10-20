import "./src/styles/global.css"

import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="favicon"
      rel="icon"
      href="/static/favi.png"
      type="image/png"
    />,
    // Add additional favicon formats for different devices if needed
  ]);
};