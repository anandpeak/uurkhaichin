import React, { useState } from "react";
import { FaCheck, FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import skills from "../json/skill.json";
import techSkills from "../json/techSkill.json";

const Skills = ({ emp, setEmp, setPage }) => {
  const [query, setQuery] = useState("");
  const [techQuery, setTechQuery] = useState("");
  const [focusedOnce, setFocusedOnce] = useState(false);
  const [focus, setFocus] = useState(false);
  const [techFocus, setTechFocus] = useState(false);

  const filterSkills =
    query !== ""
      ? skills
          .filter((skill) => skill.toLowerCase().includes(query.toLowerCase()))
          .sort((a, b) => {
            const lowerQuery = query.toLowerCase();
            const aIndex = a.toLowerCase().indexOf(lowerQuery);
            const bIndex = b.toLowerCase().indexOf(lowerQuery);

            if (aIndex === 0 && bIndex !== 0) return -1;
            if (bIndex === 0 && aIndex !== 0) return 1;

            return aIndex - bIndex;
          })
      : skills;

  const filterTech =
    techQuery !== ""
      ? techSkills
          .filter((company) =>
            company.toLowerCase().includes(techQuery.toLowerCase())
          )
          .sort((a, b) => {
            const lowerQuery = techQuery.toLowerCase();
            const aIndex = a.toLowerCase().indexOf(lowerQuery);
            const bIndex = b.toLowerCase().indexOf(lowerQuery);

            if (aIndex === 0 && bIndex !== 0) return -1;
            if (bIndex === 0 && aIndex !== 0) return 1;

            return aIndex - bIndex;
          })
      : techSkills;

  const removeSkill = (skill, type) => {
    if (type === "soft") {
      setEmp({
        ...emp,
        softSkills: emp.softSkills.filter((item) => item !== skill),
      });
    } else if (type === "tech") {
      setEmp({
        ...emp,
        techSkills: emp.techSkills.filter((item) => item !== skill),
      });
    }
  };

  const handleClick = (skill, type) => {
    const currentSkills =
      type === "tech" ? emp.techSkills || [] : emp.softSkills || [];
    if (!currentSkills.includes(skill)) {
      setEmp({
        ...emp,
        [type === "tech" ? "techSkills" : "softSkills"]: [
          ...currentSkills,
          skill,
        ],
      });
    }
  };

  return (
    <div className="relative">
      {!focusedOnce && (
        <div className="flex items-center gap-2 mb-6">
          <div className="border w-[50px] h-[50px]  border-[#fff] rounded-full">
            <img src="/img/serius.png" alt="png" />
          </div>
          <p className="text-[#1A1A1A] font-bold text-sm w-[80%]">
            Дараах хэсэгт өөрийн тухай хуваалцсанаар ажил олоход улам давуу
            талтай дөхөм болох юм.
          </p>
        </div>
      )}

      <div className="relative z-20 pb-40 flex flex-col items-center justify-center">
        <div
          className={`relative w-[300px] mt-6 ${
            focus ? "hidden" : "z-30 relative"
          }`}
        >
          <p className="text-sm mb-2">
            Ашигладаг багаж хэрэгсэл, компьютерын программууд
          </p>
          <div className="mb-6">
            <div className="relative flex items-center">
              <div className="absolute left-3 text-[#1E293B]">
                <FaMagnifyingGlass />
              </div>
              <input
                className="w-full rounded-lg py-3 pe-4 ps-8 bg-[#fff] bg-opacity-30 border border-[#324d72]"
                placeholder="Эндээс хайна уу."
                onFocus={() => {
                  setFocusedOnce(true);
                  setTechFocus(true);
                }}
                onBlur={() => setTimeout(() => setTechFocus(false), 200)}
                type="text"
                value={techQuery}
                onChange={(e) => setTechQuery(e.target.value)}
              />
            </div>
            {techFocus && (
              <div className="w-[300px] max-h-[200px] mt-2 overflow-y-scroll rounded-lg bg-[#EDF0E5] border border-[#424242]">
                {filterTech.map((item, index) => {
                  const startIndex = item
                    .toLowerCase()
                    .indexOf(techQuery.toLowerCase());
                  const endIndex = startIndex + techQuery.length;

                  return (
                    <div
                      className={`py-3 px-4  flex items-center justify-between gap-2 ${
                        index === 0 ? "" : "border-t border-[#cfcfcf] "
                      } relative`}
                      key={index}
                      onClick={() => handleClick(item, "tech")}
                    >
                      <div>
                        {startIndex !== -1 ? (
                          <>
                            <span className="text-[#1A1A1A] opacity-70">
                              {item.slice(0, startIndex)}
                            </span>
                            <span className="text-[#1A1A1A] font-bold">
                              {item.slice(startIndex, endIndex)}
                            </span>
                            <span className="text-[#1A1A1A] opacity-70">
                              {item.slice(endIndex)}
                            </span>
                          </>
                        ) : (
                          <span className="text-[#1A1A1A] opacity-70">
                            {item}
                          </span>
                        )}
                      </div>
                      <div>{emp.techSkills.includes(item) && <FaCheck />}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div
          className={`relative w-[300px] ${
            techFocus ? "hidden" : "z-30 relative"
          }`}
        >
          <p className="text-sm mb-2">Хувь хүний ур чадвар ба гадаад хэл</p>
          <div className="relative flex items-center">
            <div className="absolute left-3 text-[#1E293B]">
              <FaMagnifyingGlass />
            </div>
            <input
              className="w-full rounded-lg py-3 pe-4 ps-8 bg-[#fff] bg-opacity-30 border border-[#324d72]"
              placeholder="Эндээс хайна уу."
              onFocus={() => {
                setFocusedOnce(true);
                setFocus(true);
              }}
              onBlur={() => setTimeout(() => setFocus(false), 200)}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {focus && (
            <div className="w-[300px] max-h-[200px] mt-2 overflow-y-scroll rounded-lg bg-[#EDF0E5] border border-[#424242]">
              {filterSkills.map((item, index) => {
                const startIndex = item
                  .toLowerCase()
                  .indexOf(query.toLowerCase());
                const endIndex = startIndex + query.length;

                return (
                  <div
                    className={`py-3 px-4 flex items-center justify-between gap-2 ${
                      index === 0 ? "" : "border-t border-[#cfcfcf]"
                    } relative`}
                    key={index}
                    onClick={() => handleClick(item, "soft")}
                  >
                    <div>
                      {startIndex !== -1 ? (
                        <>
                          <span className="text-[#1A1A1A] opacity-70">
                            {item.slice(0, startIndex)}
                          </span>
                          <span className="text-[#1A1A1A] font-bold">
                            {item.slice(startIndex, endIndex)}
                          </span>
                          <span className="text-[#1A1A1A] opacity-70">
                            {item.slice(endIndex)}
                          </span>
                        </>
                      ) : (
                        <span className="text-[#1A1A1A] opacity-70">
                          {item}
                        </span>
                      )}
                    </div>
                    <div>{emp.softSkills.includes(item) && <FaCheck />}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#fff] pt-3 px-3 pb-8 fixed bottom-0 left-0 right-0">
        <div>
          <div className="flex justify-center mb-3">
            <div className="w-[94px] rounded-sm h-[4px] bg-[#EDEDED]" />
          </div>
          {emp.softSkills?.length !== 0 || emp.techSkills?.length !== 0 ? (
            <div className="flex flex-wrap gap-3 mb-3 max-h-[100px] overflow-y-scroll">
              {emp.softSkills?.map((item, index) => (
                <div
                  key={index}
                  className="py-2 px-1 flex items-center gap-2 bg-[#1A1A1A] bg-opacity-90 rounded-md"
                >
                  <p className="text-[#EDEDED] text-sm">{item}</p>
                  <button
                    className="text-[#EDEDED]"
                    onClick={() => removeSkill(item, "soft")}
                  >
                    <IoCloseSharp />
                  </button>
                </div>
              ))}
              {emp.techSkills?.map((item, index) => (
                <div
                  key={index}
                  className="py-2 px-1 flex items-center gap-2 bg-[#1A1A1A] bg-opacity-90 rounded-md"
                >
                  <p className="text-[#EDEDED] text-sm">{item}</p>
                  <button
                    className="text-[#EDEDED]"
                    onClick={() => removeSkill(item, "tech")}
                  >
                    <IoCloseSharp />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#1A1A1A"
                    strokeOpacity="0.4"
                  />
                  <path
                    d="M38.5 13.32L35.68 10.5L24.5 21.68L13.32 10.5L10.5 13.32L21.68 24.5L10.5 35.68L13.32 38.5L24.5 27.32L35.68 38.5L38.5 35.68L27.32 24.5L38.5 13.32Z"
                    fill="#1A1A1A"
                    fillOpacity="0.4"
                  />
                </svg>
              </div>
              <p className="text-center text-sm mb-2 text-[#1A1A1A] text-opacity-40">
                Одоогоор сонгосон чадвар байхгүй байна.
              </p>
            </div>
          )}

          <div className="flex items-center justify-center">
            <button
              onClick={() => setPage(17)}
              className={`w-[90%] page bg-[#fff] text-[#1E293B] font-bold rounded-lg py-2.5 button-in border border-[#CECFCE]`}
            >
              {emp.softSkills?.length !== 0 || emp.techSkills?.length !== 0
                ? "Үргэлжлүүлэх"
                : "Алгасах"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
