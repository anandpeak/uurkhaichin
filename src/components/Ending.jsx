import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward, IoMdArrowForward } from "react-icons/io";
import "../style/animations.css";

const Ending = () => {
  const [showEndings, setShowEndings] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEndings(true);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="text-center mb-[180px]">
      <div className="flex justify-center">
        <div className="w-[145px] h-[145px] rounded-full bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 flex items-end">
          <img src="/img/ending.svg" alt="serius" />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-[#1A1A1A] text-[22px] font-semibold mb-3">
          Идэвхитэй хариулсанд баяр хүргэе!
        </p>
        <p className="text-[#1A1A1A] text-sm">
          Танд тун удахгүй мейлээр мэдээлэл очих болно оо.
        </p>
      </div>
      {showEndings && (
        <div className="mt-6 endings">
          <p className="font-bold mb-2">
            Та AI ашиглан өөрийн зургаа доор үзүүлсэн шиг зуруулах боломжтой
            шүү.
          </p>
          <div className="flex items-center justify-between gap-1">
            <div className="w-[150px] h-[200px] rounded-xl border-4 border-[#fff] border-opacity-80">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="/img/example.svg"
                alt="pfp"
              />
            </div>
            <IoIosArrowRoundForward className="text-xl font-bold" />

            <div className="w-[150px] h-[200px] rounded-xl border-4 border-[#fff] border-opacity-80">
              <img
                className="w-full h-full object-cover rounded-xl"
                src="/img/example.png"
                alt="pfp"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="w-[280px] bg-[#fff] rounded-xl text-[#1E293B] p-3 flex items-center justify-center gap-2 font-bold">
              Зурагтай болох
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ending;
