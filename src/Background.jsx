import React, { useEffect, useState } from "react";

const Background = ({ children, backgroundImage }) => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateViewportHeight = () => {
      if (window.visualViewport) {
        setViewportHeight(window.visualViewport.height);
      } else {
        setViewportHeight(window.innerHeight);
      }
    };

    // Update the height on load and when viewport changes
    updateViewportHeight();
    window.visualViewport?.addEventListener("resize", updateViewportHeight);
    window.addEventListener("resize", updateViewportHeight);

    return () => {
      window.visualViewport?.removeEventListener(
        "resize",
        updateViewportHeight
      );
      window.removeEventListener("resize", updateViewportHeight);
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `${viewportHeight}px`,
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
