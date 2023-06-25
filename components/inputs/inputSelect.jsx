"use client";
import { useState } from "react";

export default function InputSelect({
  label,
  name,
  options,
  value = "DEFAULT",
  onChange,
  placeholder = "Seleccione una opción",
  valid,
  setValid,
}) {
  
  const handlerChange = (e) => {
    onChange(e);
    setValid({
      ...valid,
      [e.target.name]: "",
    });
  };
  return (
    <article className="flex flex-col gap-1">
      <label htmlFor={label} className="font-semibold text-slate-600">
        {label}
      </label>
      <div className="relative w-full mb-4">
        <select
          name={name}
          value={value ? value : "DEFAULT"}
          onChange={handlerChange}
          className={`w-full p-2 text-slate-600 border ${
            valid[name] ? "border-red-600" : "border-slate-300"
          } rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer`}
        >
          <option value="DEFAULT" disabled>
            {placeholder.toUpperCase()}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <p className="absolute text-sm text-red-600 -bottom-6">{valid[name]}</p>
      </div>
    </article>
  );
}
