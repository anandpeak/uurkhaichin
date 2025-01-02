import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import profs from "../json/profession.json";
import { FaCheck } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Profession = ({ emp, setEmp, all, setAll }) => {
  const [query, setQuery] = useState("");

  const prof = [
    { name: "Машин механизмын оператор", emoji: "🚜" },
    { name: "Суурин төхөөрөмжийн оператор", emoji: "🏭" },
    { name: "Инженер", emoji: "👷‍♂️📐" },
    { name: "Механик", emoji: "🛠️" },
    { name: "Аюулгүй ажиллагаа", emoji: "🦺" },
    { name: "Гагнуур", emoji: "🧑‍🏭💥" },
  ];

  const filteredProfs =
    query !== ""
      ? profs.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
      : profs;

  const highlightText = (text, query) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="font-bold text-[#1A1A1A]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="text-center w-full">
      <p className="text-[22px] text-[#1A1A1A] font-semibold mb-6">
        Ямар мэргэжлээр ажил хайж байгаагаа сонгоно уу.
      </p>
      {all ? (
        <div>
          <div className="relative flex items-center mb-2">
            <FaMagnifyingGlass className="absolute left-3 text-[#1E293B]" />
            <input
              className="w-full text-[#1E293B] bg-[#FFF] bg-opacity-30 border border-[#fff] border-opacity-80 rounded-lg text-opacity-60 py-3 pl-10 pr-4"
              placeholder="Эндээс хайна уу."
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="border border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 max-h-[300px] overflow-y-scroll rounded-lg w-full">
            {filteredProfs.length > 0 ? (
              filteredProfs.map((item, index) => (
                <div
                  onClick={() => {
                    setEmp({ ...emp, major: item });
                  }}
                  className={`py-3 px-4 cursor-pointer flex items-center justify-between gap-2 w-full ${
                    index !== 0 ? "border-t border-[#CECFD3]" : ""
                  }`}
                >
                  <p
                    key={index}
                    className={`text-lg text-[#1E293B] text-start ${
                      item === emp.major ? "font-bold" : ""
                    }`}
                  >
                    {highlightText(item, query)}{" "}
                  </p>
                  {emp.major === item ? (
                    <FaCheck className="text-xl text-[#1E293B] font-bold" />
                  ) : (
                    ""
                  )}
                </div>
              ))
            ) : (
              <div
                onClick={() => {
                  setEmp({ ...emp, major: query });
                }}
                className="py-3 px-4 cursor-pointer flex items-center justify-between gap-2 w-full"
              >
                <p className="text-lg text-[#1E293B] text-start font-bold">
                  {query}
                </p>
                {emp.major === query && (
                  <FaCheck className="text-xl text-[#1E293B] font-bold" />
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div className="flex flex-wrap  gap-3 items-center">
            {prof.map((item, index) => (
              <div
                onClick={() => {
                  setEmp({ ...emp, major: item.name });
                }}
                key={index}
                className={`w-[48%] h-[125px] flex flex-col justify-center items-center rounded-xl border ${
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
