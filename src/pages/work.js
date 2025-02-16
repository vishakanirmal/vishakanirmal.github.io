import React from "react"
//import { Link } from "gatsby"
import Layout from '../components/layout'
import CaseStudyTile from "../components/CaseStudyTile"
import quicktoolshero from "../images/quicktools/newhero.png"
import fshero from "../images/fieldservice/heronew.png"
import wefthero from "../images/weft/newhero.png"
import terrahero from "../images/terra/terrahero.png"
import lucidhero from "../images/lucid/lucidhero.png"
import dandelion from "../images/dandelion/hero.png"


const IndexPage = () => (
  <Layout>
    <div className="base-page">
      <div className="projects">
        <CaseStudyTile 
          to="/dandelion"
          title="Dandelion Chocolate" 
          role="Designing the tasting experiences for craft chocolate"
          image={dandelion}
          isActive={true}
          isPasswordProtected={false}
        /> 
        <CaseStudyTile 
          to="/lucid"
          title="Lucid Software" 
          role="Crafting dynamic, on-canvas tools for virtual collaboration."
          image={lucidhero}
          isActive={true}
          isPasswordProtected={true}
        />
        <CaseStudyTile 
          to="/weft"
          title="Weft Furniture" 
          role="Developing a sustainable, interactive prototype for furniture longevity."
          image={wefthero}
          isActive={true}
          isPasswordProtected={false}
        />
        <CaseStudyTile 
          to="/fieldservice" 
          title="Microsoft's Field Service Application" 
          role="Designing an AR-powered mobile experience for field service technicians."
          image={fshero}
          isActive={true}
          isPasswordProtected={true}
        />
        <CaseStudyTile 
          to="/terra"
          title="Terra" 
          role="Creating an AI-powered game device for tactile interactions and replayability"
          image={terrahero}
          isActive={true}
          isPasswordProtected={false}
        />
        {/* 
        <CaseStudyTile 
          to="/quicktools" 
          title="Quick tools" 
          role="Senior UX Designer @ Lucid Software"
          image={quicktoolshero}
          isActive={true}
          isPasswordProtected={true}
        />
        <CaseStudyTile 
          to="/visualactivities" 
          title="Visual activities" 
          role="UX Designer II @ Lucid Software"
          image={vahero}
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
        />  */}
        {/* Add more CaseStudyTile components as needed */}
        </div>
    </div>
  </Layout>
)

export default IndexPage