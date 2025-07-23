import React, { useState } from "react";

const ListSection = ({ title, items }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="list-section" onMouseMove={handleMouseMove}>
      <h2 className="list-section-title">{title}</h2>

     <ul className="list-section-items">
        {items.map((item, index) => (
            <li
            key={index}
            className="list-item"
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
            >
            <div className="item-content">
                {item.link ? (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item-label"
                >
                    {item.label}
                </a>
                ) : (
                <div className="item-label">{item.label}</div>
                )}

                {item.sub && <div className="item-sub">{item.sub}</div>}
            </div>
            </li>
        ))}
        </ul>


      {/* Hover image */}
      {hoveredItem?.image && (
        <div
          className="hover-image"
          style={{
            position: "fixed",
            top: mousePos.y + 20,
            left: mousePos.x + 20,
            pointerEvents: "none",
            zIndex: 1000,
          }}
        >
          <img src={hoveredItem.image} alt="" className="tooltip-image" />
        </div>
      )}
    </div>
  );
};

export default ListSection;
