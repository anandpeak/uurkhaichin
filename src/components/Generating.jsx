import React, { useState, useEffect } from "react";

const Generating = ({ aiImg }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (aiImg) {
      setPercent(100); //
      return;
    }

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [aiImg]);

  const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      aiImg
    )}`;
    window.open(facebookShareUrl, "_blank");
  };

  const downloadImage = async () => {
    if (!aiImg) return;

    try {
      const response = await fetch(aiImg);
      const blob = await response.blob();

      // For browsers like Safari on iOS
      if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, "generated-image.png");
      } else {
        const img = new Image();
        img.src = URL.createObjectURL(blob);

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(img, 0, 0);

          const pngUrl = canvas.toDataURL("image/png");

          const link = document.createElement("a");
          link.href = pngUrl;
          link.setAttribute("download", "generated-image.png");

          document.body.appendChild(link);
          link.click();

          URL.revokeObjectURL(img.src);
          document.body.removeChild(link);
        };
      }
    } catch (error) {
      console.error("Failed to download the image:", error);
    }
  };

  return (
    <div className="text-center relative">
      {percent !== 100 && aiImg === null && (
        <div>
          <p className="text-[22px] text-[#1A1A1A] font-semibold mb-6">
            Таны мэдээлэлд үндэслэн таны зургийг AI-р зуруулж байна.
          </p>
          <p className="text-[#1A1A1A] text-lg mb-6">Та түр хүлээнэ үү.</p>
        </div>
      )}

      <div className="flex justify-center pb-20">
        <div
          className={`h-[284px] w-[220px] ${
            percent === 100 ? "border-4" : "border"
          }  border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 rounded-xl flex items-center justify-center relative overflow-hidden `}
        >
          {aiImg ? (
            <img
              src={aiImg}
              alt="Generated AI Image"
              className="absolute inset-0 object-cover w-full h-full"
            />
          ) : (
            <div className="">
              <div
                className="absolute bottom-0 left-0 w-full bg-[#ffffff] transition-all duration-100"
                style={{ height: `${percent}%` }}
              ></div>
              <div className="relative z-10 text-center pb-14">
                <p className="text-[#B7B7B7] text-lg font-semibold mt-2">
                  {percent}%
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <path
                    d="M40.5 5.5V40.5H5.5V5.5H40.5ZM40.5 0.5H5.5C2.75 0.5 0.5 2.75 0.5 5.5V40.5C0.5 43.25 2.75 45.5 5.5 45.5H40.5C43.25 45.5 45.5 43.25 45.5 40.5V5.5C45.5 2.75 43.25 0.5 40.5 0.5ZM28.35 22.65L20.85 32.325L15.5 25.85L8 35.5H38L28.35 22.65Z"
                    fill="#B7B7B7"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      {percent === 100 && aiImg && (
        <div className="fixed bottom-0 left-0 right-0 w-full h-[132px] border-t border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30 py-3 px-5">
          <p className="text-lg text-[#1A1A1A] font-semibold mb-4">
            Бусадтайгаа хуваалцаарай!
          </p>
          <div className="flex items-center justify-between gap-4">
            <div
              className="w-[45%] p-3 rounded-xl flex items-center justify-center gap-2 bg-[#fff] cursor-pointer"
              onClick={shareOnFacebook}
            >
              <img src="/icon/fb.svg" alt="fb" />
              <p className="text-[#1E293B] font-bold">Facebook</p>
            </div>
            <div
              className="w-[45%] p-3 rounded-xl flex items-center justify-center gap-2 bg-[#fff] cursor-pointer"
              onClick={downloadImage}
            >
              <img src="/icon/save.svg" alt="save" />
              <p className="text-[#1E293B] font-bold">Хадгалах </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Generating;
