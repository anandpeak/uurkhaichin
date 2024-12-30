import React from "react";

const School = ({ emp, setEmp }) => {
  return (
    <div className={`text-center`}>
      <p className="text-[22px] text-[#1A1A1A] font-semibold mb-4">
        Өөрийн сурсан сургууль / сургалт бичнэ үү.
      </p>
      <div className="mb-6">
        <textarea
          className="w-full py-3 px-4 rounded-lg bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 text-sm"
          onChange={(e) => {
            setEmp({ ...emp, school: e.target.value });
          }}
          value={emp.school}
          type="text"
        />
      </div>
    </div>
  );
};

export default School;
