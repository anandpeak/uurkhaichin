import React from "react";

const Advantages = ({ emp, setEmp, setPage }) => {
  return (
    <div className="text-center pb-10">
      <div className="flex justify-center">
        <div className="w-[145px] h-[145px]">
          <img src="/img/serius.png" alt="serius" />
        </div>
      </div>
      <p className="text-lg text-[#1A1A1A] font-semibold mt-2 mb-6">
        Бид таны тухай мэдээллийг авахдаа зарим зүйлийг орхигдуулсан байж
        магадгүй{" "}
      </p>
      <textarea
        className="w-full h-[82px] border border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 py-3 px-4 rounded-xl text-sm"
        placeholder="Тийм бол энд бичнэ үү"
        onChange={(e) => {
          setEmp({ ...emp, detailSkills: e.target.value });
        }}
        value={emp.detailSkills}
      ></textarea>
    </div>
  );
};

export default Advantages;
