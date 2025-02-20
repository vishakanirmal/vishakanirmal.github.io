import React from "react"
import Layout from '../components/layout'
import CaseStudyTile from "../components/CaseStudyTile"
import quicktoolshero from "../images/quicktools/newhero.png"
import fshero from "../images/fieldservice/heronew.png"
import wefthero from "../images/weft/newhero.png"
import terrahero from "../images/terra/terrahero.png"
import lucidhero from "../images/lucid/lucidhero.png"
import dandelion from "../images/dandelion/hero.png"
import dandelionLogo from "../images/logos/Dandelionlogo.png" // Add logos
import lucidLogo from "../images/logos/Lucidlogo.png"
import weftLogo from "../images/logos/Weftlogo.png"
import fsLogo from "../images/logos/Microsoftlogo.png"
import terraLogo from "../images/logos/Terralogo.png"

const IndexPage = () => (
  <Layout>
    <div className="base-page">
      <div className="projects">
        <CaseStudyTile 
          to="/dandelion"
          image={dandelion}
          logo={dandelionLogo}
          description="Designing the tasting experiences for craft chocolate."
        /> 
        <CaseStudyTile 
          to="/lucid"
          image={lucidhero}
          logo={lucidLogo}
          description="Crafting dynamic, on-canvas tools for virtual collaboration."
        />
        <CaseStudyTile 
          to="/weft"
          image={wefthero}
          logo={weftLogo}
          description="Developing a sustainable, interactive prototype for furniture longevity."
        />
        <CaseStudyTile 
          to="/fieldservice"
          image={fshero}
          logo={fsLogo}
          description="Designing an AR-powered mobile experience for field service technicians."
        />
        <CaseStudyTile 
          to="/terra"
          image={terrahero}
          logo={terraLogo}
          description="Creating an AI-powered game device for tactile interactions and replayability."
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
