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
    if (page === 14) {
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
      return emp.experience.company?.length > 0;
    }
    if (page === 6) {
      return emp.major;
    }
    if (page === 7) {
      if (diff === true) {
        return emp.workMajor !== "" ? true : false;
      } else if (diff === false) {
        return true;
      }
    }
    if (page === 8) {
      return emp.equipment?.length > 0 || emp.driving.car?.length > 0;
    }
    if (page === 9) {
      return emp.driving.license?.length > 0;
    }
    if (page === 10) {
      return emp.workRange && emp.workTime;
    }
    if (page === 11) {
      return emp.workingRoster;
    }
    if (page === 12) {
      return emp.workingDay;
    }
    if (page === 13) {
      return emp.salary;
    }
    if (page === 16) {
      return isEmailValidCheck && emp.phone && emp.firstname && emp.lastname;
    }
    if (page > 16) {
      return false;
    }
    return true;
  };

  return (
    <Background backgroundImage={backgroundImage}>
      <div className="flex items-center justify-center min-h-screen mx-[20px]">
        {page !== 1 && page !== 2 && page !== 15 && page <= 16 && (
          <div className="absolute top-[40px] left-[20px]">
            <button
              onClick={() => {
                if (all) {
                  setAll(false);
                  return;
                }
                if (page === 6 && emp.experience.year === "0") {
                  setPage(page - 2);
                } else {
                  setPage(page - 1);
                }
              }}
              className={`flex items-center gap-1 text-xs ${
                page === 14 ? "text-[#fff]" : "text-[#1E293B]"
              } `}
            >
              <MdKeyboardArrowLeft className="text-base" /> Буцах
            </button>
          </div>
        )}
        {page > 3 && page < 14 && (
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
                page >= 10 ? "bg-[#1A1A1A]" : "bg-[#fff]"
              }`}
            />
            <div
              className={`w-[22px] h-[4px] rounded-lg ${
                page >= 12 ? "bg-[#1A1A1A]" : "bg-[#fff]"
              }`}
            />
            <div
              className={`w-[22px] h-[4px] rounded-lg ${
                page >= 13 ? "bg-[#1A1A1A]" : "bg-[#fff]"
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
          <Time emp={emp} setEmp={setEmp} />
        ) : page === 11 ? (
          <Roaster emp={emp} setEmp={setEmp} />
        ) : page === 12 ? (
          <WorkDay emp={emp} setEmp={setEmp} />
        ) : page === 13 ? (
          <Salary emp={emp} setEmp={setEmp} />
        ) : page === 14 ? (
          <Serius />
        ) : page === 15 ? (
          <Advantages emp={emp} setEmp={setEmp} />
        ) : page === 16 ? (
          <CV emp={emp} setEmp={setEmp} />
        ) : (
          <Ending />
        )}

        <div className="absolute bottom-[14px] left-1/2 transform -translate-x-1/2 w-full flex justify-center">
          {isButtonVisible() && page !== 15 && (
            <button
              onClick={() => {
                if (page === 4 && emp.experience?.year === "0") {
                  setPage(page + 2);
                } else if (page === 7) {
                  const major = emp.major?.trim();
                  if (
                    major === "Машин механизмын оператор" ||
                    major === "Суурин төхөөрөмжийн оператор"
                  ) {
                    setPage(page + 1);
                  } else {
                    if (emp.situation === "permanent") {
                      setPage(page + 3);
                    } else {
                      setPage(page + 4);
                    }
                  }
                } else if (page === 8) {
                  const major = emp.major?.trim();
                  if (major === "Машин механизмын оператор") {
                    setPage(page + 1);
                  } else {
                    if (emp.situation === "permanent") {
                      setPage(page + 2);
                    } else {
                      setPage(page + 3);
                    }
                  }
                } else if (page === 9) {
                  if (emp.situation === "permanent") {
                    setPage(page + 1);
                  } else {
                    setPage(page + 2);
                  }
                } else if (page === 10) {
                  setPage(page + 3);
                } else {
                  setPage(page + 1);
                }
              }}
              className="w-[90%] page bg-[#fff] text-[#1E293B] font-bold rounded-lg py-2.5 button-in"
            >
              {page === 1
                ? "Эхлүүлэх"
                : page === 14
                ? "Бэлэн"
                : page === 16
                ? "Илгээх"
                : "Үргэлжлүүлэх"}
            </button>
          )}
          {page === 15 && (
            <div className="flex items-center gap-2 justify-between">
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
                className="py-3 px-3 text-center text-[#1E293B] border border-[#fff] rounded-lg w-[160px]"
              >
                Алгасах
              </button>
              <button
                onClick={() => {
                  setPage(page + 1);
                }}
                className={`py-3 px-3 font-bold text-center text-[#1E293B] ${
                  emp.behaviorAdvantage === "" ||
                  emp.expAdvantage === "" ||
                  emp.sportAdvantage === ""
                    ? "bg-[#CECFD3] text-[#fff] cursor-not-allowed"
                    : "border border-[#CECFD3] text-[#1E293B] bg-[#fff]"
                } rounded-lg w-[160px]`}
                disabled={
                  emp.behaviorAdvantage === "" ||
                  emp.expAdvantage === "" ||
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
