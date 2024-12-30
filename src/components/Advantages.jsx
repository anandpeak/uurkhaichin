import React from "react";

const Advantages = ({ emp, setEmp, setPage }) => {
  const slide = [
    {
      topic: "Хувийн зан төлөвийн давуу талаа бичнэ үү.",
      value: emp.behaviorAdvantage,
      placeholder:
        "Жиш: Үнэнч шударга, хөдөлмөрч, нөхөрсөг, хорт зуршилгүй, нийтэч гэх мэт... ",
      key: "behaviorAdvantage",
    },
    {
      topic: "Ажил карьерын давуу талаа бичнэ үү.",
      value: emp.expAdvantage,
      placeholder:
        "Жиш: Тоног төхөөрөмжтэй харьцах чадвартай, аюулгүй ажиллагаахы сургалтад хамрагдаж байсан, гагнуурын 2-р зэрэгтэй гэх мэт...",
      key: "expAdvantage",
    },
    {
      topic: "Урлаг спортын давуу талаа бичнэ үү.",
      value: emp.sportAdvantage,
      placeholder: "Жиш: Сагс тоглодог, волейбол 2-р зэрэгтэй...",
      key: "sportAdvantage",
    },
  ];

  const handleInputChange = (e, key) => {
    const updatedValue = e.target.value;

    if (updatedValue.length <= 200) {
      setEmp((prevEmp) => ({
        ...prevEmp,
        [key]: updatedValue,
      }));
    }
  };

  return (
    <div className="text-center mb-4 pt-20">
      <div className="flex items-center gap-4 mb-6">
        <div className="border border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 rounded-full flex items-end justify-center h-[54px] w-[54px]">
          <img src="/img/serius.svg" alt="like" />
        </div>
        <p className="text-[#1A1A1A] text-sm font-semibold w-[250px] text-start">
          Дараах хэсэгт өөрийн тухай хуваалцсанаар ажил олоход улам давуу талтай
          дөхөм болох юм.
        </p>
      </div>
      <div>
        {slide.map((item) => (
          <div className="mb-4 text-start">
            <p>{item.topic}</p>
            <textarea
              className={`border border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 text-[#1E293B] rounded-xl text-sm h-[90px] w-full px-4 py-2 focus:border-[#324d72] `}
              placeholder={item.placeholder}
              value={item.value}
              onChange={(e) => handleInputChange(e, item.key)}
            ></textarea>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center">
        <button
          onClick={() => {
            setPage(18);
          }}
          className="py-3 px-3 text-center text-[#1E293B] border border-[#fff] rounded-lg w-[330px] mb-2"
        >
          Алгасах
        </button>
        <button
          onClick={() => {
            setPage(18);
          }}
          className={`py-3 px-3 font-bold text-center text-[#1E293B] ${
            emp.behaviorAdvantage !== "" ||
            emp.expAdvantage !== "" ||
            emp.sportAdvantage !== ""
              ? " text-[#1E293B] bg-[#fff]"
              : "bg-[#CECFD3] text-[#fff] cursor-not-allowed"
          } rounded-lg w-[330px]`}
          disabled={
            emp.behaviorAdvantage === "" &&
            emp.expAdvantage === "" &&
            emp.sportAdvantage === ""
          }
        >
          Үргэлжлүүлэх
        </button>
      </div>
    </div>
  );
};

export default Advantages;
