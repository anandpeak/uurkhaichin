import React, { useEffect, useState } from "react";

const Equipment = ({ emp, setEmp }) => {
  const [show, setShow] = useState("img");
  const [major, setMajor] = useState("vehicle");
  const vehicle = [
    {
      img: "/img/equipments/vehicle/excavator.svg",
      name: "Экскаватор/Excavator",
    },
    { img: "/img/equipments/vehicle/loader.svg", name: "Ковш/Loader" },
    { img: "/img/equipments/vehicle/hovo.svg", name: "Хово/Dump truck" },
    { img: "/img/equipments/vehicle/dump.svg", name: "Дамп/Mining dump truck" },
    {
      img: "/img/equipments/vehicle/shovelExcavator.svg",
      name: "Шоул Экскаватор / Shovel excavator",
    },
    {
      img: "/img/equipments/vehicle/bulldozer.svg",
      name: "Буллдозер/Bullldozer",
    },
    { img: "/img/equipments/vehicle/graders.svg", name: "Motor graders" },
    { img: "/img/equipments/vehicle/blasthole.svg", name: "Blasthole drills" },
    { img: "/img/equipments/vehicle/drill.svg", name: "Hardrock drill" },
    { img: "/img/equipments/vehicle/bolter.svg", name: "Hardrock bolter" },
  ];

  const equip = [
    { img: "/img/equipments/equip/pump.svg", name: "Насос / Pump" },
    {
      img: "/img/equipments/equip/floatation.svg",
      name: "Баяжуулах / Floatation",
    },
    {
      img: "/img/equipments/equip/thickener.svg",
      name: "Өтгөрүүлэгч / Thickener",
    },
    { img: "/img/equipments/equip/crusher.svg", name: "Бутлуур / Crusher" },
    {
      img: "/img/equipments/equip/grinding.svg",
      name: "Нунтаглалт / Grinding",
    },
    {
      img: "/img/equipments/equip/conveyor.svg",
      name: "Туузан дамжуурга / Conveyor",
    },
  ];

  const engineer = [
    {
      img: "🌍",
      name: "Геологич",
    },
    {
      img: "⛰️",
      name: "Геотехникийн инженер",
    },
    {
      img: "👨‍🏭",
      name: "Металлургийн инженер",
    },
    {
      img: "👷‍♂️",
      name: "Механик инженер",
    },
    {
      img: "⚡",
      name: "Цахилгааны инженер",
    },
    {
      img: "🏗️",
      name: "Барилгын инженер",
    },
    {
      img: "⚙️",
      name: "Процесс удирдлагын инженер",
    },
    {
      img: "🧪",
      name: "Химийн инженер",
    },
    {
      img: "✍️",
      name: "Зургийн инженер",
    },
    {
      img: "📏",
      name: "Геодези/Маркшейдер",
    },
    {
      img: "📊",
      name: "Автоматжуулалтын инженер",
    },
    {
      img: "💨",
      name: "Агааржуулалтын инженер",
    },
    {
      img: "♻️",
      name: "Материалын инженер",
    },
    {
      img: "💼",
      name: "Теслийн инженер",
    },
    {
      img: "🌐",
      name: "Системийн инженер",
    },
    {
      img: "🛡️",
      name: "Аюулгүй байдлын инженер",
    },
    {
      img: "💻",
      name: "IT инженер",
    },
    {
      img: "🔧",
      name: "Тоног төхөөрөмжийн инженер",
    },
    {
      img: "🚰",
      name: "Усны инженер",
    },
    {
      img: "✏️",
      name: "Чанарын инженер",
    },
  ];

  const welding = [
    "Гар гагнуур",
    "Хагас автомат",
    "Автомат гагнуур",
    "Цахилгаан нуман гагнуур",
    "Даралтын гагнуур",
    "Хий гагнуур (Gas Welding)",
    "Хэт авианы гагнуур (Ultrasonic Welding)",
    "Лазер гагнуур",
    "Хуванцар гагнуур (Plastic Welding)",
  ];

  const mechanic = [
    "Хүнд овор",
    "Дунд овор",
    "Хөнгөн овор",
    "Суурин тоног төхөөрөмж",
    "Өрөх тоног төхөөрөмж",
  ];

  const habea = [
    "ХАБЭА зөвлөх",
    "ХАБЭА ажилтан",
    "Байгаль орчны мэргэжилтэн",
    "Байгаль орчны эрдэмтэн",
    "Байгаль орчны менежер",
    "Тогтвортой хөгжлийн менежер",
    "Хөдөлмөрийн эрүүл мэндийн зөвлөх",
    "Онцгой байдлын зохицуулагч",
    "Эрсдэлийн менежментийн мэргэжилтэн",
    "Байгаль орчны зохицуулагч",
    "Агаарын чанарын мэргэжилтэн",
    "Хог хаягдлын менежер",
    "Усны нөөцийн менежер",
    "Зэрлэг ан амьтан",
    "Био олон янз байдлын зөвлөх",
  ];
  useEffect(() => {
    if (
      emp.major === "Машин механизмын оператор" ||
      emp.major === "Суурин төхөөрөмжийн оператор" ||
      emp.major === "Инженер"
    ) {
      setShow("img");
    } else {
      setShow("noImg");
    }
  }, [emp]);

  useEffect(() => {
    switch (emp.major) {
      case "Машин механизмын оператор":
        setMajor("car");
        break;

      case "Инженер":
        setMajor("engineer");
        break;
      case "Гагнуур":
        setMajor("welding");
        break;
      case "Механик":
        setMajor("mechanic");
        break;
      case "Аюулгүй ажиллагаа":
        setMajor("habea");
        break;
      default:
        setMajor("equip");
    }
  }, [emp]);

  const items =
    major === "car"
      ? vehicle
      : major === "equip"
      ? equip
      : major === "engineer"
      ? engineer
      : major === "welding"
      ? welding
      : major === "mechanic"
      ? mechanic
      : habea;

  const selectedItems =
    major === "car"
      ? emp.driving?.car || []
      : major === "equip"
      ? emp.equipment
      : "";
  const isAllSelected = selectedItems.length === items.length;

  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] font-semibold mb-6">
        {major === "car"
          ? "Жолооддог тоног төхөөрөмжөө сонгоно уу."
          : "Ажилладаг тоног төхөөрөмжөө сонгоно уу."}
      </p>
      {emp.major === "Машин механизмын оператор" ||
      emp.major === "Суурин төхөөрөмжийн оператор" ? (
        <div
          className="w-full border-2 border-[#fff] border-opacity-30 bg-[#fff] bg-opacity-30 py-3 px-4 flex items-center gap-3 rounded-lg mb-4 cursor-pointer"
          onClick={() => {
            setEmp((prev) => ({
              ...prev,
              [show === "car" ? "driving" : "equipment"]:
                show === "car"
                  ? {
                      ...prev.driving,
                      car: isAllSelected ? [] : items.map((item) => item.name),
                    }
                  : isAllSelected
                  ? []
                  : items.map((item) => item.name),
            }));
          }}
        >
          <div
            className={`w-[22px] h-[22px] rounded-md flex items-center justify-center ${
              isAllSelected
                ? "bg-[#324D72]"
                : "border-2 border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
            }`}
          >
            {isAllSelected && <img src="/icon/check.svg" alt="check" />}
          </div>
          <p className="text-[#657081] text-lg">Бүгдийг сонгох</p>
        </div>
      ) : (
        ""
      )}

      <div className="flex items-center flex-wrap justify-between gap-2 max-h-[350px] overflow-y-scroll">
        {show === "img"
          ? items.map((item, index) => (
              <div
                key={index}
                tabIndex={0}
                className={`w-[160px] h-[150px] flex items-center justify-center border rounded-xl cursor-pointer ${
                  major === "engineer"
                    ? emp.workMajor === item.name
                      ? "border-[#324d72] bg-[#F4F6FB]"
                      : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
                    : selectedItems.includes(item.name)
                    ? "border-[#324d72] bg-[#F4F6FB]"
                    : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
                }`}
                onClick={() => {
                  if (major === "engineer") {
                    setEmp({ ...emp, workMajor: item.name });
                  } else {
                    setEmp((prev) => ({
                      ...prev,
                      [major === "car" ? "driving" : "equipment"]:
                        major === "car"
                          ? {
                              ...prev.driving,
                              car: selectedItems.includes(item.name)
                                ? selectedItems.filter(
                                    (equip) => equip !== item.name
                                  )
                                : [...selectedItems, item.name],
                            }
                          : selectedItems.includes(item.name)
                          ? selectedItems.filter((equip) => equip !== item.name)
                          : [...selectedItems, item.name],
                    }));
                  }
                }}
              >
                <div>
                  <div className="flex justify-center">
                    {major === "engineer" ? (
                      <p className="text-3xl">{item.img}</p>
                    ) : (
                      <img src={item.img} alt={item.name} />
                    )}
                  </div>
                  <p className="text-sm text-[#1A1A1A]">{item.name}</p>
                </div>
              </div>
            ))
          : items.map((item, index) => (
              <div
                onClick={() => {
                  setEmp({ ...emp, workMajor: item });
                }}
                key={index}
                className={`w-full border ${
                  emp.workMajor === item
                    ? "border-[#324d72] bg-[#F4F6FB]"
                    : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
                } py-3 px-4 flex items-center gap-2 rounded-lg`}
              >
                <div
                  className={`w-[20px] h-[20px] flex items-center justify-center p-0.5 border-2 rounded-full ${
                    emp.workMajor === item
                      ? "border-[#324d72]"
                      : "border-[#fff] border-opacity-80"
                  }`}
                >
                  {emp.workMajor === item && (
                    <div className="w-full h-full bg-[#324d72] rounded-full"></div>
                  )}
                </div>
                <p className="text-lg font-semibold text-[#1E293B]">{item}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Equipment;
