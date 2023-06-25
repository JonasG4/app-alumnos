import { FolderOpenIcon } from "@/components/icons/regular";

export default function NoRecordFound({ isLoading }) {
  return (
    <div>
      <article className="my-8">
        {isLoading ? (
          <div className="w-full flex items-center justify-center py-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2 w-8 h-8 text-gray-200 animate-spin fill-indigo-500"
            >
              <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
            </svg>
          </div>
        ) : (
          <div className="w-full flex items-center justify-center flex-col gap-2 my-2">
            <FolderOpenIcon
              className={"w-[80px] fill-indigo-400 text-indigo-200"}
            />
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-medium text-gray-600">
                No se encontraron registros
              </h3>
              <p className="text-sm text-gray-500">
                Intente quitar los filtros o agrega un nuevo registro.
              </p>
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
