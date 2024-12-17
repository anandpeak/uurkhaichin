import React from "react";

const Nice = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="h-[146px] w-[146px] rounded-full bg-[#fff] bg-opacity-30 border-2 border-[#fff] border-opacity-80 flex items-end justify-center">
          <img src="/img/Nice.svg" alt="emoji" />
        </div>
      </div>
      <div>
        <p className="text-[22px] text-[#1A1A1A] font-semibold mb-4">Nice!</p>
        <p className="text-lg text-[#1A1A1A] ">
          Танд тохирсон ажлыг олоход бид туслах болно.
        </p>
      </div>
    </div>
  );
};

export default Nice;
