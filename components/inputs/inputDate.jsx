import React from "react";

export default function InputDate({
  label,
  name,
  value,
  onChange,
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
        {label}:
      </label>
      <div className="w-full relative mb-4">
        <input
          type="date"
          name={name}
          className={`w-full p-2 rounded-md border outline-none text-slate-600 ${
            valid[name]
              ? "border-red-500 "
              : "border-slate-300  focus:border-blue-500"
          }`}
          onChange={handlerChange}
          value={value}
        />
        <p className="absolute text-sm text-red-600 -bottom-6 line-clamp-1">{valid[name]}</p>
      </div>
    </article>
  );
}
