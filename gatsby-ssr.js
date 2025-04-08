// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" });

  setHeadComponents([
    <link key="favicon" rel="icon" href="/favi.png" type="image/png" />,
    <title key="title">Vishaka Nirmal</title>, // Set the tab title here

    // Google Analytics Script
    <script
      key="google-analytics"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-GL1V3HMV74"
    />,
    <script
      key="gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GL1V3HMV74', { anonymize_ip: true });
        `,
      }}
    />,
  ]);
};
