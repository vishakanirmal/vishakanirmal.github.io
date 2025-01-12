import React from "react"
//import { Link } from "gatsby"
import Layout from '../components/layout'
import CaseStudyTile from "../components/CaseStudyTile"
import quicktoolshero from "../images/quicktools/newhero.png"
import vahero from "../images/lucidhero.gif"
import fshero from "../images/fieldservice/heronew.png"
import animhero from "../images/animation/newhero.png"
import wefthero from "../images/weft/newhero.png"
import terrahero from "../images/terra/terrahero.png"
import TypingAnimation from "../components/TypingAnimation";

const IndexPage = () => (
  <Layout>
    <div className="base-page">
      <div className="base-page-intro">
        <div className="statictext">
          <h1>Vishaka is</h1>
        </div>
          <div>
            <TypingAnimation />
          </div>
      </div>
      <div className="projects">
        <CaseStudyTile 
          to="/weft" 
          title="Weft Furniture" 
          role="Researcher & Product Designer @ RISD / Brown"
          image={wefthero}
          isActive={true}
          isPasswordProtected={false}
        />
        <CaseStudyTile 
          to="/quicktools" 
          title="Quick tools" 
          role="Senior UX Designer @ Lucid Software"
          image={quicktoolshero}
          isActive={true}
          isPasswordProtected={true}
        />
        <CaseStudyTile 
          to="/terra" 
          title="Terra" 
          role="Researcher & Product Designer @ RISD / Brown"
          image={terrahero}
          isActive={true}
          isPasswordProtected={false}
        />
        {/* <CaseStudyTile 
          to="/visualactivities" 
          title="Visual activities" 
          role="UX Designer II @ Lucid Software"
          image={vahero}
          isActive={true}
          isPasswordProtected={true}
        /> */}
        <CaseStudyTile 
          to="/fieldserviceapp" 
          title="Field Service Application" 
          role="Researcher & designer @ Microsoft Dynamics 365"
          image={fshero}
          isActive={true}
          isPasswordProtected={true}
        />
        <CaseStudyTile 
          to="/animationcapstone" 
          title="Taking Flight" 
          role="3D animator @ Animation Research Labs, University of Washington"
          image={animhero}
          isActive={true}
          isPasswordProtected={false}
        />
        {/* Add more CaseStudyTile components as needed */}
        </div>
        <div className="external-links">
            <h2>Recently featured in:</h2>
            <h3>
              <a href="https://lucid.co/resources/webinars/use-cases-for-visual-activities-jan-2024" target="_blank" rel="noopener noreferrer">Aligning teams and encouraging participation by Adam Ellsworth, Mackenzie Nielsen, and Vishaka Nirmal ↗</a>
            </h3>
            <h3>
              <a href="https://medium.com/lucid-software-design/run-activity-based-interviews-to-maximize-your-time-with-users-3c233f379084" target="_blank" rel="noopener noreferrer">Run activity based interviews to maximize your time with users by Isabel Boettcher ↗</a>
            </h3>
            <h3>
              <a href="https://medium.com/lucid-software-design/the-lucid-ux-intern-experience-pandemic-edition-5693a1704bd0" target="_blank" rel="noopener noreferrer">The Lucid UX Intern Experience: Pandemic Edition by Lindsey Martin ↗</a>
            </h3>
          </div>
    </div>
  </Layout>
)

export default IndexPage