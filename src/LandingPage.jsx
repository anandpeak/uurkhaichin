import React, { useState, useEffect } from "react";
import "./style/LandingAnimation.css";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const LandingPage = () => {
  const [showGradient, setShowGradient] = useState(false);
  const [showLight, setShowLight] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGradient(true);
    }, 2720 + 680);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLight(true);
    }, 3400 + 680);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 4400 + 680);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showOverlay) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showOverlay]);

  return (
    <div
      className={`flex items-center justify-center min-h-screen min-w-full relative ${
        showOverlay ? "bg-cover fade-in" : ""
      }`}
      style={showOverlay ? { backgroundImage: "url('/mine.svg')" } : {}}
    >
      {showOverlay && (
        <div
          className="w-full h-full absolute top-0 left-0 z-20"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            animation: "fadeIn 0.5s ease-in forwards",
          }}
        />
      )}
      {showOverlay ? (
        <>
          {showContent && (
            <div
              className=" z-30 relative bg-[#000] py-8 px-4 md:px-[60px] rounded-xl"
              style={{ animation: "fadeIn 0.5s ease-in-out forwards" }}
            >
              <img
                className="md:mb-10 mb-2 w-[150px] md:w-[50%]"
                src="/LongLogoWhite.svg"
                alt="logo"
              />
              <p className="text-[#FFFFFF] font-semibold opacity-60 md:hidden block text-sm mb-6">
                Uurkhaichin аппликейшн тун удахгүй...
              </p>

              <p className="text-base md:text-[24px] text-[#fff] font-semibold mb-4 text-start">
                Доорхоос сонгоно уу.
              </p>
              <div className="flex justify-center">
                <div className="flex flex-wrap w-[300px] md:w-[570px] items-center justify-between gap-3 md:gap-6 mb-6 md:mb-10">
                  <div className="p-6 bg-[#1A1A1A] w-[295px] md:w-[270px] h-[93px] md:h-[200px] relative flex flex-col justify-between items-start md:items-end rounded-xl">
                    <p className="text-sm md:text-[20px] text-[#fff] font-semibold">
                      Ажил хайж байна
                    </p>
                    <div className="absolute md:bottom-0 bottom-3 right-0 md:left-0">
                      <img
                        className="md:w-auto w-[63px]"
                        src="/img/landing/research.svg"
                        alt="icon"
                      />
                    </div>
                    <button
                      onClick={() => {
                        navigate("/home");
                      }}
                      className="text-[#fff] flex items-center gap-2 text-xs md:text-sm bg-[#F88F00] ps-3 pe-2 py-1 md:mt-0 mt-3 md:py-2.5 rounded-3xl font-bold z-10"
                    >
                      Бүртгүүлэх <FaArrowRight />
                    </button>
                  </div>
                  <div className="p-6 bg-[#1A1A1A] w-[295px] md:w-[270px] h-[93px] md:h-[200px] relative flex flex-col justify-between items-end rounded-xl">
                    <p className="md:text-[20px] text-sm text-[#fff] font-semibold">
                      Байгууллага
                    </p>
                    <div className="absolute md:bottom-0 md:left-0 left-6 bottom-2">
                      <img
                        className="md:w-auto w-[73px]"
                        src="/img/landing/company.svg"
                        alt="icon"
                      />
                    </div>
                    <a
                      href="https://calendly.com/khurelbaatar/book-a-meeting-with-oneplace-hr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-[#fff] flex items-center gap-2 text-xs md:text-sm bg-[#F88F00] ps-3 pe-2 py-1 md:mt-0 mt-3 md:py-2.5 rounded-3xl font-bold">
                        Бүртгүүлэх <FaArrowRight />
                      </button>
                    </a>
                  </div>
                  <div className="md:p-6 px-3 pt-6 pb-3 text-end bg-[#1A1A1A] w-[140px] md:w-[270px] h-[120px] md:h-[200px] relative flex flex-col justify-between items-end rounded-xl">
                    <p className="md:text-[20px] text-sm text-[#fff] font-semibold">
                      Сургалтын <br /> байгууллага
                    </p>
                    <div className="absolute md:bottom-0 md:left-0 top-2 left-2">
                      <img
                        className="md:w-auto w-[52px]"
                        src="/img/landing/training.svg"
                        alt="icon"
                      />
                    </div>
                    <button
                      disabled={true}
                      className="text-[#fff] text-[11px] md:text-sm bg-[#676767] ps-3 pe-2 py-1 md:py-2.5 rounded-3xl font-bold"
                    >
                      Тун удахгүй...
                    </button>
                  </div>
                  <div className="md:p-6 px-3 pt-6 pb-3 text-end bg-[#1A1A1A] w-[140px] md:w-[270px] h-[120px] md:h-[200px] relative flex flex-col justify-between items-end rounded-xl">
                    <p className="md:text-[20px] text-sm text-[#fff] font-semibold">
                      Ирээдүйн
                      <br /> уурхайчин
                    </p>
                    <div className="absolute md:bottom-0 md:left-0 top-2 left-2">
                      <img
                        className="md:w-auto w-[42px]"
                        src="/img/landing/future.svg"
                        alt="icon"
                      />
                    </div>
                    <button
                      disabled={true}
                      className="text-[#fff] text-[11px] md:text-sm bg-[#676767] ps-3 pe-2 py-1 md:py-2.5 rounded-3xl font-bold"
                    >
                      Тун удахгүй...
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center w-full gap-4 mb-3">
                  <div className="w-[5%] h-[2px] bg-[#fff] bg-opacity-30" />
                  <p className="text-xs md:text-sm text-[#fff] w-auto">
                    Холбоо барих
                  </p>
                  <div className="md:w-[70%] w-[52%] h-[2px] bg-[#fff] bg-opacity-30" />
                </div>
                <div className="flex items-center text-white gap-2 mb-2">
                  <MdOutlineLocalPhone />
                  <p className="text-sm">+976 9999-9999</p>
                </div>
                <div className="flex items-center text-white gap-2 mb-2">
                  <MdOutlineEmail />
                  <p className="text-sm">uurkhaichin@gmail.com</p>
                </div>
                <div className="hidden md:flex justify-end">
                  <p className="text-[#FFFFFF] font-semibold opacity-60">
                    Uurkhaichin аппликейшн тун удахгүй...
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="animation-container mb-20">
          {/* Bars Animation */}
          <img className="absolute pe-[68px] mt-20" src="/bar.png" alt="bar" />
          <img
            className="absolute pe-[68px] mt-20"
            style={{
              animation: "stopAt45 0.68s ease-out forwards",
              animationDelay: "0.68s",
            }}
            src="/bar.png"
            alt="bar"
          />
          <img
            className="absolute pe-[68px] mt-20"
            style={{
              animation: "stopAt90 0.68s ease-out forwards",
              animationDelay: "1.36s",
            }}
            src="/bar.png"
            alt="bar"
          />
          <img
            className="absolute pe-[68px] mt-20"
            style={{
              animation: "stopAt135 0.68s ease-out forwards",
              animationDelay: "2.04s",
            }}
            src="/bar.png"
            alt="bar"
          />
          <img
            className="absolute pe-[68px] mt-20"
            style={{
              animation: "stopAt180 0.68s ease-out forwards",
              animationDelay: "2.72s",
            }}
            src="/bar.png"
            alt="bar"
          />
          {showLight && (
            <img
              style={{
                animation: "fadeIn 0.5s ease-in-out forwards ",
              }}
              className="absolute mt-[78px] z-10"
              src="/light.svg"
              alt="svg"
            />
          )}
          {showGradient && (
            <div className="gradient-wrapper mt-24">
              <div className="gradient-circle"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LandingPage;
