"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { GradutationCopIcon, CodeIcon } from "@/components/icons/duetone";
import { LogoutIcon } from "@/components/icons/regular";
import Image from "next/image";
import { notFound } from "next/navigation";
import Loading from "@/components/loading";
import axios from "axios";

export default function HomePage() {
  const { user, error, isLoading } = useUser();

  if (error) return notFound();

  return (
    <main className="w-full min-h-screen max-h-screen overflow-hidden grid grid-rows-2 relative">
      <svg
        width="1245"
        height="1245"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sc-e45f99fe-12 lgDuwC"
      >
        <g
          clipPath="url(#background_svg__clip0_2893_64097)"
          stroke="#000"
          strokeOpacity="0.3"
          strokeWidth="0.4"
          strokeMiterlimit="10"
        >
          <path d="M732.701 938.201C409.264 1326.33 235.618 833.044 235.618 598.91c0-234.134 128.76-54.226 423.925-423.925C805.605-7.964 1174.15 363.509 1174.15 597.643c0 149.465-92.53 142.008-215.243 184.035-69.501 23.819-148.704 63.456-226.206 156.523z"></path>
          <path d="M659.543 153.013C831.089-.977 1181.02 351.6 1181.02 597.86c0 151.782-89.7 168.18-209.841 222.044-74.896 33.556-164.922 73.773-250.677 154.388C388.631 1286.22 213.646 845.171 213.646 598.91c0-150.225 55.094-151.094 167.636-224.831 28.417-18.642 59.837-41.267 95.312-68.705 53.031-41.05 114.026-90.534 182.949-152.361z"></path>
          <path d="M659.543 131.04C857.514 6.299 1187.86 339.654 1187.86 598.077c0 154.099-86.58 195.51-204.41 260.017-80.18 43.909-179.691 84.09-275.147 152.256-333.573 238.22-516.63-153.053-516.63-411.44 0-148.343 55.384-173.754 161.809-253.319 29.755-22.263 62.37-47.493 99.402-74.932 59.728-44.199 129.049-90.751 206.659-139.619z"></path>
          <path d="M659.543 109.068c225.12-94.805 535.197 218.677 535.197 489.191 0 156.415-83.11 223.636-199.019 298.025-85.248 54.732-192.939 95.275-299.617 150.116C366.948 1215.7 169.7 869.424 169.7 598.874c0-146.461 55.24-197.067 156.017-281.772 31.023-26.063 64.941-53.683 103.529-81.158 66.389-47.275 144.288-90.678 230.297-126.876z"></path>
          <path d="M659.543 87.095c252.595-63.964 542.037 228.74 542.037 511.381 0 158.768-79.27 252.269-193.59 335.997-90.06 65.957-205.027 108.417-324.049 148.017-320.867 106.75-536.177-200.939-536.177-483.616 0-144.542 54.66-220.885 150.225-310.26 32.108-30.045 67.547-59.801 107.655-87.384 73.086-50.281 159.637-90.28 253.899-114.135z"></path>
          <path d="M659.543 65.122c279.926-32.29 548.887 238.768 548.887 533.571 0 161.085-75.04 281.193-188.17 374.007-94.475 77.54-216.827 124.45-348.518 145.88-312.287 50.75-545.987-224.902-545.987-519.67 0-142.659 53.683-245.03 144.433-338.748 33.05-34.136 70.154-65.918 111.746-93.611 79.963-53.248 175.021-89.592 277.609-101.429z"></path>
          <path d="M659.543 1154.63c-306.93 0-555.761-248.827-555.761-555.757 0-140.777 52.344-269.319 138.605-367.237 33.81-38.334 72.796-71.999 115.873-99.836 86.805-56.108 190.225-88.651 301.283-88.651 306.93 0 555.757 248.831 555.757 555.761 0 306.929-248.827 555.72-555.757 555.72z"></path>
          <path d="M86.479 602.783c0-143.564 53.393-274.677 141.393-374.549 34.461-39.095 74.207-73.411 118.153-101.828 88.542-57.23 194.025-90.424 307.292-90.424 313.047 0 566.833 253.79 566.833 566.837 0 313.048-253.786 566.841-566.833 566.841-313.048 0-566.838-253.829-566.838-566.877z"></path>
          <path d="M69.213 606.693c0-146.388 54.443-280.071 144.143-381.898 35.113-39.855 75.656-74.859 120.47-103.818 90.28-58.353 197.827-92.199 313.301-92.199 319.165 0 577.913 258.75 577.913 577.915 0 319.165-258.748 577.917-577.913 577.917S69.213 925.858 69.213 606.693z"></path>
          <path d="M51.91 610.566c0-149.212 55.456-285.428 146.931-389.21a593.518 593.518 0 01122.75-105.809c91.981-59.475 201.627-93.972 319.31-93.972 325.282 0 588.989 263.708 588.989 588.991 0 325.283-263.707 588.994-588.989 588.994-325.283 0-588.991-263.675-588.991-588.994z"></path>
          <path d="M34.606 614.476c0-151.999 56.507-290.822 149.682-396.559 36.453-41.375 78.552-77.718 125.067-107.763 93.719-60.597 205.429-95.746 325.355-95.746 331.401 0 600.07 268.667 600.07 600.068 0 331.4-268.669 600.064-600.07 600.064-331.4 0-600.104-268.628-600.104-600.064z"></path>
          <path d="M17.303 618.385c0-154.823 57.556-296.179 152.434-403.871a615.323 615.323 0 01127.347-109.755C392.54 43.04 506.313 7.203 628.448 7.203c337.554 0 611.182 273.627 611.182 611.182 0 337.554-273.628 611.185-611.182 611.185-337.554 0-611.145-273.668-611.145-611.185z"></path>
          <path d="M622.258 1244.52c343.664 0 622.262-278.598 622.262-622.262C1244.52 278.594 965.922 0 622.258 0 278.594 0 0 278.594 0 622.258c0 343.664 278.594 622.262 622.258 622.262z"></path>
        </g>
        <defs>
          <clipPath id="background_svg__clip0_2893_64097">
            <path fill="#fff" d="M0 0h1245v1245H0z"></path>
          </clipPath>
        </defs>
      </svg>
      {isLoading ? (
        <div className="abosolute">
          <Loading />
        </div>
      ) : (
        <div className={`flex flex-col items-center w-full absolute`}>
          <div className="bg-white w-full py-10 flex items-center justify-center flex-col shadow-sm">
            <Image
              alt="User profile picture"
              src={user?.picture}
              priority
              quality={100}
              placeholder="blur"
              blurDataURL="image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMqvh/DQAF7gK5UK3yKwAAAABJRU5ErkJggg=="
              width={150}
              height={150}
              className="rounded-md mb-4 opacity-0 duration-150 ease-in-out"
              onLoadingComplete={(e) => {
                e.classList.remove("opacity-0");
              }}
            />
            <h1 className="text-3xl font-bold text-slate-800">
              ¡Bienvenido,{" "}
              <span className="text-indigo-500">{user?.name}!</span> 👋
            </h1>
            <p className="text-slate-500">
              Este sistema permite registrar alumnos con su información básica
            </p>
          </div>
          <div className="mt-4 flex flex-col items-center gap-4">
            <h3 className="text-xl text-slate-600 font-bold">
              ¿Qué quieres hacer?
            </h3>
            <div className="flex gap-4 ">
              <Link
                href="/alumnos"
                className="p-4 bg-white ring-1 ring-slate-200 rounded shadow-md transition-all flex flex-col items-center gap-2 hover:scale-110 hover:ring-indigo-500 duration-100 ease-in-out"
              >
                <GradutationCopIcon className="w-14 fill-slate-400 text-slate-700" />
                <p className="text-sm text-slate-600">Ver lista de alumnos</p>
              </Link>
              <Link
                href="/developers"
                className="p-4 bg-white ring-1 ring-slate-200 rounded shadow-md transition-all flex flex-col items-center justify-center gap-2 hover:scale-110 hover:ring-indigo-500 duration-100 ease-in-out"
              >
                <CodeIcon className="w-12 fill-slate-400 text-slate-700" />
                <p className="text-sm text-slate-600">Ver Desarrolladores</p>
              </Link>
              <Link
                href="/api/auth/logout"
                className="p-4 bg-red-500 rounded shadow-md transition-all flex flex-col items-center justify-center gap-2 hover:scale-110 duration-100 ease-in-out"
              >
                <LogoutIcon className="w-6 fill-white text-white" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
