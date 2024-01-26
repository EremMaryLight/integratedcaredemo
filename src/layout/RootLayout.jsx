import { NavLink, Outlet } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
// Rootlayout component
export default function RootLayout() {
  return (
    <>
      <header className="w-full pt-10 bg-secondary font-montserrat">
        <nav className="w-full bg-white flex justify-between items-center py-4 px-3">
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
          <div>
            <button className="flex justify-center items-center gap-2 text-primary text-sm px-3 py-1 rounded-lg border border-primary">
              <p>Signup/Login</p>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-secondary w-full pt-28 px-12 pb-8 flex flex-col justify-start items-start gap-10 text-white font-poppins">
        <p className="text-3xl font-semibold">IntegratedCare</p>
        <section className="grid grid-cols-3 gap-[200px]">
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="text-2xl font-medium">Company</p>
            <p className="text-sm font-normal">About us</p>
            <p className="text-sm font-normal">Our Services</p>
            <p className="text-sm font-normal">FAQs</p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="text-2xl font-medium">Products</p>
            <p className="text-sm font-normal">Features</p>
            <p className="text-sm font-normal">Mobile App</p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="text-2xl font-medium">Legal</p>
            <p className="text-sm font-normal">Legal</p>
            <p className="text-sm font-normal">Terms of service</p>
          </div>
        </section>
        <p className="font-poppins text-3xl font-semibold">
          IntegratedCare{" "}
          <span className="text-xl">
            provides centralized repository for all patient information.
          </span>
        </p>
        <div className="flex gap-8 justify-start items-center">
          <img
            src={facebook}
            alt="facebook"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <img
            src={twitter}
            alt="twitter"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <img
            src={youtube}
            alt="youtube"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <img
            src={linkedin}
            alt="linkedin"
            width={30}
            height={30}
            className="cursor-pointer"
          />
          <img
            src={instagram}
            alt="instagram"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
      </footer>
    </>
  );
}
