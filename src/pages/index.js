import React from "react"
import Layout from '../components/layout'
import { Link } from "gatsby"
import sketchesImage from "/src/images/sketches.png"
import TypingAnimationMisc from "../components/TypingAnimationMisc"

const IndexPage = () => (
  <Layout>
    <div className="base-page"
          style={{
            backgroundImage: `url(${sketchesImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
    >
      <div className="base-page-intro">
        <div className="statictext">
        <h1>Vishaka is a human centered designer who crafts intuitive experiences. </h1>
        <h1>She's also known to be a strong collaborator and an ambitious technologist.</h1>
          <Link to="/work"> Learn more about my work → </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage