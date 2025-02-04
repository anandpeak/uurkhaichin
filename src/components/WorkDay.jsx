import React from "react";

const WorkDay = ({ emp, setEmp }) => {
  const roast = [
    { value: "1-5", label: "1-5 хоног" },
    { value: "5-7", label: "5-7 хоног" },
    { value: "7-10", label: "7-10 хоног" },
    { value: "10-14", label: "10-14 хоног" },
  ];
  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] mb-6 font-semibold">
        Амралтаараа хэд хоног ажиллахаар төлөвлөж байна вэ?
      </p>
      <div className="flex flex-col gap-4">
        {roast.map((option) => (
          <div
            key={option.value}
            onClick={() => setEmp({ ...emp, workingDay: option.value })}
            className={`w-full rounded-lg py-[12px] px-[16px] border ${
              emp.workingDay === option.value
                ? "border-[#324D72] bg-[#F4F6FB]"
                : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
            } flex items-center gap-3`}
          >
            <div
              className={`h-[20px] w-[20px] rounded-full border-2 ${
                emp.workingDay === option.value
                  ? "border-[#324d72]"
                  : "border-[#fff] border-opacity-80 "
              } flex items-center justify-center p-0.5`}
            >
              {emp.workingDay === option.value && (
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

export default WorkDay;
