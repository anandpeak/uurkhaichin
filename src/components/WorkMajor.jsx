import React from "react";

const WorkMajor = ({ emp, setEmp, diff, setDiff }) => {
  return (
    <div className="text-center mb-20">
      <p className="text-[22px] text-[#1A1A1A] mb-6 font-semibold">
        Та алийг нь сонгох вэ?
      </p>
      <div className="flex items-center justify-center gap-6 ">
        <div
          onClick={() => {
            setDiff(false);
            setEmp({ ...emp, differentMajor: "no" });
          }}
          className={`relative flex items-center justify-center border w-[155px] h-[180px] rounded-xl px-2 cursor-pointer ${
            diff === false
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          } `}
        >
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center rounded-full absolute right-2 top-2 p-0.5 ${
              diff === false
                ? "border-2 border-[#324D72]"
                : "border-2 border-[#fff] border-opacity-80"
            }`}
          >
            {diff === false && (
              <div className="w-full h-full bg-[#324d72] rounded-full"></div>
            )}
          </div>
          <div className="text-start">
            <p className="pb-0 text-[24px]">👷‍♂️</p>
            <p className="text-lg text-[#1E293B] font-semibold">
              Одоогийн мэргэжлээрээ
            </p>
          </div>
        </div>

        <div
          onClick={() => {
            setDiff(true);
            setEmp({ ...emp, differentMajor: "" });
          }}
          className={`relative flex items-center justify-center border w-[155px] h-[180px] rounded-xl px-2 cursor-pointer ${
            diff === true
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          } `}
        >
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center rounded-full absolute right-2 top-2 p-0.5 ${
              diff === true
                ? "border-2 border-[#324D72]"
                : "border-2 border-[#fff] border-opacity-80"
            }`}
          >
            {diff === true && (
              <div className="w-full h-full bg-[#324d72] rounded-full"></div>
            )}
          </div>
          <div className="text-start">
            <p className="pb-0 text-[24px]">💵</p>
            <p className="text-lg text-[#1E293B] font-semibold">
              Өөр мэргэжлээр
            </p>
          </div>
        </div>
      </div>

      {diff === true && (
        <div className="mt-6">
          <p className="text-sm text-[#1E293B] text-start mb-2">
            Ямар мэргэжлээр ажиллахыг хүсч байна вэ?
          </p>

          <textarea
            onChange={(e) => {
              setEmp({ ...emp, differentMajor: e.target.value });
            }}
            value={emp.differentMajor}
            className="text-[#242428] text-sm w-full py-2 px-4 rounded-xl border border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 focus:border-[#324d72] h-[80px]"
            placeholder="Жиш: Гагнуур, Машин механизмын оношилгоо, г.м"
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default WorkMajor;
