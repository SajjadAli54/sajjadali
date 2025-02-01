import { createRoot } from "react-dom/client";
// import { AnimatedBackground } from "animated-backgrounds";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import "animate.css";

[
  "cosmicDust",
  "neonPulse",
  "auroraBorealis", //
  "autumnLeaves",
  "dnaHelix", //
  "fallingFoodFiesta",
];
createRoot(document.getElementById("root")).render(
  <div>
    {/* <AnimatedBackground animationName={"particleNetwork"} /> */}
    <App />
  </div>
);
