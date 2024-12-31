import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

const CV = ({ emp, setEmp }) => {
  const isEmailValid = /\S+@\S+\.\S+/;
  const isCyrillic = /^[\u0400-\u04FF\s]+$/;

  const handleInputChange = (e, field) => {
    setEmp({
      ...emp,
      [field]: e.target.value,
    });
  };

  const isEmailValidCheck = isEmailValid.test(emp.mail);
  const isLastnameValid = isCyrillic.test(emp.lastname) || emp.lastname === "";
  const isFirstnameValid =
    isCyrillic.test(emp.firstname) || emp.firstname === "";
  const isPhoneValid = emp.phone.length === 8;

  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] mb-6 font-semibold">
        Бид тантай эргээд холбогдох тул дараах мэдээллүүдийг оруулаарай.
      </p>
      <form className="bg-[#fff] bg-opacity-20 py-6 px-3 text-start rounded-xl">
        {/* Phone Number */}
        <div className="mb-4">
          <p className="text-sm text-[#1A1A1A]">Утасны дугаар</p>
          <div className="relative flex items-center justify-center">
            <MdOutlineLocalPhone className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg text-[#777985]" />
            <input
              placeholder="9999-9999"
              className="py-2 pe-4 ps-8 bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 rounded-lg w-full"
              type="number"
              value={emp.phone}
              onChange={(e) => handleInputChange(e, "phone")}
            />
          </div>
          {!isPhoneValid && emp.phone !== "" && (
            <p className="text-xs text-red-500 mt-1">
              Утасны дугаар 8 оронтой байх ёстой.
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <p className="text-sm text-[#1A1A1A]">Овог</p>
          <div className="relative flex items-center justify-center">
            <input
              placeholder="Өөрийн овгийг бичнэ үү."
              className="py-2 px-4 bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 rounded-lg w-full"
              type="text"
              value={emp.lastname}
              onChange={(e) => handleInputChange(e, "lastname")}
            />
          </div>
          {!isLastnameValid && (
            <p className="text-xs text-red-500 mt-1">
              Зөвхөн кирил үсгээр бичнэ үү.
            </p>
          )}
        </div>

        {/* First Name */}
        <div className="mb-4">
          <p className="text-sm text-[#1A1A1A]">Нэр</p>
          <div className="relative flex items-center justify-center">
            <input
              placeholder="Өөрийн нэрийг бичнэ үү."
              className="py-2 px-4 bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 rounded-lg w-full"
              type="text"
              value={emp.firstname}
              onChange={(e) => handleInputChange(e, "firstname")}
            />
          </div>
          {!isFirstnameValid && (
            <p className="text-xs text-red-500 mt-1">
              Зөвхөн кирил үсгээр бичнэ үү.
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <p className="text-sm text-[#1A1A1A]">Мейл хаяг</p>
          <div className="relative flex items-center justify-center">
            <MdMailOutline className="absolute left-2 top-1/2 transform -translate-y-1/2 text-lg text-[#777985]" />
            <input
              placeholder="example@gmail.com"
              className="py-2 pe-4 ps-8 bg-[#fff] bg-opacity-30 border border-[#fff] border-opacity-80 rounded-lg w-full"
              type="email"
              value={emp.mail}
              onChange={(e) => handleInputChange(e, "mail")}
            />
          </div>
          {!isEmailValidCheck && emp.mail !== "" && (
            <p className="text-xs text-red-500 mt-1">
              Та зөв имэйл хаяг оруулна уу.
            </p>
          )}
        </div>

        {/* Disability Checkbox */}
        <div
          onClick={() => {
            setEmp({ ...emp, isDisabled: !emp.isDisabled });
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={emp.isDisabled}
            onChange={() => setEmp({ ...emp, isDisabled: !emp.isDisabled })}
            className="cursor-pointer w-[20px] h-[20px] rounded-sm "
          />
          <p className="text-[#1A1A1A]">Хөгжлийн бэрхшээлтэй иргэн</p>
        </div>
      </form>
    </div>
  );
};

export default CV;
