import React from "react"
import { Link } from "gatsby"

const CaseStudyTile = ({ to, title, role, image, isPasswordProtected }) => (
  <div className="case-study-tile">
    <div className="tile-description">
      <h3 className="tile-description-element">{title}</h3>
      <p className="tile-description-element">{role}</p>
      <Link to={to} className="tile-description-element">
        {isPasswordProtected ? "🔒 Case study →" : "Case study →"}
      </Link>
    </div>
    <Link to={to} className="case-study-image-wrapper">
      <img src={image} alt={`Hero shot for ${title}`} className="case-study-image" />
    </Link>
  </div>
)

export default CaseStudyTile

