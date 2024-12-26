import React from "react";
import "../style/animations.css";

const Time = ({ emp, setEmp }) => {
  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] mb-6 font-semibold">
        Ямар байдлаар ажиллахыг хүсч байна вэ?
      </p>
      <div>
        <p className="text-lg text-[#1A1A1A] text-start mb-4">Ажиллах цаг</p>
        <div
          onClick={() => setEmp({ ...emp, workTime: "fulltime" })}
          className={`p-3 flex items-center gap-2 cursor-pointer border w-full mb-3 rounded-xl ${
            emp.workTime === "fulltime"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          }`}
        >
          <span className="text-[24px">🕒</span>
          <p className="text-[#1A1A1A] text-lg font-semibold">Бүтэн цагийн </p>
        </div>
        <div
          onClick={() => setEmp({ ...emp, workTime: "parttime" })}
          className={`p-3 flex items-center gap-2 cursor-pointer border w-full mb-3 rounded-xl ${
            emp.workTime === "parttime"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          }`}
        >
          <span className="text-[24px">🕦</span>
          <p className="text-[#1A1A1A] text-lg font-semibold">Хагас цагийн </p>
        </div>
        <div
          onClick={() => setEmp({ ...emp, workTime: "Зөвлөх үйлчилгээ" })}
          className={`p-3 flex items-center gap-2 cursor-pointer border w-full mb-3 rounded-xl ${
            emp.workTime === "Зөвлөх үйлчилгээ"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          }`}
        >
          <span className="text-[24px">💡</span>

          <p className="text-[#1A1A1A] text-lg font-semibold">
            Зөвлөх үйлчилгээ{" "}
          </p>
        </div>
      </div>
      {emp.workTime !== "" && (
        <div className="mt-3 endings">
          <p className="text-lg text-[#1A1A1A] text-start mb-4">
            Ажиллах нөхцөл
          </p>
          <div
            onClick={() => setEmp({ ...emp, workRange: "office" })}
            className={`p-3 flex items-center gap-2 cursor-pointer border w-full mb-3 rounded-xl ${
              emp.workRange === "office"
                ? "border-[#324d72] bg-[#F4F6FB]"
                : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
            }`}
          >
            <span className="text-[24px">💼</span>
            <p className="text-[#1A1A1A] text-lg font-semibold">
              Очиж ажиллах{" "}
            </p>
          </div>
          <div
            onClick={() => setEmp({ ...emp, workRange: "home" })}
            className={`p-3 flex items-center gap-2 cursor-pointer border w-full mb-3 rounded-xl ${
              emp.workRange === "home"
                ? "border-[#324d72] bg-[#F4F6FB]"
                : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
            }`}
          >
            <span className="text-[24px">👨🏻‍💻</span>
            <p className="text-[#1A1A1A] text-lg font-semibold">
              Зайнаас ажиллах{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Time;
