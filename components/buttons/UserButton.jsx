"use client";
import { useState, useEffect, useRef } from "react";
import {
  UserIcon,
  LogoutIcon,
  AngleDownIcon,
} from "@/components/icons/regular";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserButton() {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isClickOutside2 = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", isClickOutside2);
    return () => {
      document.removeEventListener("click", isClickOutside2);
    };
  }, [isOpen]);

  const { user, error, isLoading } = useUser();

  if (error) return router.push("/auth/login");

  return (
    <div
      className="relative flex gap-3 items-center cursor-pointer select-none"
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`group w-10 h-10 ring-1 active:scale-95 ring-gray-400 rounded-full flex relative items-center justify-center cursor-pointer bg-gradient-to-tr from-blue-800 to-blue-500 hover:opacity-80`}
      >
        {user?.picture ? (
          <Image
            alt={"image profile pic"}
            src={user.picture}
            placeholder="blur"
            blurDataURL="image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMqvh/DQAF7gK5UK3yKwAAAABJRU5ErkJggg=="
            width={40}
            height={40}
            className="rounded-full object-fill"
          />
        ) : (
          <UserIcon className="w-4 fill-gray-100 text-gray-100" />
        )}
        <div
          className={`absolute w-4 h-4 bottom-0 -right-1 ring-1 ${
            isOpen ? "ring-indigo-600" : "ring-slate-400 "
          } bg-white rounded-full flex items-center justify-center`}
        >
          <AngleDownIcon
            className={`w-2 fill-slate-700 ${
              isOpen && "rotate-180"
            } duration-150 ease-in-out`}
          />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 p-3 rounded-md w-[250px] bg-gray-50 shadow-lg ring-1 ring-indigo-400 right-0 absolute top-[3.1rem] z-[100]">
          {/* PROFILE */}
          <div className="flex flex-col items-center justify-center h-[75px] rounded-md bg-gray-100 py-2 px-3 ring-1 ring-gray-200 shadow-md">
            <h1 className="text-lg font-bold text-gray-700">{user?.name}</h1>
            <h4 className="font-normal text-gray-700 text-sm">{user?.email}</h4>
          </div>
          {/* LOGOUT */}
          <Link
            href="/api/auth/logout"
            className="flex items-center justify-center gap-2 w-full p-1 rounded-md bg-red-500 cursor-pointer hover:opacity-80 active:scale-95"
          >
            <LogoutIcon className={`w-3 fill-gray-50 text-gray-50`} />
            <span className="text-sm font-semibold text-gray-50">
              Cerrar sesión
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
