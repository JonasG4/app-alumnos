"use client";
import { useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modal = useRef();
  const route = useRouter();

  const handleCloseModal = (e) => {
    if (modalIsOpen && modal.current.id === e.target.id) {
      setModalIsOpen(false);
    }
  };

  const deleteAlumno = async (id) => {
    setIsLoading(true);
    await axios
      .delete(
        `https://5w112bl51c.execute-api.us-east-2.amazonaws.com/dev/alumnos/${id}`
      )
      .then((res) => {
        route.push("/alumnos");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        setModalIsOpen(false);
      });
  };
  return (
    <>
      {modalIsOpen && (
        <div
          className="inset-0 fixed bg-black bg-opacity-25 flex items-center justify-center z-50"
          onClick={handleCloseModal}
          id="modalOutside"
          ref={modal}
        >
          <div className="w-[450px] bg-white rounded-md shadow-md flex flex-col justify-center p-8">
            <h1 className="font-bold text-lg text-slate-700">
              ¿Estás seguro que quieres borrar este registro?
            </h1>
            <p className="text-center">
              Una vez elimnado no podras recuperar los datos
            </p>
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={() => setModalIsOpen(false)}
                className="w-full px-2 py-1 bg-indigo-500 active:scale-95 text-indigo-50 rounded-md ring-1 ring-indigo-400 shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-100 ease-in-out"
              >
                Cancelar
              </button>
              <button
                className={`w-full px-2 py-1 flex gap-2 items-center bg-white hover:bg-red-600 rounded-md text-red-500 ring-1 ring-red-500 hover:text-white hover:ring-red-300 transition-all duration-100 ease-in-out active:scale-95${
                  isLoading && "opacity-50 cursor-not-allowed"
                }`}
                type="button"
                onClick={() => deleteAlumno(id)}
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
                    <span className="w-full text-sm font-medium">
                      Eliminando...
                    </span>
                  </>
                ) : (
                  <span className="w-full text-sm font-medium">
                    Si, Eliminar
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setModalIsOpen(true)}
        className="w-full px-2 py-1 bg-red-50 active:scale-95 text-red-500 rounded-md ring-1 ring-red-500 shadow-md hover:bg-red-600 hover:text-red-50 transition-all duration-100 ease-in-out"
      >
        Eliminar
      </button>
    </>
  );
}
