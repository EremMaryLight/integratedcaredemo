import { Outlet, NavLink, useNavigate } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

export default function RootLayout() {
  const navigate = useNavigate();
  return (
    <>
      <header className="w-full pt-10 bg-secondary font-montserrat">
        <nav className="w-full bg-white flex justify-between items-center py-4 px-3">
          <div>
            <p className="text-3xl font-semibold leading-10">
              Integrated<span className="text-[#00A6FB]">Care</span>
            </p>
          </div>
          <div className="flex justify-center items-center gap-6 text-base font-medium font-lato">
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
              to={"/About"}
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
            <NavLink
              to={"/contact-us"}
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-b-primary"
                  : "text-black"
              }
            >
              Contact Us
            </NavLink>
          </div>
          <div className="flex justify-start items-center gap-3">
            <button
              className="flex justify-center items-center gap-2 text-primary text-sm px-4 py-2 rounded-lg border border-primary"
              onClick={() => navigate("/auth/signin")}
            >
              Login
            </button>
            <button
              className="flex justify-center items-center gap-2 text-white text-sm px-4 py-2 rounded-lg border bg-primary"
              onClick={() => navigate("/auth/selection")}
            >
              Register
            </button>
          </div>
        </nav>
      </header>
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
      <footer className="bg-secondary w-full pt-28 px-12 pb-8 flex flex-col justify-start items-start gap-10 text-white font-poppins">
        <p className="text-2xl font-bold">
          Integrated<span className="text-primary">Care</span>{" "}
          <span className="font-lato text-lg font-medium leading-7">
            provides a centralized repository for all patient information.
          </span>
        </p>
        <section className="flex justify-start items-start gap-[190px] font-lato border-b border-b-black pb-12">
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="text-2xl font-semibold">Company</p>
            <p className="text-lg font-medium">About us</p>
            <p className="text-lg font-medium">Our Services</p>
            <p className="text-lg font-medium">FAQs</p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="text-2xl font-semibold">Products</p>
            <p className="text-lg font-medium">Features</p>
            <p className="text-lg font-medium">Mobile App</p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="text-2xl font-semibold">Legal</p>
            <p className="text-lg font-medium">Legal</p>
            <p className="text-lg font-medium">Terms of service</p>
          </div>
          <div className="w-[320px] flex flex-col justify-start items-center gap-6">
            <p>
              Be the first to know about our new update. Get a mail in your
              inbox.
            </p>
            <div className="w-full text-left relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="w-full pr-3 pl-8 py-2 text-base bg-white text-black border focus:border-[#383838] rounded-md outline-none"
              />
              <svg
                className="w-6 h-6 dark:text-[#383838] text-white absolute bottom-2 left-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                    fill="#080341"
                  ></path>
                </g>
              </svg>
            </div>
            <button
              type="button"
              className="w-full bg-primary text-white rounded-lg py-2"
            >
              Submit
            </button>
          </div>
        </section>
        <section className="w-full flex justify-center items-center gap-7">
          <p className="font-lato text-base font-semibold capitalize">
            IntegratedCare 2024 all right reserved
          </p>
          <div className="flex gap-8 justify-start items-center">
            <img
              src={facebook}
              alt="facebook"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <img
              src={twitter}
              alt="twitter"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <img
              src={youtube}
              alt="youtube"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <img
              src={linkedin}
              alt="linkedin"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <img
              src={instagram}
              alt="instagram"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </section>
      </footer>
    </>
  );
}
