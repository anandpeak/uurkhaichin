import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Background from "./Background";
import useViewportHeight from "./hooks/useViewportHeight";

//pages
import Hello from "./components/Hello";
import Condition from "./components/Condition";
import Nice from "./components/Nice";
import Experience from "./components/Experience";
import Company from "./components/Company";
import Profession from "./components/Profession";

import Equipment from "./components/Equipment";
import Roaster from "./components/Roaster";
import WorkDay from "./components/WorkDay";
import Salary from "./components/Salary";
import Advantages from "./components/Advantages";
import Ending from "./components/Ending";
import School from "./components/School";

import Skills from "./components/Skills";
import License from "./components/License";
import Time from "./components/Time";
import Serius from "./components/Serius";
import CV from "./components/CV";
import Certificate from "./components/Certificate";
import SalaryType from "./components/SalaryType";
import Generate from "./components/Generate";
import Generating from "./components/Generating";
import axios from "axios";

const Home = () => {
  const [all, setAll] = useState(false);
  const [page, setPage] = useState(1);
  const isEmailValid = /\S+@\S+\.\S+/;
  const isCyrillic = /^[\u0400-\u04FF\s]+$/;
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
    welding: [],
    certificate: "",
    certificateImgs: [],
    workTime: "",
    workRange: "",
    salaryType: "",
    salary: "",
    workingRoster: "",
    workingDay: "",
    softSkills: [],
    techSkills: [],
    detailSkills: "",
    school: "",
    phone: "",
    lastName: "",
    firstName: "",
    photo: "",
    mail: "",
    isDisabled: false,
  });

  const [gen, setGen] = useState({
    gender: "",
    age: null,
    photoUrl: "",
    talentId: null,
  });
  const [aiImg, setAiImg] = useState(null);

  const [loading, setLoading] = useState(false);

  // State for background image
  const [backgroundImage, setBackgroundImage] = useState("/img/bg.svg");
  const isEmailValidCheck = isEmailValid.test(emp.mail);
  const isLastnameValid = isCyrillic.test(emp.lastName);
  const isFirstnameValid = isCyrillic.test(emp.firstName);
  const isPhoneValid = emp.phone.length === 8;

  useViewportHeight();

  useEffect(() => {
    if (page === 15) {
      setBackgroundImage("/img/bg1.svg");
    } else {
      setBackgroundImage("/img/bg.svg");
    }
  }, [page]);

  useEffect(() => {
    const isFacebookInAppBrowser = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return userAgent.includes("FBAN") || userAgent.includes("FBAV");
    };

    if (isFacebookInAppBrowser()) {
      const url = "https://www.uurkhaichin.mn/";
      window.location.href = url;
    }
  }, []);

  const isButtonVisible = () => {
    if (page === 2) {
      return emp.situation;
    }
    if (page === 4) {
      return emp.major;
    }
    if (page === 5) {
      return (
        emp.equipment?.length > 0 ||
        emp.driving.car?.length > 0 ||
        emp.welding.length > 0 ||
        emp.workMajor
      );
    }
    if (page === 6) {
      return emp.driving.license?.length > 0;
    }
    if (page === 7) {
      return emp.certificate;
    }

    if (page === 9) {
      return emp.experience.year;
    }
    if (page === 10) {
      return emp.experience.company?.length > 0 ? true : false;
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
      return emp.salary || emp.salaryType;
    }

    if (page === 18) {
      return (
        emp.lastName &&
        emp.firstName &&
        emp.phone &&
        isEmailValidCheck &&
        isLastnameValid &&
        isFirstnameValid &&
        isPhoneValid
      );
    }
    if (page > 18) {
      return false;
    }
    return true;
  };

  const sendRequest = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://metacogserver.azurewebsites.net/v1/talent/create",
        emp,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setGen({ talentId: response.data.id });
      setLoading(false);
      setPage(19);
      console.log(response.data.id);
      console.log("Response:", response.data);
    } catch (error) {
      console.log("Failed to send data.");
      setLoading(false);
      setPage(19);
    }
  };

  const generating = async () => {
    console.log("loading", gen);
    try {
      const response = await axios.post(
        "https://metacogserver.azurewebsites.net/v1/talent/photo",
        gen,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setAiImg(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Background backgroundImage={backgroundImage}>
      <div className="flex flex-col items-center justify-center min-h-[calc(var(--vh,1vh)*100)] mx-[20px]">
        {page !== 1 && page !== 2 && page !== 15 && page < 19 && (
          <div
            className={`absolute ${
              page === 17 ? "top-[40px]" : "top-[40px]"
            } left-[20px]`}
          >
            <button
              onClick={() => {
                if (all) {
                  setAll(false);
                  return;
                } else if (page === 7) {
                  if (emp.major === "Машин механизмын оператор") {
                    setPage(6);
                  } else {
                    setPage(5);
                  }
                } else if (page === 8) {
                  if (
                    emp.major === "Машин механизмын оператор" ||
                    emp.major === "Суурин төхөөрөмжийн оператор" ||
                    emp.major === "Гагнуур" ||
                    emp.major === "Механик"
                  ) {
                    setPage(7);
                  } else if (
                    emp.major === "Инженер" ||
                    emp.major === "Аюулгүй ажиллагаа"
                  ) {
                    setPage(5);
                  } else {
                    setPage(4);
                  }
                } else if (page === 11) {
                  if (emp.experience.year === "0") {
                    setPage(9);
                  } else {
                    setPage(10);
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
              className={`flex items-center gap-1  ${
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
                page >= 7 ? "bg-[#1A1A1A]" : "bg-[#fff]"
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
          <Profession emp={emp} setEmp={setEmp} all={all} setAll={setAll} />
        ) : page === 5 ? (
          <Equipment emp={emp} setEmp={setEmp} />
        ) : page === 6 ? (
          <License emp={emp} setEmp={setEmp} />
        ) : page === 7 ? (
          <Certificate emp={emp} setEmp={setEmp} />
        ) : page === 8 ? (
          <School emp={emp} setEmp={setEmp} />
        ) : page === 9 ? (
          <Experience emp={emp} setEmp={setEmp} />
        ) : page === 10 ? (
          <Company emp={emp} setEmp={setEmp} />
        ) : page === 11 ? (
          <Time emp={emp} setEmp={setEmp} />
        ) : page === 12 ? (
          <Roaster emp={emp} setEmp={setEmp} />
        ) : page === 13 ? (
          <WorkDay emp={emp} setEmp={setEmp} />
        ) : page === 14 ? (
          emp.situation === "temporary" ? (
            <SalaryType emp={emp} setEmp={setEmp} />
          ) : (
            <Salary emp={emp} setEmp={setEmp} />
          )
        ) : page === 15 ? (
          <Serius />
        ) : page === 16 ? (
          <Skills emp={emp} setEmp={setEmp} setPage={setPage} />
        ) : page === 17 ? (
          <Advantages emp={emp} setEmp={setEmp} setPage={setPage} />
        ) : page === 18 ? (
          <CV emp={emp} setEmp={setEmp} />
        ) : page === 19 ? (
          <Ending setPage={setPage} />
        ) : page === 20 ? (
          <Generate
            generating={generating}
            gen={gen}
            setGen={setGen}
            setPage={setPage}
          />
        ) : page === 21 ? (
          <Generating aiImg={aiImg} />
        ) : (
          ""
        )}
        {console.log(emp)}

        {isButtonVisible() && page !== 16 && (
          <div className="fixed bottom-[14px] left-1/2 transform -translate-x-1/2 w-full flex justify-center">
            <button
              onClick={() => {
                if (page === 4) {
                  if (
                    emp.major === "Машин механизмын оператор" ||
                    emp.major === "Суурин төхөөрөмжийн оператор" ||
                    emp.major === "Инженер" ||
                    emp.major === "Механик" ||
                    emp.major === "Аюулгүй ажиллагаа" ||
                    emp.major === "Гагнуур"
                  ) {
                    setPage(5);
                  } else {
                    setPage(8);
                  }
                } else if (page === 5) {
                  if (emp.major === "Машин механизмын оператор") {
                    setPage(6);
                  } else {
                    if (
                      emp.major === "Суурин төхөөрөмжийн оператор" ||
                      emp.major === "Гагнуур" ||
                      emp.major === "Механик"
                    ) {
                      setPage(7);
                    } else {
                      setPage(8);
                    }
                  }
                } else if (page === 9) {
                  if (emp.experience.year === "0") {
                    setPage(11);
                  } else {
                    setPage(10);
                  }
                } else if (page === 11) {
                  if (
                    emp.situation === "permanent" ||
                    emp.situation === "retired"
                  ) {
                    setPage(14);
                  } else {
                    setPage(12);
                  }
                } else if (page === 18) {
                  sendRequest();
                } else {
                  setPage(page + 1);
                }
              }}
              className={`w-[90%] page bg-[#fff] text-[#1E293B] font-bold rounded-lg py-2.5 button-in ${
                page === 1 ? "mb-20" : ""
              }`}
              disabled={loading}
            >
              {loading
                ? "Loading..."
                : page === 1
                ? "Эхлүүлэх"
                : page === 15
                ? "Бэлэн"
                : "Үргэлжлүүлэх"}
            </button>
          </div>
        )}
      </div>{" "}
    </Background>
  );
};

export default Home;
