import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import profs from "../json/profession.json";
import { FaCheck } from "react-icons/fa6";

const Profession = ({ emp, setEmp, all, setAll }) => {
  const prof = [
    { name: "Машин механизмын оператор", emoji: "👷‍♂️🚜" },
    { name: "Суурин төхөөрөмжийн оператор", emoji: "👷‍♂️🏭" },
    { name: "Инженер", emoji: "👷‍♂️📐" },
    { name: "Механик", emoji: "👷‍♂️🛠️" },
    { name: "Аюулгүй ажиллагаа", emoji: "🦺" },
    { name: "Гагнуур", emoji: "🧑‍🏭💥" },
  ];

  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] font-semibold mb-6">
        Өөрийн мэргэжлээ сонгоно уу.
      </p>
      {all ? (
        <div className="border border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 max-h-[400px] overflow-y-scroll rounded-lg">
          {profs.map((item, index) => (
            <div
              onClick={() => {
                setEmp({ ...emp, major: item });
              }}
              className={`py-3 px-4 cursor-pointer flex items-center justify-between gap-2 ${
                index !== 0 ? "border-t border-[#CECFD3]" : ""
              }`}
            >
              <p
                key={index}
                className={`text-lg text-[#1E293B] text-start ${
                  item === emp.major ? "font-bold" : ""
                }`}
              >
                {item}
              </p>
              {emp.major === item ? (
                <FaCheck className="text-xl text-[#1E293B] font-bold" />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          {" "}
          <div className="flex flex-wrap justify-between gap-2 items-center">
            {prof.map((item, index) => (
              <div
                onClick={() => {
                  setEmp({ ...emp, major: item.name });
                }}
                key={index}
                className={`w-[160px] h-[125px] flex flex-col justify-center items-center rounded-xl border ${
                  emp.major === item.name
                    ? "border-[#324d72] bg-[#F4F6FB] text-[#1E293B]"
                    : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 text-[#1A1A1A]"
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <p className=" text-sm">{item.name}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end">
            <button
              onClick={() => {
                setAll(true);
              }}
              className="flex items-center gap-2 mt-4 text-lg text-[#1E293B] font-semibold"
            >
              <span className="text-xl">✨</span>
              <span className="underline">Бүх мэргэжил харах</span>{" "}
              <FaAngleRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profession;
