import TopBar from "@/components/navs/topbar";

export const metadata = {
  title: "Alumnos | PRE UNIVO"
}

export default function AlumnosLayout({ children }) {
  
  return (
    <section className="w-full flex flex-col overflow-hidden max-h-screen">
      <TopBar />
      <div className="p-5 w-full overflow-hidden">{children}</div>
    </section>
  );
}
