"use client";
import { useEffect, useState, useRef } from "react";
import { CircleCheckIcon, FilterListIcon } from "@/components/icons/regular";

export default function FilterBy({ data, setData, filters, field }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState("all");
  const ref = useRef();

  useEffect(() => {
    const isClickOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", isClickOutside);
    return () => {
      document.removeEventListener("click", isClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (id) => {
    if (id == "all") {
      setData(data);
      setSelectedOpt("all");
    } else {
      const newData = data.filter((item) => item[field] == id);
      setData(newData);
      setSelectedOpt(id);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        className={`group/select text-gray-600 hover:text-indigo-500 focus:text-indigo-500  hover:ring-indigo-500 ${
          isOpen ? "ring-2 ring-indigo-300" : "ring-1 ring-transparent"
        } focus:outline-none rounded-md text-sm px-2 py-2 text-center inline-flex items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FilterListIcon
          className={
            "w-3 fill-indigo-50 text-indigo-50"
          }
        />
      </button>
      {isOpen && (
        <ul
          className="fixed flex flex-col gap-2 z-50 w-40 max-h-[200px] overflow-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-thumb-rounded-full scrollbar-track-gray-200 ring-1 ring-indigo-300 bg-white rounded-md shadow-md dark:bg-gray-700 translate-y-[86px] p-2 normal-case"
          ref={ref}
        >
          <li
            id="all"
            className={`flex w-full justify-between p-2 uppercase hover:bg-indigo-100 hover:text-indigo-500 cursor-pointer rounded-md group/select
          ${
            selectedOpt == "all"
              ? "font-bold text-indigo-500"
              : "font-normal text-gray-400"
          }`}
            onClick={() => handleSelect("all")}
          >
            <p className="select-none pointer-events-none">Todos</p>
            <CircleCheckIcon
              className={`w-3 ml-2 group-hover/select:fill-indigo-500 group-hover/select:text-indigo-50 
            ${
              selectedOpt == "all"
                ? "fill-indigo-500 text-indigo-50"
                : "fill-gray-300 text-gray-400"
            }`}
            />
          </li>
          {filters.map((item, index) => {
            return (
              <li
                key={index}
                className={`float flex w-full justify-between p-2 uppercase hover:bg-indigo-100 hover:text-indigo-500 cursor-pointer rounded-md group/select ${
                  selectedOpt == item[field]
                    ? "font-bold text-indigo-500"
                    : "font-normal text-gray-400"
                }`}
                onClick={() => handleSelect(item[field])}
              >
                <p className="select-none pointer-events-none">{item.nombre}</p>
                <CircleCheckIcon
                  className={`w-3 ml-2 group-hover/select:fill-indigo-500 group-hover/select:text-indigo-5 ${
                    selectedOpt == item[field]
                      ? "fill-indigo-500 text-indigo-50"
                      : "fill-gray-300 text-gray-50"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
