import { AngleDownIcon } from "@/components/icons/light";
import { validateNumber } from "@/libs/validations";

export default function InputNumber({
  label,
  name,
  value,
  placeholder,
  onChange,
  valid,
  setValid,
  limit = 9999999,
  step = 1,
}) {
  const handlerChange = (e) => {
    const { value } = e.target;
    onChange(e);
    setValid({
      ...valid,
      [e.target.name]: validateNumber(value, true),
    });
  };

  const sumValue = (step, limit) => {
    setValid({
      ...valid,
      [name]: "",
    });

    if (value === "") return onChange({ target: { name, value: step } });

    const accumulate = value.toString().replace(",", "");
    const newValue = parseFloat(accumulate) + parseFloat(step);
    if (newValue > limit) {
      onChange({ target: { name, value: limit } });
    } else {
      onChange({ target: { name, value: newValue } });
    }
  };

  const subValue = (step) => {
    setValid({
      ...valid,
      [name]: "",
    });

    const accumulate = value.toString().replace(",", "");
    const newValue = parseFloat(accumulate) - parseFloat(step);

    if (newValue > 0) {
      onChange({ target: { name, value: newValue } });
    } else {
      onChange({ target: { name, value: 0 } });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      sumValue(step, limit);
    }
    if (e.key === "ArrowDown") {
      subValue(step);
    }
  };

  return (
    <article className="flex flex-col gap-1">
      <label htmlFor={label} className="font-semibold text-slate-600">
        {label}:
      </label>
      <div className="w-full relative mb-4">
        <div className="flex">
          <input
            autoComplete="off"
            className={`w-full p-2 ring-1 ring-gray-300 border-none z-50
          placeholder:text-gray-500 outline-none text-slate-600  ${
            valid[name]
              ? "focus:ring-red-500 ring-red-500 text-red-500"
              : "focus:ring-blue-600"
          } rounded-s-md transition-all duration-100 ease-out`}
            type="text"
            name={name}
            value={value}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            onChange={handlerChange}
          />
          <div className={`ring-1 ring-gray-300 flex flex-col rounded-e-md`}>
            <button
              type="button"
              onClick={() => sumValue(step, limit)}
              className={`bg-gray-200 w-[30px] h-full flex items-center justify-center  border-b border-gray-300 text-sm hover:bg-gray-300 active:bg-purple-200 group/up-button rounded-tr-md`}
            >
              <AngleDownIcon className="w-[10px] fill-gray-600 rotate-180 group-active/up-button:fill-purple-600" />
            </button>
            <button
              type="button"
              onClick={() => subValue(step)}
              className={`bg-gray-200 w-[30px] h-full flex items-center justify-center hover:bg-gray-300 active:bg-purple-200 group/down-button rounded-br-md`}
            >
              <AngleDownIcon className="w-[10px] fill-gray-600 group-active/down-button:fill-purple-600" />
            </button>
          </div>
        </div>
        <p className="absolute text-sm text-red-600 -bottom-6">{valid[name]}</p>
      </div>
    </article>
  );
}
