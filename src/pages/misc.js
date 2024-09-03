import React from "react";
import Layout from "../components/layout";
import TypingAnimationNewPage from "../components/TypingAnimationMisc";
import GridComponent from "../components/GridComponent";
import "../styles/global.css"; // Ensure you have necessary global styles

const Misc = () => {
  return (
    <Layout>
      <main>
        <div className="base-page">
          <div className="base-page-intro">
            <div className="statictext">
              <h1>Vishaka's skillset includes</h1>
            </div>
            <TypingAnimationNewPage />
          </div>
          <div className="grid-section">
            <GridComponent />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Misc;
