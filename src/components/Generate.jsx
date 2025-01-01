import axios from "axios";
import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

const Generate = ({ generating, gen, setGen, setPage }) => {
  const [error, setError] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.post(
          "https://metacogserver.azurewebsites.net/v1/photo-upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setGen((prevGen) => ({
          ...prevGen,
          photoUrl: response.data,
        }));
        setError(null);
      } catch (error) {
        console.error("Image upload error:", error);
        setError("Image upload failed. Please try again.");
      }
    } else {
      setError(
        "File is too large or invalid. Please upload a valid image under 5MB."
      );
    }
  };

  const handleAgeChange = (event) => {
    const value = event.target.value;
    setGen((prevGen) => ({ ...prevGen, age: Number(value) }));
    setError(null);
  };

  const handleGenderSelect = (gender) => {
    setGen((prevGen) => ({ ...prevGen, gender }));
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
              onClick={() => handleGenderSelect(g)}
              className={`w-[40%] rounded-lg border py-2 px-3 flex items-center text-center ${
                gen.gender === g
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
          value={gen.age || ""}
          onChange={handleAgeChange}
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <p className="text-[#1A1A1A] mb-2 text-lg">
          Өөрийн царай тод гарсан зургаа оруулна уу.
        </p>
        <div className="flex justify-center">
          <div
            style={{ border: "2px dashed #ABADB5" }}
            className="bg-[#F4F6FB] rounded-xl w-[335px] h-[162px] flex items-center justify-center cursor-pointer relative"
          >
            {gen.photoUrl ? (
              <img
                src={gen.photoUrl}
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
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {gen.gender && gen.age && gen.photoUrl && (
        <div className="fixed bottom-[14px] left-1/2 transform -translate-x-1/2 w-full flex justify-center">
          <button
            onClick={() => {
              generating();
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
