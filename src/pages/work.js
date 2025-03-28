import React from "react"
import Layout from '../components/layout'
import CaseStudyTile from "../components/CaseStudyTile"
import quicktoolshero from "../images/quicktools/hero.png"
import fshero from "../images/fieldservice/heronew.png"
import wefthero from "../images/weft/newhero.png"
import terrahero from "../images/terra/terrahero.png"
import vahero from "../images/visualactivities/Tile.png"
import dandelion from "../images/dandelion/hero.png"
import dandelionLogo from "../images/logos/Dandelionlogo.png" // Add logos
import lucidLogo from "../images/logos/Lucidlogo.png"
import weftLogo from "../images/logos/Weftlogo.png"
import fsLogo from "../images/logos/Microsoftlogo.png"
import terraLogo from "../images/logos/Terralogo.png"
import xrlogo from "../images/logos/naturelablogo.png"

const IndexPage = () => (
  <Layout>
    <div className="base-page">
      <div className="projects">
      <CaseStudyTile 
          to="/quicktoolsintro"
          image={quicktoolshero}
          logo={lucidLogo}
          description="Crafting dynamic, on-canvas widgets for virtual collaboration."
          tags={["Digital experience design", "Interaction design" ,"Strategic design"]}
          descriptionColor="#D916A8" 
          year="2023 - 2024"
        />
        <CaseStudyTile 
          to="/dandelion"
          image={dandelion}
          logo={dandelionLogo}
          description="Designing the tasting experiences for craft chocolate."
          tags={["Retail experience design", "Client proposal"]}
          descriptionColor="#8A5A2F" 
          year="2025"
        /> 
        <CaseStudyTile 
          to="/weft"
          image={wefthero}
          logo={weftLogo}
          description="Developing a sustainable, interactive prototype for furniture longevity."
          tags={["Sustainable experience design", "Business development"]}
          descriptionColor="#485D7D" 
          year="2024"
        />
        <CaseStudyTile 
          to="/visualactivitiesintro"
          image={vahero}
          logo={lucidLogo}
          description="Building a collaborative, on-canvas survey tool for Lucid users."
          tags={["Digital experience design", "Interaction design" ,"Strategic design"]}
          descriptionColor="#3C41C2" 
          year="2022 - 2023"
        />
        <CaseStudyTile 
          to="/terra"
          image={terrahero}
          logo={terraLogo}
          description="Creating an AI-powered game device for tactile interactions and replayability."
          tags={["User research", "Game experience design", "Physical computing"]}
          descriptionColor="#117261" 
          year="2024"
        />
        <CaseStudyTile 
          to="/fieldserviceintro"
          image={fshero}
          logo={fsLogo}
          description="Designing an AR-powered mobile experience for field service technicians."
          tags={["User research", "Information architecture", "Mobile XR design"]}
          descriptionColor="#1F8AFF" 
          year="2021"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
