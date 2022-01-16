import React from "react";

import "./content.styles.css";

const Content = ({ title, content, color }) => (
  <div className="content-container">
    <h2 className="content-title">{title}</h2>
    <p className="content-content">{content}</p>
    <svg width="60" height="30" viewBox="0 0 60 30" class="svg_content">
      <g transform="translate(-923 -592)">
        <rect
          width="30"
          height="30"
          transform="translate(923 592)"
          fill={color === "purple" ? "#5c2fc0" : "rgb(18, 176, 56)"}
        ></rect>
        {/* should use Object -> switch case =)) */}
        <rect
          width="30"
          height="30"
          rx="15"
          transform="translate(953 592)"
          fill={color === "purple" ? "#44277c" : "rgb(166, 214, 18)"}
        ></rect>
      </g>
    </svg>
  </div>
);

export default Content;
