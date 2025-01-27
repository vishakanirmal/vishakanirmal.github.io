import React from "react"
import { Link } from "gatsby"

const CaseStudyTile = ({ to, title, role, image, isActive, isPasswordProtected }) => (
  <div className="case-study-tile">
    <Link to={to} className="case-study-image-wrapper">
      <img src={image} alt={`Hero shot for ${title}`} className="case-study-image" />
    </Link>
    <div className="tile-description">
      <h2 className="tile-description-element">{title}</h2>
      <p className="tile-description-element">{role}</p>
      {isActive && (
        <Link to={to} className="tile-description-element">
          {isPasswordProtected ? "🔒 View project →" : "View project →"}
        </Link>
      )}
    </div>

  </div>
)

export default CaseStudyTile

