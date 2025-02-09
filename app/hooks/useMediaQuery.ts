import { useState, useEffect } from "react";

const useMediaQuery = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia("(max-width: 768px)");
      const handleMediaQueryChange = () => {
        setMatches(mediaQueryList.matches);
      };
      mediaQueryList.addEventListener("change", handleMediaQueryChange);
      handleMediaQueryChange();
      return () => {
        mediaQueryList.removeEventListener("change", handleMediaQueryChange);
      };
    }
  }, []);

  return matches;
};

export default useMediaQuery;
