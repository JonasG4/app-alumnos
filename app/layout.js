"use client";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  styles: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} min-h-screen w-full bg-slate-100 overflow-hidden`}
      >
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
