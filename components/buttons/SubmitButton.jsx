import { CiruclePlusIcon, EditPenIcon } from "@/components/icons/regular";

export default function SubmitButton({ isLoading, title, typeForm }) {
  return (
    <button
      className={`w-[190px] mx-4 flex gap-2 items-center bg-indigo-500 hover:bg-indigo-600 rounded-md py-2 px-4 text-white outline-indigo-400 active:scale-95${
        isLoading && "opacity-50 cursor-not-allowed"
      }`}
      type="submit"
    >
      {isLoading ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[18px] text-gray-200 animate-spin fill-white"
          >
            <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
          </svg>
          <span className="w-full text-sm font-medium">{typeForm === "edit" ? "Actualizando..." : `${title}...`}</span>
        </>
      ) : (
        <>
          {typeForm === "edit" ? (
            <EditPenIcon className={`w-[18px] fill-purple-50 text-purple-50`} />
          ) : (
            <CiruclePlusIcon className={`w-[18px] fill-purple-50 text-purple-600`} />
          )}
          <span className="w-full text-sm font-medium">{title}</span>
        </>
      )}
    </button>
  );
}
