import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Background from "./Background";

//pages
import Hello from "./components/Hello";
import Condition from "./components/Condition";
import Nice from "./components/Nice";
import Experience from "./components/Experience";
import Company from "./components/Company";
import Profession from "./components/Profession";
import WorkMajor from "./components/WorkMajor";
import Equipment from "./components/Equipment";
import Roaster from "./components/Roaster";
import WorkDay from "./components/WorkDay";
import Salary from "./components/Salary";
import Advantages from "./components/Advantages";
import Ending from "./components/Ending";

//icons
import License from "./components/License";
import Time from "./components/Time";
import Serius from "./components/Serius";
import CV from "./components/CV";
import Certificate from "./components/Certificate";

const Home = () => {
  const [all, setAll] = useState(false);
  const [page, setPage] = useState(1);
  const [diff, setDiff] = useState(null);
  const isEmailValid = /\S+@\S+\.\S+/;
  const [emp, setEmp] = useState({
    situation: "",
    experience: { year: "", company: [] },
    major: "",
    workMajor: "",
    driving: {
      car: [],
      license: [],
    },
    equipment: [],
    certificate: "",
    certificateImg: "",
    differentMajor: "",
    workTime: "",
    workRange: "",
    salary: "",
    workingRoster: "",
    workingDay: "",
    expAdvantage: "",
    sportAdvantage: "",
    behaviorAdvantage: "",
    phone: "",
    lastname: "",
    firstname: "",
    mail: "",
    photo: "",
  });

  // State for background image
  const [backgroundImage, setBackgroundImage] = useState("/img/bg.svg");
  const isEmailValidCheck = isEmailValid.test(emp.mail);

  useEffect(() => {
    if (page === 15) {
      setBackgroundImage("/img/bg1.svg");
    } else {
      setBackgroundImage("/img/bg.svg");
    }
  }, [page]);

  const isButtonVisible = () => {
    if (page === 2) {
      return emp.situation;
    }
    if (page === 4) {
      return emp.experience.year;
    }
    if (page === 5) {
      return emp.experience.company?.length > 0 ? true : false;
    }
    if (page === 6) {
      return emp.major;
    }
    if (page === 7) {
      return emp.differentMajor;
    }
    if (page === 8) {
      return (
        emp.equipment?.length > 0 ||
        emp.driving.car?.length > 0 ||
        emp.workMajor
      );
    }
    if (page === 9) {
      return emp.driving.license?.length > 0;
    }
    if (page === 10) {
      return emp.certificate;
    }
    if (page === 11) {
      return emp.workTime && emp.workRange;
    }
    if (page === 12) {
      return emp.workingRoster;
    }
    if (page === 13) {
      return emp.workingDay;
    }
    if (page === 14) {
      return emp.salary;
    }
    if (page === 17) {
      return emp.lastname && emp.firstname && emp.phone && isEmailValidCheck;
    }
    if (page > 17) {
      return false;
    }
    return true;
  };

  return (
    <Background backgroundImage={backgroundImage}>
      <div className="flex items-center justify-center min-h-[90vh] mx-[20px]">
        {page !== 1 && page !== 2 && page !== 15 && page <= 16 && (
          <div
            className={`absolute ${
              page === 16 ? "top-[40px]" : "top-[40px]"
            } left-[20px]`}
          >
            <button
              onClick={() => {
                if (all) {
                  setAll(false);
                  return;
                } else if (page === 6 && emp.experience.year === "0") {
                  setPage(page - 2);
                } else if (page === 9) {
                  if (emp.major === "Машин механизмын оператор") {
                    setPage(8);
                  } else {
                    setPage(7);
                  }
                } else if (page === 10) {
                  if (emp.major === "Инженер") {
                    setPage(8);
                  } else {
                    setPage(9);
                  }
                } else if (page === 11) {
                  if (
                    emp.major === "Машин механизмын оператор" ||
                    emp.major === "Инженер"
                  ) {
                    setPage(10);
                  } else {
                    setPage(6);
                  }
                } else if (page === 14) {
                  if (emp.situation === "temporary") {
                    setPage(13);
                  } else {
                    setPage(11);
                  }
                } else {
                  setPage(page - 1);
                }
              }}
              className={`flex items-center gap-1 text-xs ${
                page === 15 ? "text-[#fff]" : "text-[#1E293B]"
              } `}
            >
              <MdKeyboardArrowLeft className="text-base" /> Буцах
            </button>
          </div>
        )}
        {page > 3 && page < 15 && (
          <div className="flex items-center absolute top-[46px] left-1/2 transform -translate-x-1/2  gap-2">
            <div
              className={`w-[22px] h-[4px] rounded-lg ${
                page >= 4 ? "bg-[#1A1A1A]" : "bg-[#fff]"
              }`}
            />
            <div
              className={`w-[22px] h-[4px] rounded-lg ${
                page >= 6 ? "bg-[#1A1A1A]" : "bg-[#fff]"
              }`}
            />
            <div
              className={`w-[22px] h-[4px] rounded-lg ${
                page >= 8 ? "bg-[#1A1A1A]" : "bg-[#fff]"
              }`}
            />
            <div
              className={`w-[22px] h-[4px] rounded-lg ${
                page >= 11 ? "bg-[#1A1A1A]" : "bg-[#fff]"
              }`}
            />
            <div
              className={`w-[22px] h-[4px] rounded-lg ${
                page >= 13 ? "bg-[#1A1A1A]" : "bg-[#fff]"
              }`}
            />
            <div
              className={`w-[22px] h-[4px] rounded-lg ${
                page >= 14 ? "bg-[#1A1A1A]" : "bg-[#fff]"
              }`}
            />
          </div>
        )}
        {page === 1 ? (
          <Hello />
        ) : page === 2 ? (
          <Condition emp={emp} setEmp={setEmp} />
        ) : page === 3 ? (
          <Nice />
        ) : page === 4 ? (
          <Experience emp={emp} setEmp={setEmp} />
        ) : page === 5 ? (
          <Company emp={emp} setEmp={setEmp} />
        ) : page === 6 ? (
          <Profession emp={emp} setEmp={setEmp} all={all} setAll={setAll} />
        ) : page === 7 ? (
          <WorkMajor emp={emp} setEmp={setEmp} diff={diff} setDiff={setDiff} />
        ) : page === 8 ? (
          <Equipment emp={emp} setEmp={setEmp} />
        ) : page === 9 ? (
          <License emp={emp} setEmp={setEmp} />
        ) : page === 10 ? (
          <Certificate emp={emp} setEmp={setEmp} />
        ) : page === 11 ? (
          <Time emp={emp} setEmp={setEmp} />
        ) : page === 12 ? (
          <Roaster emp={emp} setEmp={setEmp} />
        ) : page === 13 ? (
          <WorkDay emp={emp} setEmp={setEmp} />
        ) : page === 14 ? (
          <Salary emp={emp} setEmp={setEmp} />
        ) : page === 15 ? (
          <Serius />
        ) : page === 16 ? (
          <Advantages emp={emp} setEmp={setEmp} />
        ) : page === 17 ? (
          <CV emp={emp} setEmp={setEmp} />
        ) : (
          <Ending />
        )}
        {console.log(page)}
        <div className="absolute bottom-[14px] left-1/2 transform -translate-x-1/2 w-full flex justify-center">
          {isButtonVisible() && page !== 16 && (
            <button
              onClick={() => {
                if (page === 4) {
                  if (emp.experience.year !== "0") {
                    setPage(page + 1);
                  } else {
                    setPage(6);
                  }
                } else if (page === 7) {
                  if (
                    emp.major === "Машин механизмын оператор" ||
                    emp.major === "Суурин төхөөрөмжийн оператор" ||
                    emp.major === "Инженер" ||
                    emp.major === "Механик" ||
                    emp.major === "Аюулгүй ажиллагаа" ||
                    emp.major === "Гагнуур"
                  ) {
                    setPage(8);
                  } else {
                    setPage(11);
                  }
                } else if (page === 8) {
                  if (emp.major === "Машин механизмын оператор") {
                    setPage(9);
                  } else {
                    if (emp.major === "Инженер") {
                      setPage(10);
                    } else {
                      setPage(11);
                    }
                  }
                } else if (page === 11) {
                  if (emp.situation === "permanent") {
                    setPage(14);
                  } else {
                    setPage(page + 1);
                  }
                } else {
                  setPage(page + 1);
                }
              }}
              className="w-[90%] page bg-[#fff] text-[#1E293B] font-bold rounded-lg py-2.5 button-in"
            >
              {page === 1
                ? "Эхлүүлэх"
                : page === 15
                ? "Бэлэн"
                : page === 16
                ? "Илгээх"
                : "Үргэлжлүүлэх"}
            </button>
          )}
          {page === 16 && (
            <div className="flex flex-col justify-center">
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
                className="py-3 px-3 text-center text-[#1E293B] border border-[#fff] rounded-lg w-[330px] mb-2"
              >
                Алгасах
              </button>
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
                className={`py-3 px-3 font-bold text-center text-[#1E293B] ${
                  emp.behaviorAdvantage !== "" ||
                  emp.expAdvantage !== "" ||
                  emp.sportAdvantage !== ""
                    ? "border border-[#CECFD3] text-[#1E293B] bg-[#fff]"
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
          )}
        </div>
      </div>
    </Background>
  );
};

export default Home;
