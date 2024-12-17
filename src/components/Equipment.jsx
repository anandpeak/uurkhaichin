import React, { useEffect, useState } from "react";

const Equipment = ({ emp, setEmp }) => {
  const [show, setShow] = useState("");
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

  useEffect(() => {
    if (emp.major === "Машин механизмын оператор") {
      setShow("car");
    } else {
      setShow("equip");
    }
  }, [emp]);

  // Determine items and selected state based on `show`
  const items = show === "car" ? vehicle : equip;
  const selectedItems = show === "car" ? emp.driving?.car || [] : emp.equipment;
  const isAllSelected = selectedItems.length === items.length;

  return (
    <div className="text-center">
      <p className="text-[22px] text-[#1A1A1A] font-semibold mb-6">
        {show === "car"
          ? "Жолооддог тоног төхөөрөмжөө сонгоно уу."
          : "Ажилладаг тоног төхөөрөмжөө сонгоно уу."}
      </p>
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
      <div className="flex items-center flex-wrap justify-between gap-2 max-h-[350px] overflow-y-scroll">
        {items.map((item, index) => (
          <div
            key={index}
            tabIndex={0}
            className={`w-[160px] h-[150px] flex items-center justify-center border rounded-xl cursor-pointer ${
              selectedItems.includes(item.name)
                ? "border-[#324d72] bg-[#F4F6FB]"
                : "border-[#fff] border-opacity-80 bg-[#fff] bg-opacity-30"
            }`}
            onClick={() => {
              setEmp((prev) => ({
                ...prev,
                [show === "car" ? "driving" : "equipment"]:
                  show === "car"
                    ? {
                        ...prev.driving,
                        car: selectedItems.includes(item.name)
                          ? selectedItems.filter((equip) => equip !== item.name)
                          : [...selectedItems, item.name],
                      }
                    : selectedItems.includes(item.name)
                    ? selectedItems.filter((equip) => equip !== item.name)
                    : [...selectedItems, item.name],
              }));
            }}
          >
            <div>
              <div className="flex justify-center">
                <img src={item.img} alt={item.name} />
              </div>
              <p className="text-sm text-[#1A1A1A]">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
