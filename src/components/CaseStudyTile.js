import React from "react";
import { Link } from "gatsby";

const CaseStudyTile = ({ to, image, description, tags, descriptionColor, year }) => {
  const TileContent = (
    <div className="case-study-tile">
      <div className="case-study-tile-content">
        <div className="case-study-main">
        {year && <div className="case-study-year">{year}</div>}
          <div 
            className="case-study-description"
            style={{ "--description-color": descriptionColor }}
          >
            {description}
          </div>
        <div className="case-study-footer">
          <div className="case-study-tags">
            {tags &&
              tags.map((tag, index) => (
                <div key={index} className="case-study-tag">
                  {tag}
                </div>
              ))}
          </div>
        </div>
        </div>

      </div>
      <div className="case-study-image-wrapper">
        <img src={image} alt="" className="case-study-image" />
      </div>
    </div>
  );

  return to ? (
    <Link to={to} className="case-study-tile-wrapper">
      {TileContent}
    </Link>
  ) : (
    <div className="case-study-tile-wrapper">{TileContent}</div>
  );
};

export default CaseStudyTile;
