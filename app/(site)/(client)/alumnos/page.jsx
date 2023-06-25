"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Pagination from "@/components/tables/pagination";
import { paginate } from "@/libs/paginate";
import NoRecordFound from "@/components/tables/noRecordFound";
import {
  CiruclePlusIcon,
  ArrowsRotateIcon,
  ListIcon,
} from "@/components/icons/regular";
import SearchInput from "@/components/tables/searchInput";
import FilterBy from "@/components/tables/filterBy";

export default function ListPage() {
  const [alumnos, setAlumnos] = useState([]);
  const [alumnosBU, setAlumnosBU] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getAlumnos = async () => {
    setLoading(true);
    await axios
      .get("https://5w112bl51c.execute-api.us-east-2.amazonaws.com/dev/alumnos")
      .then((res) => {
        setAlumnos(res.data.alumnos);
        setAlumnosBU(res.data.alumnos);
      })
      .catch((err) => {
        setAlumnos([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //PAGINACIÓN
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlerChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleChangePageSize = (e) => {
    setPageSize(parseInt(e.target.value));
  };

  useEffect(() => {
    getAlumnos();
  }, []);

  const alumnosList = paginate(alumnos, currentPage, pageSize);

  return (
    <main className="h-full w-full flex flex-col items-center justify-center overflow-hidden p-1">
      <section className="w-full lg:w-[90%] flex flex-col gap-4 justify-center ring-1 ring-slate-300 rounded-md bg-white shadow-md overflow-hidden">
        <article className="flex flex-col gap-3 p-5 rounded-t-md w-full justify-center items-center bg-white border-b border-slate-300">
          <h1 className="text-2xl font-bold text-slate-600 flex items-center gap-3">
            <ListIcon className={"w-5 fill-slate-300 text-indigo-600"} />
            <p>Listado de alumnos</p>
          </h1>
        </article>
        <div className="flex items-center justify-between gap-4 px-4">
          <SearchInput
            data={alumnosBU}
            setData={setAlumnos}
            placeholder="Buscar alumno..."
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="bg-white shadow-md py-[10px] w-12 rounded-md ring-1 ring-gray-400 flex items-center justify-center hover:ring-indigo-500 group/peer"
              onClick={getAlumnos}
            >
              <ArrowsRotateIcon className="w-4 fill-slate-500 group-hover/peer:fill-indigo-500 group-hover/peer:text-indigo-500 group-active/peer:rotate-[360deg] duration-300 ease-in-out" />
            </button>
            <Link
              className="py-2 px-3 ring-1 shadow-md ring-indigo-500 rounded-md flex bg-indigo-500 text-gray-50 text-sm hover:bg-slate-700 hover:text-gray-50 duration-200"
              href={`/alumnos/new-alumno`}
            >
              <CiruclePlusIcon
                className={"w-4 md:mr-2 fill-gray-50 text-slate-700"}
              />
              <p className="hidden md:inline-block whitespace-nowrap">
                Agregar alumno
              </p>
            </Link>
          </div>
        </div>
        <article className="px-4">
          <div className="w-full max-h-[550px] overflow-auto ring-1 ring-gray-300 rounded-md scrollbar-thin scrollbar-thumb-slate-600 scrollbar-thumb-rounded-full scrollbar-track-gray-200">
            <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400 rounded-md relative">
              <thead className="text-xs text-slate-50 uppercase bg-indigo-500 dark:bg-gray-700 dark:text-gray-400 ">
                <tr>
                  <th scope="col" className="w-[50px] py-3 px-6">
                    #
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Código
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Nombre
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Apellido
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <div className="flex items-center gap-2">
                      <FilterBy
                        data={alumnosBU}
                        setData={setAlumnos}
                        filters={[
                          { sexo: "M", nombre: "Masculino" },
                          { sexo: "F", nombre: "Femenino" },
                        ]}
                        field={"sexo"}
                      />
                      <p>Sexo</p>
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Carrera
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Nota
                  </th>
                  <th scope="col" className="py-3 px-6">
                    <div className="flex items-center gap-2">
                      <FilterBy
                        data={alumnosBU}
                        setData={setAlumnos}
                        filters={[
                          { is_active: 0, nombre: "Inactivo" },
                          { is_active: 1, nombre: "Activo" },
                        ]}
                        field={"is_active"}
                      />
                      <p>Estado</p>
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {alumnosList.map((alumno, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="w-[50px] px-6 py-4 ">
                      <span className="rounded-md px-2 py-1 text-slate-50 text-[12px] font-semibold bg-indigo-600">
                        {index + 1}
                      </span>
                    </td>
                    <th className="w-[180px] py-4 px-6 whitespace-nowrap">
                      {alumno.codigo}
                    </th>
                    <td className="w-[350px] py-4 px-6 whitespace-nowrap">
                      {alumno.nombre}
                    </td>
                    <td className="w-[350px] py-4 px-6 whitespace-nowrap">
                      {alumno.apellido}
                    </td>
                    <td className="w-[150px] py-4 px-6 whitespace-nowrap">
                      {alumno.sexo === "M" ? "Masculino" : "Femenino"}
                    </td>
                    <td className="w-[350px] py-4 px-6 whitespace-nowrap">
                      {alumno.carrera}
                    </td>
                    <td className="w-[150px] py-4 px-6 whitespace-nowrap">
                      {alumno.promedioNota}
                    </td>
                    <td className="w-[150px] py-4 px-6">
                      {alumno.is_active ? (
                        <p className="text-gray-50 text-[12px] py-[1px] w-[70px] text-center bg-indigo-500 rounded-md font-medium">
                          Activo
                        </p>
                      ) : (
                        <p className="text-gray-600 text-[12px] py-[1px] w-[70px] text-center bg-gray-300 rounded-md inline-block mx-auto font-medium">
                          Inactivo
                        </p>
                      )}
                    </td>
                    <td className="w-[150px] py-4 px-6">
                      <div className="flex gap-3">
                        <Link
                          href={`/alumnos/${alumno.id}`}
                          className="font-medium text-slate-600 dark:text-slate-700 hover:underline"
                        >
                          Revisar
                        </Link>
                        <div className="w-[1px] h-[20px] bg-gray-400"></div>
                        <Link
                          href={`/alumnos/${alumno.id}/edit`}
                          className="font-medium text-slate-600 dark:text-slate-700 hover:underline"
                        >
                          Editar
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {alumnos.length < 1 && <NoRecordFound />}
          </div>
        </article>

        <div className="px-4 mb-4">
          <Pagination
            itemsCount={alumnos.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onChangePage={handlerChangePage}
            onChangePageSize={handleChangePageSize}
          />
        </div>
      </section>
    </main>
  );
}
