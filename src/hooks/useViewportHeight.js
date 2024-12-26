import { useEffect } from "react";

const useViewportHeight = () => {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01; // Calculate 1% of the viewport height
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setViewportHeight(); // Set on initial load
    window.addEventListener("resize", setViewportHeight); // Update on resize
    window.addEventListener("orientationchange", setViewportHeight); // Update on orientation change

    return () => {
      window.removeEventListener("resize", setViewportHeight);
      window.removeEventListener("orientationchange", setViewportHeight);
    };
  }, []);
};

export default useViewportHeight;
