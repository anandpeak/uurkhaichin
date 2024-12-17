import React from "react";

const Ending = () => {
  return (
    <div className="text-center mb-[180px]">
      <div className="flex justify-center">
        <div className="w-[145px] h-[145px] rounded-full bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 flex items-end">
          <img className="ms-6" src="/img/ending.svg" alt="serius" />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-[#1A1A1A] text-[22px]  font-semibold mb-6">
          Танд тун удахгүй мейлээр ажлын санал очих болно.
        </p>
        <p className="text-[#1A1A1A] text-sm">
          Идэвхитэй хариулсанд баярлалаа!
        </p>
      </div>
    </div>
  );
};

export default Ending;
