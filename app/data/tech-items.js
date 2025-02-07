import {
  FaPython,
  FaHtml5,
  FaDatabase,
  FaMobileAlt,
  FaCogs,
  FaDesktop,
} from "react-icons/fa"; // Icons for each tech category

export const techItems = [
  {
    category: "Languages",
    items: "Python, JavaScript, Java, Dart, Kotlin",
    icon: FaPython, // Store the reference, NOT JSX
    color: "#306998", // Python Color
  },
  {
    category: "Web Frontend",
    items: "React and Next.js",
    icon: FaHtml5,
    color: "#E34F26", // HTML5 Color
  },
  {
    category: "Web Backend",
    items: "Node.js, Django, FastAPI, MySQL, MongoDB",
    icon: FaDatabase,
    color: "#68A063", // Node.js Color
  },
  {
    category: "Desktop Development",
    items: "PyQt, PySide, Dotnet, Java Swing",
    icon: FaDesktop,
    color: "#1E1E1E", // Desktop Color
  },
  {
    category: "Data Science",
    items: "Pandas, Polars, NumPy, Matplotlib, Seaborn",
    icon: FaCogs,
    color: "#f5b842", // Data Science Yellow
  },
  {
    category: "Mobile Development",
    items: "Flutter, React Native, Android Studio",
    icon: FaMobileAlt,
    color: "#2196F3", // Mobile Color
  },
];
