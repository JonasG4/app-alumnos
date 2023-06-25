'use client'
export default function InputSwitch({ label, name, value, onChange }) {
  return (
    <article className="flex flex-col gap-1">
      <label htmlFor={label} className="font-semibold text-slate-600">
        {label}
      </label>
      <label className="relative w-[85px] inline-flex items-center cursor-pointer h-full select-none mb-2">
        <input
          type="checkbox"
          className="sr-only peer peer/label"
          name={name}
          defaultChecked={value}
          onChange={onChange}
        />
        <div
          className="w-[85px] h-[30px] bg-gray-200 rounded-md peer dark:bg-gray-700 ring-1
                   ring-gray-400 peer-checked:after:translate-x-[60px] peer-checked:after:border-white after:content-[''] 
                   after:absolute after:top-[3px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:shadow-sm
                   after:rounded-md after:h-[24px] after:w-5 after:z-50 after:transition-all dark:border-gray-600
                  peer-checked:bg-indigo-600 "
        ></div>
        <span className="absolute ml-2 text-sm font-medium text-gray-100 dark:text-gray-300 select-none hidden peer-checked/label:block">
          Activo
        </span>
        <span className="absolute right-2 text-sm font-medium text-gray-500 dark:text-gray-300 select-none peer-checked/label:hidden">
          Inactivo
        </span>
      </label>
    </article>
  );
}
