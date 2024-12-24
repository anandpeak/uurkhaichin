import React from "react";

const Condition = ({ emp, setEmp }) => {
  return (
    <div className="text-center mb-20">
      <p className="text-[22px] text-[#1A1A1A] mb-6 font-semibold">
        Та алийг нь сонгох вэ?
      </p>
      <div className="flex items-center justify-center gap-6">
        <div
          onClick={() => setEmp({ ...emp, situation: "permanent" })}
          className={`relative flex items-center justify-center border w-[155px] h-[180px] rounded-xl px-3 cursor-pointer ${
            emp.situation === "permanent"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          } `}
        >
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center rounded-full absolute right-2 top-2 p-0.5 ${
              emp.situation === "permanent"
                ? "border-2 border-[#324D72]"
                : "border-2 border-[#fff] border-opacity-80"
            }`}
          >
            {emp.situation === "permanent" && (
              <div className="w-full h-full bg-[#324d72] rounded-full"></div>
            )}
          </div>
          <div className="text-start">
            <p className="pb-0 text-[24px]">👷‍♂️</p>
            <p className="text-lg text-[#1E293B] font-semibold">Байнгын ажил</p>
          </div>
        </div>
        <div
          onClick={() => setEmp({ ...emp, situation: "temporary" })}
          className={`relative flex items-center justify-center border w-[155px] h-[180px] rounded-xl px-3 cursor-pointer ${
            emp.situation === "temporary"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          } `}
        >
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center rounded-full absolute right-2 top-2 p-0.5 ${
              emp.situation === "temporary"
                ? "border-2 border-[#324D72]"
                : "border-2 border-[#fff] border-opacity-80"
            }`}
          >
            {emp.situation === "temporary" && (
              <div className="w-full h-full bg-[#324d72] rounded-full"></div>
            )}
          </div>
          <div className="text-start">
            <p className="pb-0 text-[24px]">💵</p>
            <p className="text-lg text-[#1E293B] font-semibold">
              Ростерын амралтаар түр ажил
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Condition;
