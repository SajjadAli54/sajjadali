import {
  // FaPython,
  FaHtml5,
  FaDatabase,
  // FaMobileAlt,
  FaCogs,
  // FaDesktop,
  FaPython,
} from "react-icons/fa"; // Icons for each tech category

export const techItems = [
  {
    category: "Languages",
    items: "Python, JavaScript, Java, TypeScript, C++, C#",
    icon: FaPython, // Store the reference, NOT JSX
    color: "#306998", // Python Color
  },
  {
    category: "Backend",
    items: "Node.js, NestJS, Django, FastAPI, RestAPIs, GraphQL",
    icon: FaCogs, // Store the reference, NOT JSX
    color: "#68A063", // Node.js Color
  },
  {
    category: "Databases",
    items: "MySQL, PostgreSQL, MongoDB, Redis",
    icon: FaDatabase,
    color: "#4DB33D", // Database Color
  },
  {
    category: "Frontend",
    items: "HTML, CSS, JS, React, Next.js, and SolidJS",
    icon: FaHtml5,
    color: "#E34F26", // HTML5 Color
  },
  {
    category: "Data Science",
    items: "Pandas, Seaborn, Matplotlib, NumPy, Scikit-learn, TensorFlow, PyTorch",
    icon: FaDatabase, // Using database icon for data science
    color: "#f5b842", // Data Science Yellow
  },
  // {
  //   category: "Desktop App Development",
  //   items: "PyQt, PySide, Dotnet, Java Swing",
  //   icon: FaDesktop,
  //   color: "#1E1E1E", // Desktop Color
  // },
  // {
  //   category: "Mobile App Development",
  //   items: "Flutter, React Native, Android Studio",
  //   icon: FaMobileAlt,
  //   color: "#2196F3", // Mobile Color
  // },
];
