import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header className="w-full pt-10 bg-secondary font-montserrat">
        <nav className="w-full bg-white flex justify-between items-center">
          <div>
            <p className="text-3xl font-semibold leading-10">
              Integrated<span className="text-[#00A6FB]">Care</span>
            </p>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
