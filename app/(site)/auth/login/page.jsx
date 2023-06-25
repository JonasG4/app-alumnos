"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@/components/icons/regular";

export default function LoginPage() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 w-[400px] p-5 bg-slate-50 shadow-md rounded-md ring-1 ring-slate-400">
        <Image src="/logo.png" width={150} height={150} alt="Logo UNIVO" />
        <h1 className="text-4xl font-black text-slate-800">Bienvenido</h1>
        <p className="text-slate-600">
          Para accedr al sistema debes iniciar sesión
        </p>
        <Link href="/api/auth/login" className="flex justify-center w-full gap-3 px-4 mt-5 text-indigo-50 bg-indigo-500 p-2 rounded-md ring-1 ring-slate-400">
          <p className="text-lg">Identificarme</p>
          <ArrowLeftIcon className="w-4 fill-indigo-50 text-indigo-50" />
        </Link>
      </div>
    </main>
  );
}
