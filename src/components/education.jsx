import React from "react";
import EducationCard from "./edu-card";

import { education as list } from "../data/education";

function Education() {
  return (
    <div className="mb-5">
      <h2 className="text-center text-primary mb-4 display-4 fw-bold">
        🎓 Education
      </h2>
      {list.map((item, index) => (
        <EducationCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Education;
