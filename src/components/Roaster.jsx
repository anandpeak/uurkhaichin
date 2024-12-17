import React from "react";

const Roaster = ({ emp, setEmp }) => {
  const roast = [
    { value: "7/7", label: "7/7" },
    { value: "14/14", label: "14/14" },
    { value: "28/28", label: "28/28" },
    { value: "14/7", label: "14/7" },
    { value: "other", label: "Бусад" },
  ];
  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] mb-6 font-semibold">
        Одоогийн ростер тань хэд хоног үргэлжилдэг вэ?
      </p>
      <div className="flex flex-col gap-4">
        {roast.map((option) => (
          <div
            key={option.value}
            onClick={() => setEmp({ ...emp, workingRoster: option.value })}
            className={`w-full rounded-lg py-[12px] px-[16px] border ${
              emp.workingRoster === option.value
                ? "border-[#324D72] bg-[#F4F6FB]"
                : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
            } flex items-center gap-3`}
          >
            <div
              className={`h-[20px] w-[20px] rounded-full border-2 ${
                emp.workingRoster === option.value
                  ? "border-[#324d72]"
                  : "border-[#fff] border-opacity-80 "
              } flex items-center justify-center p-0.5`}
            >
              {emp.workingRoster === option.value && (
                <div className="bg-[#324d72] w-full h-full rounded-full"></div>
              )}
            </div>
            <p className="text-[#1E293B] text-lg font-semibold">
              {option.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roaster;
