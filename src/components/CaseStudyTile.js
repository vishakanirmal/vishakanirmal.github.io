import React from "react"
import { Link } from "gatsby"

const CaseStudyTile = ({ to, image, logo, description, tags, descriptionColor, year }) => {
  return (
    <Link to={to} className="case-study-tile" style={{ outlineColor: descriptionColor }}>
      {/* Year in top-right corner */}
      <div className="case-study-year" style={{ color: descriptionColor }}>{year}</div>

      <div className="case-study-image-wrapper">
        <img src={image} alt="" className="case-study-image" />
      </div>
      <img src={logo} alt="Project Logo" className="case-study-logo" />
      <div className="case-study-description" style={{ color: descriptionColor }}>
        {description}
      </div>

      {/* Displaying the tags */}
      <div className="case-study-tags">
        {tags && tags.map((tag, index) => (
          <span key={index} className="case-study-tag" style={{ backgroundColor: descriptionColor }}>
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default CaseStudyTile
