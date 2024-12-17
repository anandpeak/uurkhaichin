import React, { useState } from "react";
import "../style/Slider.css";

const Salary = ({ emp, setEmp }) => {
  const [rangeValue, setRangeValue] = useState(0);

  const options = [
    { id: 0, label: "1,5 сая-с доош", emoji: "🪙" },
    { id: 1, label: "1,5 сая-3 сая", emoji: "💵" },
    { id: 2, label: "3 сая-5 сая", emoji: "💸" },
    { id: 3, label: "5 саяас дээш", emoji: "💰" },
  ];

  const handleRangeChange = (e) => {
    const newValue = Number(e.target.value);
    setRangeValue(newValue);
    setEmp({ ...emp, salary: options[newValue].label });
  };
  const progressPercentage = (rangeValue / (options.length - 1)) * 100;

  return (
    <div className="text-center mb-10">
      <p className="text-[22px] text-[#1A1A1A] mb-6 font-semibold">
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
      <div className="flex justify-between gap-8 w-full">
        {options.map((option, index) => (
          <div
            key={option.id}
            className={`flex flex-col items-center ${
              rangeValue >= index ? "text-[#F88F00]" : "text-gray-400"
            } transition-colors duration-300`}
          >
            <span className="text-3xl">{option.emoji}</span>
            <span className="mt-1 text-sm font-medium text-center">
              {option.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salary;
