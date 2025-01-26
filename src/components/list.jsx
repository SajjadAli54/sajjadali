import React from "react";

import JobCard from "./job-card";

function List({ title, data }) {
  return (
    <div className="mb-5">
      <h2 className="text-primary mb-4">{title}</h2>
      {data.map((item, index) => (
        <JobCard key={index} {...item} />
      ))}
    </div>
  );
}

export default List;
