import React from "react"
//import { Link } from "gatsby"
import Layout from '../components/layout'
import CaseStudyTile from "../components/CaseStudyTile"
import quicktoolshero from "../images/quicktools/hero.png"
import vahero from "../images/visualactivities/hero.png"
import fshero from "../images/fieldservice/hero.png"
import animhero from "../images/animation/hero.png"
import TypingAnimation from "../components/TypingAnimation";

const IndexPage = () => (
  <Layout>
    <div className="base-page">
      <div className="base-page-intro">
        <div className="statictext">
          <h1>Vishaka is an interdisciplinary product designer, </h1>
        </div>
        <div className="typer">
          <h1>
            <TypingAnimation/>
          </h1>
        </div>
      </div>
      <div className="projects">
        <CaseStudyTile 
          to="/quicktools" 
          title="Quick tools" 
          role="Senior UX Designer @ Lucid Software"
          image={quicktoolshero}
        />
        <CaseStudyTile 
          to="/visualactivities" 
          title="Visual activities" 
          role="UX Designer II @ Lucid Software"
          image={vahero}
        />
        <CaseStudyTile 
          to="/fieldserviceapp" 
          title="Field Service Application" 
          role="Student researcher & designer @ Microsoft Dynamics 365"
          image={fshero}
        />
        <CaseStudyTile 
          to="/animationcapstone" 
          title="Animation capstone" 
          role="Student 3D animator @ Animation Research Labs, University of Washington"
          image={animhero}
        />
        {/* Add more CaseStudyTile components as needed */}
        </div>
        <div className="external-links">
            <h2>Recently featured in:</h2>
            <h3>
              <a href="https://lucid.co/resources/webinars/use-cases-for-visual-activities-jan-2024" target="_blank" rel="noopener noreferrer">Aligning teams and encouraging participation: 5 use cases for Visual Activities by Adam Ellsworth, Mackenzie Nielsen, and Vishaka Nirmal ↗</a>
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