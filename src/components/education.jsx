import React from "react";
import EducationCard from "./edu-card";

import NtnuImage from "../assets/job/ntnu-image.jpg";

const list = [
  {
    degree: "Exchange Semester - Research in AI and Data Science",
    institution: "Norwegian University of Science and Technology (NTNU)",
    institutionUrl: "https://www.ntnu.edu/",
    startDate: "August 2023",
    endDate: "February 2024",
    description:
      "Focused on advanced research methodologies and practical applications in data science and AI while experiencing international academic culture.",
    achievements: [
      "📚 Gained in-depth knowledge in Diffusion Models and Transfer Learning.",
      "🌍 Enhanced global perspective through collaborations with international peers.",
      "🔍 Conducted research on Facial Emotion Recognition using advanced techniques.",
      "🗺️ Explored European culture through visits to cities like Oslo, Warsaw, Prague, and Milan.",
    ],
    tags: ["Diffusion Models", "Transfer Learning", "International Exposure"],
    image: NtnuImage,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Sukkur IBA University",
    institutionUrl: "https://www.iba-suk.edu.pk/",
    startDate: "August 2019",
    endDate: "July 2023",
    description:
      "Achieved academic excellence with a focus on data science, software engineering, and AI, supported by multiple scholarships.",
    achievements: [
      "🏅 Silver Medalist with a CGPA of 3.62, ranking 2nd in the graduating batch.",
      "💼 Awarded prestigious fully funded scholarships, including the NORPART CONNECT Scholarship for an exchange semester at NTNU.",
      "📈 Excelled in academic and extracurricular activities, showcasing leadership and innovation.",
    ],
    tags: ["CGPA: 3.62", "Silver Medalist", "Data Science", "AI"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Sukkur_IBA_University_logo.png", // Sukkur IBA logo
  },
];

function Education() {
  return (
    <div className="mb-5">
      <h2 className="text-warning mb-4">🎓 Education</h2>
      {list.map((item, index) => (
        <EducationCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Education;
