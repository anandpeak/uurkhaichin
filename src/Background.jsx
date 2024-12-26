import React from "react";

const Background = ({ children, backgroundImage }) => {
  return (
    <div
      className="min-h-[calc(var(--vh,1vh)*100)] w-full relative bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
