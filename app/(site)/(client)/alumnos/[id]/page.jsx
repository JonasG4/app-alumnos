"use client";
import axios from "axios";
import { UserIcon, ArrowLeftIcon } from "@/components/icons/regular";
import { useRouter } from "next/navigation";
import Link from "next/link";
import moment from "moment";
import "moment/locale/es-us";
import DeleteButton from "@/components/buttons/deleteButton";

export default async function ViewPage({ params: { id } }) {
  const route = useRouter();
  const alumno = await getAlumno(id);
  const formatDate = (date) => {
    return date;
  };

  const deleteAlumno = async (id) => {
    await axios
      .delete(
        `https://5w112bl51c.execute-api.us-east-2.amazonaws.com/dev/alumnos/${id}`
      )
      .then((res) => {
        route.push("/alumnos");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <section className="w-[800px] flex flex-col gap-4 justify-center ring-1 ring-slate-300 rounded-md bg-slate-50 shadow-md overflow-hidden">
        <div className="flex flex-col bg-white rounded-t-md px-5 py-3 border-b-[1px] border-gray-300 z-50">
          <Link
            href={"/alumnos"}
            className="flex gap-2 items-center group/regresar rounded-md"
          >
            <ArrowLeftIcon
              className={
                "w-3 fill-gray-600 group-hover/regresar:fill-gray-800 rotate-180"
              }
            />
            <p className="text-xs text-slate-600 group-hover/regresar:text-slate-800">
              Regresar
            </p>
          </Link>
          <h1 className="font-extrabold  text-slate-800 uppercase">
            Detalles del alumno
          </h1>
        </div>

        <article className=" flex gap-8 px-5 rounded-t-md w-full bg-slate-50">
          <div className="flex items-center justify-center w-[180px] h-[250px] bg-indigo-50 rounded-md ring-1 ring-indigo-500 shadow-md transition-shadow">
            <UserIcon className="w-10 fill-indigo-500 text-indigo-500" />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full h-auto">
            <div>
              <p className="text-slate-600 font-light text-sm leading-3">
                Nombre completo
              </p>
              <h5 className="text-slate-600 font-semibold">
                {alumno.nombre} {alumno.apellido}
              </h5>
            </div>
            <div>
              <p className="text-slate-600 font-light text-sm leading-3">
                Código
              </p>
              <h5 className="text-slate-600 font-semibold">{alumno.codigo}</h5>
            </div>
            <div>
              <p className="text-slate-600 font-light text-sm leading-3">
                Sexo
              </p>
              <h5 className="text-slate-600 font-semibold">
                {alumno.sexo === "M" ? "Masculino" : "Femenino"}
              </h5>
            </div>
            <div>
              <p className="text-slate-600 font-light text-sm leading-3">
                Fecha nacimiento
              </p>
              <h5 className="text-slate-600 font-semibold">
                {moment(alumno.fechaNacimiento).format("LL")}
              </h5>
            </div>
            <div>
              <p className="text-slate-600 font-light text-sm leading-3">
                Carrera
              </p>
              <h5 className="text-slate-600 font-semibold">{alumno.carrera}</h5>
            </div>
            <div>
              <p className="text-slate-600 font-light text-sm leading-3">
                Nota global
              </p>
              <h5 className="text-slate-600 font-semibold">
                {alumno.promedioNota}
              </h5>
            </div>
            <div>
              <p className="text-slate-600 font-light text-sm leading-3">
                Registrado en
              </p>
              <h5 className="text-slate-600 font-semibold">
                {formatDate(alumno.createdAt)}
              </h5>
            </div>
            <div>
              <p className="text-slate-600 font-light text-sm leading-3">
                Ultima modificación en
              </p>
              <h5 className="text-slate-600 font-semibold">
                {formatDate(alumno.updatedAt)}
              </h5>
            </div>
            <div>
              <p className="text-slate-600 font-light text-sm leading-5">
                Estado
              </p>
              <h5 className={`text-slate-600 font-semibold`}>
                <p
                  className={`inline px-2 py-1 text-sm rounded-md ${
                    alumno.is_active
                      ? "text-white bg-green-500"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {alumno.is_active ? "Activo" : "Inactivo"}
                </p>
              </h5>
            </div>
          </div>
        </article>
        <article className="w-full px-4 py-2 flex border-t border-slate-300 gap-4">
          <Link
            className="w-full px-2 py-1 ring-1 active:scale-95 ring-indigo-500 text-indigo-500 rounded-md text-center bg-indigo-50 shadow-md hover:ring-indigo-400 hover:bg-indigo-600 hover:text-indigo-50"
            href={`/alumnos/${id}/edit?redirect-from-editpage=true`}
          >
            Editar
          </Link>
          <DeleteButton id={id} />
        </article>
      </section>
    </main>
  );
}

const getAlumno = async (id) => {
  const res = await axios.get(
    `https://5w112bl51c.execute-api.us-east-2.amazonaws.com/dev/alumnos/${id}`
  );
  const data = await res.data;
  return data;
};
