import React from "react"
import { Link } from "gatsby"

const CaseStudyTile = ({ to, image, logo, description, tags }) => {
  return (
    <Link to={to} className="case-study-tile">
      <div className="case-study-image-wrapper">
        <img src={image} alt="" className="case-study-image" />
      </div>
      <img src={logo} alt="Project Logo" className="case-study-logo" />
      <div className="case-study-description">{description}</div>
      
      {/* Displaying the tags */}
      <div className="case-study-tags">
        {tags && tags.map((tag, index) => (
          <span key={index} className="case-study-tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default CaseStudyTile
