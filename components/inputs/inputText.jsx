"use client";
import { useState } from "react";
import { validateText } from "@/libs/validations";
import { CircleExlacmationIcon } from "@/components/icons/regular";

export default function InputText({
  label,
  name,
  value,
  onChange,
  valid,
  setValid,
  placeholder,
}) {
  const handleValid = (e) => {
    onChange(e);

    setValid({
      ...valid,
      [e.target.name]: validateText(e.target.value),
    });
  };
  

  return (
    <article className="flex flex-col gap-1">
      <label htmlFor={label} className="font-semibold text-slate-600">
        {label}:
      </label>
      <div className="w-full relative mb-4">
        <input
          type="text"
          name={name}
          className={`w-full p-2 rounded-md border outline-none ${
            valid[name]
              ? "border-red-500 text-red-500 focus:border-red-500"
              : "border-slate-300 focus:border-blue-500 text-slate-700"
          }`}
          placeholder={placeholder}
          onChange={handleValid}
          value={value}
        />
        <p className="absolute text-sm text-red-600 -bottom-6">
          {valid[name]}
        </p>
        <CircleExlacmationIcon
          className={`${
            !valid[name] && "hidden"
          } absolute w-4 fill-red-600 text-red-600 top-3 right-3`}
        />
      </div>
    </article>
  );
}
