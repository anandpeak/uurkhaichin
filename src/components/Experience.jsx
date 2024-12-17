import React from "react";

const Experience = ({ emp, setEmp }) => {
  const experienceOptions = [
    { value: "0", label: "Туршлагагүй" },
    { value: "1-5", label: "1-5 жил" },
    { value: "5-8", label: "5-8 жил" },
    { value: "8-10", label: "8-10 жил" },
    { value: "10-15", label: "10-15 жил" },
    { value: "15+", label: "15-с дээш жил" },
  ];

  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] font-semibold mb-6">
        Та хэдэн жилийн ажлын туршлагатай вэ?
      </p>
      <div className="flex max-h-[320px] overflow-y-scroll flex-col gap-4">
        {experienceOptions.map((option) => (
          <div
            key={option.value}
            onClick={() =>
              setEmp({ ...emp, experience: { year: option.value } })
            }
            className={`w-full rounded-lg py-[12px] px-[16px] border ${
              emp.experience.year === option.value
                ? "border-[#324D72] bg-[#F4F6FB]"
                : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
            } flex items-center gap-3`}
          >
            <div
              className={`h-[20px] w-[20px] rounded-full border-2 ${
                emp.experience.year === option.value
                  ? "border-[#324d72]"
                  : "border-[#fff] border-opacity-80 "
              } flex items-center justify-center p-0.5`}
            >
              {emp.experience.year === option.value && (
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

export default Experience;
