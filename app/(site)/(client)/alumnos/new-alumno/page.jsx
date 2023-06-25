"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, UserPlusIcon } from "@/components/icons/regular";
import { carreras, sexos } from "@/data/static-data";
import InputText from "@/components/inputs/inputText";
import InputSelect from "@/components/inputs/inputSelect";
import InputDate from "@/components/inputs/inputDate";
import InputNumber from "@/components/inputs/inputNumber";
import { formatNumber } from "@/libs/formatText";
import InputSwitch from "@/components/inputs/inputSwitch";
import SubmitButton from "@/components/buttons/SubmitButton";
import Link from "next/link";

export default function CreatePage() {
  const [alumno, updateAlumno] = useState({
    nombre: "",
    apellido: "",
    sexo: "",
    fechaNacimiento: "",
    carrera: "",
    promedioNota: 0.0,
    is_active: true,
  });

  const [valid, updateValid] = useState({
    nombre: "",
    apellido: "",
    sexo: "",
    fechaNacimiento: "",
    carrera: "",
    promedioNota: "",
  });

  const [isLoading, updateIsLoading] = useState(false);

  const route = useRouter();

  const handleAlumno = (e) => {
    const { name, value, type } = e.target;
    updateAlumno({
      ...alumno,
      [name]: type === "checkbox" ? e.target.checked : value,
    });

  };

  const handlePromedio = (e) => {
    const { value } = e.target;
    updateAlumno({
      ...alumno,
      promedioNota: parseFloat(formatNumber(value)),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateIsLoading(true);
    try {
      const response = await axios.post(
        "https://5w112bl51c.execute-api.us-east-2.amazonaws.com/dev/alumnos",
        alumno,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        route.push("/alumnos?message=Alumno creado exitosamente");
      }
    } catch (error) {
      const { data } = error.response;

      if (data.statusCode === 400) {
        updateValid({
          ...valid,
          nombre: data.errors.nombre,
          apellido: data.errors.apellido,
          sexo: data.errors.sexo,
          fechaNacimiento: data.errors.fechaNacimiento,
          carrera: data.errors.carrera,
          promedioNota: data.errors.promedioNota,
        });
      }
    }
    updateIsLoading(false);
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
      <section className="w-[700px] py-2 bg-white ring-1 ring-slate-300 rounded-md shadow-md transition-shadow">
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
            Agregar alumno
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 px-4 pb-4 pt-2 bg-slate-50">
            <InputText
              label="Nombre"
              name="nombre"
              value={alumno.nombre}
              onChange={handleAlumno}
              valid={valid}
              setValid={updateValid}
              placeholder="Ingrese el nombre del alumno"
            />
            <InputText
              label="Apellido"
              name="apellido"
              value={alumno.apellido}
              onChange={handleAlumno}
              valid={valid}
              setValid={updateValid}
              placeholder="Ingrese el apellido del alumno"
            />
            <InputSelect
              label="Carrera"
              name="carrera"
              options={carreras}
              value={alumno.carrera}
              placeholder="Seleccione una carrera"
              onChange={handleAlumno}
              valid={valid}
              setValid={updateValid}
            />
            <InputSelect
              label="Sexo"
              name="sexo"
              options={sexos}
              value={alumno.sexo}
              placeholder="Seleccione un sexo"
              onChange={handleAlumno}
              valid={valid}
              setValid={updateValid}
            />
            <InputDate
              label="Fecha de nacimiento"
              name="fechaNacimiento"
              value={alumno.fechaNacimiento}
              onChange={handleAlumno}
              valid={valid}
              setValid={updateValid}
            />
            <InputNumber
              label="Promedio de nota"
              name="promedioNota"
              value={alumno.promedioNota}
              onChange={handlePromedio}
              step={0.5}
              valid={valid}
              setValid={updateValid}
              placeholder="Ingrese el promedio de nota"
            />
            <InputSwitch
              label="Estado"
              name="is_active"
              value={alumno.is_active}
              onChange={handleAlumno}
            />
          </section>
          <div className="w-full h-[1px] bg-slate-300"></div>
          <div className="pb-2 pt-4 bg-white">
            <SubmitButton isLoading={isLoading} title={"Crear registro"} />
          </div>
        </form>
      </section>
    </main>
  );
}
