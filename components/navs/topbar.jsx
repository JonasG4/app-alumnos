"use client";
import Image from "next/image";
import UserButton from "@/components/buttons/UserButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white w-full h-[70px] shadow-lg flex items-center justify-center border-b border-gray-slate-400">
      <div className="flex w-[90%] justify-between items-center px-5">
        <ul className="flex gap-4 items-center">
          <Image src="/logo.png" width={60} height={50} alt="Logo UNIVO" className="mr-4" />
          <Link
            className={`font-bold hover:text-indigo-500 border-b border-transparent hover:border-indigo-500 pb-1 active:scale-95 duration-150 ease-in-out transition-all ${
              pathname === "/"
                ? "border-indigo-500 text-indigo-500"
                : "border-transparent text-slate-700"
            }`}
            href={"/"}
          >
            Inicio
          </Link>
          <Link
            className={`font-bold hover:text-indigo-500 border-b border-transparent hover:border-indigo-500 pb-1 active:scale-95 duration-150 ease-in-out transition-all ${
              pathname.includes("/alumnos")
                ? "border-indigo-500 text-indigo-500"
                : "border-transparent text-slate-700"
            }`}
            href={"/alumnos"}
          >
            Alumnos
          </Link>
          <Link
            className={`font-bold hover:text-indigo-500 border-b border-transparent hover:border-indigo-500 pb-1 active:scale-95 duration-150 ease-in-out transition-all ${
              pathname.includes("/developers")
                ? "border-indigo-500 text-indigo-500"
                : "border-transparent text-slate-700"
            }`}
            href={"/developers"}
          >
            Desarrolladores
          </Link>
        </ul>
        <div>
          <UserButton />
        </div>
      </div>
    </nav>
  );
}
