import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header className="w-full pt-10 bg-secondary font-montserrat">
        <nav className="w-full bg-white flex justify-between items-center py-4 px-2">
          <div>
            <p className="text-3xl font-semibold leading-10">
              Integrated<span className="text-[#00A6FB]">Care</span>
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 text-base font-medium">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-b-primary"
                  : "text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-b-primary"
                  : "text-black"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to={"/offer"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-b-primary"
                  : "text-black"
              }
            >
              Our Offer
            </NavLink>
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
