import React, { useEffect, useState } from "react";

const SalaryType = ({ emp, setEmp }) => {
  const [rangeValue, setRangeValue] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setEmp({ ...emp, salary: "100,000₮-150,000₮" });
    console.log("aaa");
  }, []);

  const options = [
    { id: 0, label: "100,000₮ - 150,000₮", emoji: "🪙" },
    { id: 1, label: "150,000₮ - 200,000₮", emoji: "💵" },
    { id: 2, label: "200,000₮ - 250,000₮", emoji: "💸" },
    { id: 3, label: "+250,000₮ ", emoji: "💰" },
  ];

  const handleRangeChange = (e) => {
    const newValue = Number(e.target.value);
    setRangeValue(newValue);
    setEmp({ ...emp, salary: options[newValue].label });
  };
  const progressPercentage = (rangeValue / (options.length - 1)) * 100;
  return (
    <div className="text-center">
      <p className="font-semibold text-[#1A1A1A] text-[22px] mb-4">
        Та цалингаа ямар байдлаар авахыг хүсч байна вэ?
      </p>
      <div className="flex gap-4">
        <div
          onClick={() => setEmp({ ...emp, salaryType: "day" })}
          className={`relative flex items-center justify-center border w-[48%] ${
            emp.salaryType === "day" ? "h-[70px]" : "h-[138px]"
          } rounded-xl px-3 cursor-pointer ${
            emp.salaryType === "day"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          } `}
        >
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center rounded-full absolute ${
              emp.salaryType === "day" ? "left-2" : "right-2"
            } top-2 p-0.5 ${
              emp.salaryType === "day"
                ? "border-2 border-[#324D72]"
                : "border-2 border-[#fff] border-opacity-80"
            }`}
          >
            {emp.salaryType === "day" && (
              <div className="w-full h-full bg-[#324d72] rounded-full"></div>
            )}
          </div>
          <div
            className={`text-start ${emp.salaryType === "day" ? "ms-6" : ""}`}
          >
            {emp.salaryType !== "day" && <p className="pb-0 text-[24px]">🕰️</p>}
            <p
              className={`${
                emp.salaryType === "day" ? "text-base" : "text-lg"
              } text-[#1E293B] font-semibold`}
            >
              Өдрийн үнэлгээ
            </p>
          </div>
        </div>
        <div
          onClick={() => setEmp({ ...emp, salaryType: "performance" })}
          className={`relative flex items-center justify-center border w-[48%] ${
            emp.salaryType === "day" ? "h-[70px]" : "h-[138px]"
          } rounded-xl px-3 cursor-pointer ${
            emp.salaryType === "performance"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          } `}
        >
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center rounded-full absolute ${
              emp.salaryType === "day" ? "left-2" : "right-2"
            } top-2 p-0.5 ${
              emp.salaryType === "performance"
                ? "border-2 border-[#324D72]"
                : "border-2 border-[#fff] border-opacity-80"
            }`}
          >
            {emp.salaryType === "performance" && (
              <div className="w-full h-full bg-[#324d72] rounded-full"></div>
            )}
          </div>
          <div
            className={`text-start ${emp.salaryType === "day" ? "ms-6" : ""}`}
          >
            {emp.salaryType !== "day" && <p className="pb-0 text-[24px]">➗</p>}
            <p
              className={`${
                emp.salaryType === "day" ? "text-base" : "text-lg"
              } text-[#1E293B] font-semibold`}
            >
              Гүйцэтгэлээр
            </p>
          </div>
        </div>
      </div>
      {emp.salaryType === "day" && (
        <div className="mt-6">
          <p className="font-semibold text-[#1A1A1A] text-[22px] mb-2">
            Цалингийн хүлээлтээ оруулна уу.
          </p>
          <div className="flex flex-col justify-center items-center space-y-4 p-4 w-full">
            <input
              type="range"
              min="0"
              max={options.length - 1}
              step="1"
              value={rangeValue}
              onChange={handleRangeChange}
              className="w-full h-[6px] rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right,#F88F00 ${progressPercentage}%, rgba(248, 143, 0, 0.2) ${progressPercentage}%)`,
              }}
            />
          </div>
          <div className="flex justify-between gap-4 w-full">
            {options.map((option, index) => (
              <div
                key={option.id}
                className={`flex flex-col items-center ${
                  rangeValue >= index ? "text-[#F88F00]" : "text-gray-400"
                } transition-colors duration-300`}
              >
                <span className="text-3xl">{option.emoji}</span>
                <span className="mt-1 text-xs font-medium text-center ">
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaryType;
