import React, { useState } from "react";
import axios from "axios";

const Certificate = ({ emp, setEmp }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    const maxSize = 25 * 1024 * 1024;

    const newImages = files.filter((file) => {
      if (file.size > maxSize) {
        setError(
          "Файлын хэмжээ 25MB-с их байна. Зөвшөөрөгдсөн хэмжээнд багтаана уу."
        );
        return false;
      }
      return true;
    });

    if (newImages.length > 0) {
      setError("");
      setLoading(true);

      const uploadedImages = [];

      for (let i = 0; i < newImages.length; i++) {
        const file = newImages[i];
        console.log(file);
        const formData = new FormData();
        formData.append("file", file);
        console.log("formdata", formData);
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
          console.log("formdata", formData);
          const imageUrl = response.data.url;
          uploadedImages.push(imageUrl);

          setEmp((prevEmp) => ({
            ...prevEmp,
            certificateImgs: [...(prevEmp.certificateImgs || []), imageUrl],
          }));

          setImages((prevImages) => [...prevImages, imageUrl]);
        } catch (err) {
          setError("Тамгалт явуулахад алдаа гарлаа.");
          console.error("Error uploading image:", err);
        }
      }

      setLoading(false);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setEmp({
      ...emp,
      certificateImgs: updatedImages,
    });
  };

  return (
    <div className={`text-center ${images.length > 2 ? "py-20" : ""}`}>
      <p className="text-[22px] text-[#1A1A1A] font-semibold mb-6">
        Танд мэргэжлийн сертификат байгаа уу?
      </p>
      <div className="flex items-center justify-between gap-2">
        <div
          onClick={() => {
            setEmp({ ...emp, certificate: "yes" });
          }}
          className={`py-3 px-4 flex items-center gap-2 border rounded-lg w-[45%] ${
            emp.certificate === "yes"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          }`}
        >
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center p-0.5 border-2 rounded-full ${
              emp.certificate === "yes"
                ? "border-[#324d72]"
                : "border-[#fff] border-opacity-80"
            }`}
          >
            {emp.certificate === "yes" && (
              <div className="w-full h-full bg-[#324d72] rounded-full"></div>
            )}
          </div>
          <p className="text-lg text-[#1E293B] font-semibold">Байгаа</p>
        </div>{" "}
        <div
          onClick={() => {
            setEmp({ ...emp, certificate: "no" });
          }}
          className={`py-3 px-4 flex items-center gap-2 border rounded-lg w-[45%] ${
            emp.certificate === "no"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          }`}
        >
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center p-0.5 border-2 rounded-full ${
              emp.certificate === "no"
                ? "border-[#324d72]"
                : "border-[#fff] border-opacity-80"
            }`}
          >
            {emp.certificate === "no" && (
              <div className="w-full h-full bg-[#324d72] rounded-full"></div>
            )}
          </div>
          <p className="text-lg text-[#1E293B] font-semibold">Байхгүй</p>
        </div>
      </div>

      {emp.certificate === "yes" && (
        <div>
          <p className="text-start text-lg text-[#1A1A1A] mb-2">
            Зургаа оруулна уу.
          </p>
          {images.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center">
              {images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`Uploaded ${index}`}
                    className="rounded-xl w-[150px] h-[150px] object-cover"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>
              ))}
              <div className="relative">
                <label
                  htmlFor="fileUpload"
                  style={{ border: "2px dashed #ABADB5" }}
                  className={`bg-[#F4F6FB] rounded-xl ${
                    images.length % 2 === 0 ? "w-[300px]" : "w-[150px]"
                  } h-[150px] flex items-center justify-center cursor-pointer`}
                >
                  <div>
                    <div className="flex justify-center">
                      <img src="/icon/img.svg" alt="icon" />
                    </div>
                    <p className="text-[#575763] mt-1">Зураг нэмэх</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                    id="fileUpload"
                    disabled={loading} // Disable input while uploading
                  />
                </label>
              </div>
            </div>
          )}
          {images.length === 0 && (
            <div className="flex items-center justify-center mt-4">
              <label
                htmlFor="fileUpload"
                style={{ border: "2px dashed #ABADB5" }}
                className="bg-[#F4F6FB] rounded-xl w-[335px] h-[162px] flex items-center justify-center cursor-pointer"
              >
                <div>
                  <div className="flex justify-center">
                    <img src="/icon/img.svg" alt="icon" />
                  </div>
                  <p className="text-[#575763] mt-1">
                    Сертификатны зургаа оруулна уу. <br /> /Заавал биш/
                  </p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  id="fileUpload"
                  disabled={loading} // Disable input while uploading
                />
              </label>
            </div>
          )}
          {loading && (
            <div className="flex justify-center items-center mt-4">
              <div className="spinner-border animate-spin w-10 h-10 border-4 border-t-4 border-blue-500 rounded-full"></div>
              <p className="text-[#575763] ml-2">Тамгалт илгээж байна...</p>
            </div>
          )}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Certificate;
