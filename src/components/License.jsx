import React from "react";

const License = ({ emp, setEmp }) => {
  const license = [
    "A",
    "B",
    "BE",
    "C1",
    "C1E",
    "C",
    "CE",
    "D1",
    "D1E",
    "D",
    "DE",
    "M",
  ];

  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] mb-6 font-semibold">
        Жолооны үнэмлэхний ангилалаа сонгоно уу.
      </p>

      {/* Selected Licenses Display */}
      <div className="text-[#1A1A1A] text-lg font-semibold w-full rounded-xl py-3 px-4 border border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 text-start flex items-center gap-2 flex-wrap">
        {emp.driving.license.length > 0 ? (
          emp.driving.license.map((item, index) => (
            <p key={index}>
              {item}
              {index < emp.driving.license.length - 1 && ","}
            </p>
          ))
        ) : (
          <p>Сонголт хийгдээгүй байна</p>
        )}
      </div>

      {/* License List */}
      <div className="max-h-[270px] overflow-y-scroll border border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 rounded-xl mt-4">
        {license.map((item) => (
          <div
            key={item}
            className={`w-full py-3 px-4 text-start flex items-center gap-2 border-b border-[#fff] border-opacity-80 cursor-pointer`}
            onClick={() => {
              setEmp((prev) => {
                const isSelected = prev.driving.license.includes(item);
                return {
                  ...prev,
                  driving: {
                    ...prev.driving,
                    license: isSelected
                      ? prev.driving.license.filter((l) => l !== item)
                      : [...prev.driving.license, item],
                  },
                };
              });
            }}
          >
            <div
              className={`w-[22px] h-[22px] rounded-md flex items-center justify-center ${
                emp.driving.license.includes(item)
                  ? "bg-[#324D72]"
                  : "border-2 border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
              }`}
            >
              {emp.driving.license.includes(item) && (
                <img src="/icon/check.svg" alt="check" />
              )}
            </div>
            <p className="text-[#1E293B] font-semibold text-lg">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default License;
