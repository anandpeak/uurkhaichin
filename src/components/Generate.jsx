import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

const Generate = ({ setPage }) => {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      // Restrict file size to 5MB
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setError(null);
      };
      reader.readAsDataURL(file);
    } else {
      setError(
        "File is too large or invalid. Please upload a valid image under 5MB."
      );
    }
  };

  const handleAgeChange = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 120) {
      setError("Please enter a valid age between 1 and 120.");
    } else {
      setAge(value);
      setError(null);
    }
  };

  return (
    <div className="relative">
      <p className="text-[#1A1A1A] text-[22px] font-semibold mb-4 text-center">
        Өөртэйгөө төстэй болгохын тулд дараахийг бөглөнө үү.
      </p>

      {/* Gender Selection */}
      <div className="mb-4">
        <p className="text-lg text-[#1A1A1A] mb-2">Хүйсээ сонгоно уу.</p>
        <div className="flex items-center justify-center gap-4">
          {["male", "female"].map((g) => (
            <div
              key={g}
              onClick={() => setGender(g)}
              className={`w-[40%] rounded-lg border py-2 px-3 ${
                gender === g
                  ? "border-[#324D72] bg-[#F8FAFC]"
                  : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
              }`}
            >
              <p className="text-[#1E293B] text-lg font-semibold">
                <span
                  className={`text-xl ${
                    g === "male" ? "text-[#0EA5E9]" : "text-[#F43F5E]"
                  }`}
                >
                  {g === "male" ? "♂️" : "♀️"}
                </span>{" "}
                {g === "male" ? "Эрэгтэй" : "Эмэгтэй"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Age Input */}
      <div className="mb-4">
        <p className="text-[#1A1A1A] mb-2 text-lg">Насаа оруулна уу.</p>
        <input
          className="w-full bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 text-sm px-4 py-3 rounded-lg"
          type="number"
          placeholder="Тоогоор бичнэ үү."
          value={age}
          onChange={handleAgeChange}
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <p className="text-[#1A1A1A] mb-2 text-lg">
          Өөрийн царай тод гарсан зургаа оруулна уу. /заавал биш/
        </p>
        <div
          style={{ border: "2px dashed #ABADB5" }}
          className="bg-[#F4F6FB] rounded-xl w-[335px] h-[162px] flex items-center justify-center cursor-pointer relative"
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="flex gap-1 items-center">
              <p className="text-[#575763] mt-1 ms-2">Зургаа оруулна уу.</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {gender !== null && age !== "" && imageSrc !== null && (
        <div className="fixed bottom-[14px] left-1/2 transform -translate-x-1/2 w-full flex justify-center">
          <button
            onClick={() => {
              setPage(21);
            }}
            className={`w-[90%] page bg-[#fff] text-[#1E293B] font-bold rounded-lg py-2.5 button-in flex items-center justify-center gap-2`}
          >
            Зуруулах <IoMdArrowForward />
          </button>
        </div>
      )}
    </div>
  );
};

export default Generate;
