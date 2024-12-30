import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import companys from "../json/company.json";

const Company = ({ emp, setEmp }) => {
  const [query, setQuery] = useState("");

  const selectedCompanies = emp?.experience?.company || [];

  const filteredCompanies = companys
    .filter((company) => company.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      const lowerQuery = query.toLowerCase();
      const aIndex = a.toLowerCase().indexOf(lowerQuery);
      const bIndex = b.toLowerCase().indexOf(lowerQuery);

      if (aIndex === 0 && bIndex !== 0) return -1;
      if (bIndex === 0 && aIndex !== 0) return 1;

      return aIndex - bIndex;
    });

  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] font-semibold mb-6">
        Ажиллаж байсан байгууллагуудаа сонгоно уу.
      </p>
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
      {query !== "" ? (
        <div className="bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 rounded-xl px-4 max-h-[220px] overflow-y-scroll">
          {filteredCompanies.length > 0 ? (
            <ul>
              {filteredCompanies.map((company, index) => {
                const startIndex = company
                  .toLowerCase()
                  .indexOf(query.toLowerCase());
                const endIndex = startIndex + query.length;

                return (
                  <li
                    key={index}
                    className={`text-[#1E293B] text-opacity-50 text-start cursor-pointer hover:underline py-2 ${
                      index === 0 ? "" : " border-t border-[#CECFD3]"
                    }`}
                    onClick={() => {
                      if (!selectedCompanies.includes(company)) {
                        setEmp((prev) => ({
                          ...prev,
                          experience: {
                            ...prev.experience,
                            company: [...selectedCompanies, company],
                          },
                        }));
                      }
                      setQuery("");
                    }}
                  >
                    {startIndex !== -1 ? (
                      <>
                        {company.slice(0, startIndex)}
                        <span className="text-[#1E293B] font-semibold">
                          {company.slice(startIndex, endIndex)}
                        </span>
                        {company.slice(endIndex)}
                      </>
                    ) : (
                      company
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-[#1A1A1A] text-opacity-60 py-4">
              Хайлтанд тохирох байгууллага олдсонгүй.
            </p>
          )}
        </div>
      ) : (
        <div className="bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 rounded-xl py-5 px-4">
          <div>
            <p className="text-[#1A1A1A] text-start">
              Таны сонгосон байгууллагууд:
            </p>
            <div className="h-[200px] overflow-y-scroll">
              {selectedCompanies.length === 0 ? (
                <div className="flex items-center justify-center w-full h-full">
                  <div>
                    <div className="flex justify-center mb-4">
                      <div className="flex items-center justify-center border border-[#1A1A1A] border-opacity-40 rounded-full p-1">
                        <IoCloseSharp className="w-[46px] h-[46px] text-[#1A1A1A] opacity-40" />
                      </div>
                    </div>
                    <p className="text-[#1A1A1A] text-opacity-30">
                      Одоогоор сонгосон байгууллага байхгүй байна.
                    </p>
                  </div>
                </div>
              ) : (
                selectedCompanies.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center py-2 px-2.5 justify-between text-[#1A1A1A] mb-2 bg-[#fff] rounded-lg"
                  >
                    <span>{company}</span>
                    <button
                      onClick={() =>
                        setEmp((prev) => ({
                          ...prev,
                          experience: {
                            ...prev.experience,
                            company: selectedCompanies.filter(
                              (item) => item !== company
                            ),
                          },
                        }))
                      }
                    >
                      <IoCloseSharp />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;
