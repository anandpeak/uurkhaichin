import React, { useEffect, useState } from "react";

const Background = ({ children, backgroundImage }) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div
      className="min-h-screen w-full relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `${screenHeight}px`,
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
