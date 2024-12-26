import React, { useState } from "react";

const Certificate = ({ emp, setEmp }) => {
  const [selected, setSelected] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const maxSize = 25 * 1024 * 1024; // 25 MB in bytes

    if (file) {
      if (file.size > maxSize) {
        setError(
          "Файлын хэмжээ 25MB-с их байна. Зөвшөөрөгдсөн хэмжээнд багтаана уу."
        );
        setImage(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setEmp({ ...emp, certificateImg: reader.result });
        setError("");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] font-semibold mb-4">
        Өөрийн сурсан сургаалиа бичнэ үү.
      </p>
      <div className="mb-6">
        <input
          className="w-full py-3 px-4 rounded-lg bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 text-sm"
          onChange={(e) => {
            setEmp({ ...emp, school: e.target.value });
          }}
          value={emp.school}
          type="text"
        />
      </div>
      <p className="text-[22px] text-[#1A1A1A] font-semibold mb-6">
        Танд мэргэжлийн сертификат байгаа юу?
      </p>
      <div className="flex items-center justify-between gap-2">
        <div
          onClick={() => {
            setEmp({ ...emp, certificate: "yes" });
            setSelected("yes");
          }}
          className={`py-3 px-4 flex items-center gap-2 border rounded-lg w-[45%] ${
            selected === "yes"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          }`}
        >
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center p-0.5 border-2 rounded-full ${
              selected === "yes"
                ? "border-[#324d72]"
                : "border-[#fff] border-opacity-80"
            }`}
          >
            {selected === "yes" && (
              <div className="w-full h-full bg-[#324d72] rounded-full"></div>
            )}
          </div>
          <p className="text-lg text-[#1E293B] font-semibold">Байгаа</p>
        </div>{" "}
        <div
          onClick={() => {
            setEmp({ ...emp, certificate: "no" });
            setSelected("no");
          }}
          className={`py-3 px-4 flex items-center gap-2 border rounded-lg w-[45%] ${
            selected === "no"
              ? "border-[#324d72] bg-[#F4F6FB]"
              : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
          }`}
        >
          <div
            className={`w-[20px] h-[20px] flex items-center justify-center p-0.5 border-2 rounded-full ${
              selected === "no"
                ? "border-[#324d72]"
                : "border-[#fff] border-opacity-80"
            }`}
          >
            {selected === "no" && (
              <div className="w-full h-full bg-[#324d72] rounded-full"></div>
            )}
          </div>
          <p className="text-lg text-[#1E293B] font-semibold">Байхгүй</p>
        </div>
      </div>
      {selected === "yes" && (
        <div>
          <p className="text-start text-lg text-[#1A1A1A] mb-2">
            Зургаа оруулна уу.
          </p>
          <div className="flex items-center justify-center">
            <label
              htmlFor="fileUpload"
              style={{ border: "2px dashed #ABADB5" }}
              className="bg-[#F4F6FB] rounded-xl w-[335px] h-[162px] flex items-center justify-center cursor-pointer"
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="rounded-xl w-[335px] h-[162px] object-cover"
                />
              ) : (
                <div>
                  <div className="flex justify-center">
                    <img src="/icon/img.svg" alt="icon" />
                  </div>
                  <p className="text-[#575763] mt-1">
                    Сертификатны зургаа оруулна уу. <br /> /Заавал биш/
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="fileUpload"
              />
            </label>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Certificate;
