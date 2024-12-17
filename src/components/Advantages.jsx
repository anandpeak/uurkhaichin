import React, { useState, useRef } from "react";

const Advantages = ({ emp, setEmp }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const slide = [
    {
      topic: "Хувийн зан төлөвийн давуу талаа бичнэ үү.",
      value: emp.behaviorAdvantage,
      placeholder:
        "Жишээ: Үнэнч шударга, хөдөлмөрч, нөхөрсөг, хорт зуршилгүй, нийтэч гэх мэт... ",
      key: "behaviorAdvantage",
    },
    {
      topic: "Ажил карьерын давуу талаа бичнэ үү.",
      value: emp.expAdvantage,
      placeholder:
        "Жишээ: Тоног төхөөрөмжтэй харьцах чадвартай, аюулгүй ажиллагаахы сургалтад хамрагдаж байсан, гагнуурын 2-р зэрэгтэй гэх мэт...",
      key: "expAdvantage",
    },
    {
      topic: "Урлаг спортын давуу талаа бичнэ үү.",
      value: emp.sportAdvantage,
      placeholder: "Жишээ: Сагс тоглодог, волейбол 2-р зэрэгтэй...",
      key: "sportAdvantage",
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
    setScrollPosition(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientX - startPosition;
    carouselRef.current.scrollLeft = scrollPosition - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPosition(e.touches[0].clientX);
    setScrollPosition(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const distance = e.touches[0].clientX - startPosition;
    carouselRef.current.scrollLeft = scrollPosition - distance;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Handle the update of each advantage value
  const handleInputChange = (e, key) => {
    const updatedValue = e.target.value;

    // Ensure the text does not exceed 200 characters
    if (updatedValue.length <= 200) {
      setEmp((prevEmp) => ({
        ...prevEmp,
        [key]: updatedValue,
      }));
    }
  };

  return (
    <div className="text-center">
      <div className="flex items-center gap-4 mb-6">
        <div className="border border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 rounded-full flex items-end justify-center h-[54px] w-[54px]">
          <img className="ms-4" src="/img/like.svg" alt="like" />
        </div>
        <p className="text-[#1A1A1A] text-sm font-semibold w-[250px] text-start">
          Дараах хэсэгт өөрийн тухай хуваалцсанаар ажил олоход улам давуу талтай
          дөхөм болох юм.
        </p>
      </div>

      <div
        ref={carouselRef}
        className="relative w-full overflow-hidden mb-20"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex items-center transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * 77}%)`,
          }}
        >
          {slide.map((item, index) => (
            <div
              onClick={() => {
                if (currentIndex !== index) {
                  setCurrentIndex(index);
                }
              }}
              key={index}
              className={`py-4 px-2 bg-[#fff] rounded-xl text-start w-[80%] flex-shrink-0 mx-2 ${
                currentIndex === index ? "h-[360px]" : "h-[280px]"
              }`} // Add dynamic height to the container
            >
              <p className="text-sm font-semibold">{item.topic}</p>
              <textarea
                className={`${
                  currentIndex === index ? "h-[280px]" : "h-[200px]"
                } border-none p-0 text-[#1E293B] text-sm w-full`}
                placeholder={item.placeholder}
                value={item.value}
                onChange={(e) => handleInputChange(e, item.key)}
              ></textarea>
              <p className="text-[#000] text-opacity-60 text-sm">
                {item.value.length}/200
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
