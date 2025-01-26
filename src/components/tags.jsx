import React from "react";

function Tags({ tags }) {
  if (tags && tags.length > 0)
    return (
      <div className="mb-2 mt-3">
        {tags.map((tag, index) => (
          <span key={index} className="badge bg-primary text-white me-2 mb-1">
            {tag}
          </span>
        ))}
      </div>
    );
  else return <></>;
}

export default Tags;
