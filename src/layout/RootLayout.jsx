import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

export default function RootLayout() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const storedUser = JSON.parse(localStorage.getItem("integratedUser"));

  return (
    <>
      <header className="flex flex-col items-start justify-start w-full bg-secondary font-montserrat">
        {/* Top Contact Bar */}
        <section className="flex items-center justify-between w-full h-10 px-4 text-sm text-white">
          {/* ... leave contact/social section unchanged ... */}
        </section>

        {/* Responsive Nav */}
        <nav className="w-full px-3 py-4 bg-white">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-3xl font-semibold leading-10">
                Integrated<span className="text-[#00A6FB]">Care</span>
              </p>
            </div>

            {/* Hamburger Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 text-base font-medium font-lato">
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
              <a href="#about-us" className="text-black">
                About Us
              </a>
              <a href="#offer" className="text-black">
                Our Offer
              </a>
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

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {storedUser ? (
                <button
                  className="px-4 py-2 text-sm text-white bg-primary rounded-lg"
                  onClick={() => navigate(`/${storedUser}/dashboard`)}
                >
                  Dashboard
                </button>
              ) : (
                <>
                  <button
                    className="px-4 py-2 text-sm border border-primary text-primary rounded-lg"
                    onClick={() => navigate("/auth/signin")}
                  >
                    Login
                  </button>
                  <button
                    className="px-4 py-2 text-sm text-white bg-primary rounded-lg"
                    onClick={() => navigate("/auth/selection")}
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="flex flex-col gap-4 mt-4 text-base font-medium font-lato md:hidden">
              <NavLink
                to={"/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b-2 border-b-primary"
                    : "text-black"
                }
              >
                Home
              </NavLink>
              <a href="#about-us" className="text-black" onClick={() => setIsOpen(false)}>
                About Us
              </a>
              <a href="#offer" className="text-black" onClick={() => setIsOpen(false)}>
                Our Offer
              </a>
              <NavLink
                to={"/contact-us"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b-2 border-b-primary"
                    : "text-black"
                }
              >
                Contact Us
              </NavLink>
              <div className="flex flex-col gap-2 pt-4">
                {storedUser ? (
                  <button
                    className="px-4 py-2 text-sm text-white bg-primary rounded-lg"
                    onClick={() => {
                      navigate(`/${storedUser}/dashboard`);
                      setIsOpen(false);
                    }}
                  >
                    Dashboard
                  </button>
                ) : (
                  <>
                    <button
                      className="px-4 py-2 text-sm border border-primary text-primary rounded-lg"
                      onClick={() => {
                        navigate("/auth/signin");
                        setIsOpen(false);
                      }}
                    >
                      Login
                    </button>
                    <button
                      className="px-4 py-2 text-sm text-white bg-primary rounded-lg"
                      onClick={() => {
                        navigate("/auth/selection");
                        setIsOpen(false);
                      }}
                    >
                      Register
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content + Footer stays same */}
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
 

      <footer className="flex flex-col items-start justify-start w-full gap-10 px-12 pb-8 text-white bg-secondary pt-28 font-poppins">
        <p className="text-2xl font-bold">
          Integrated<span className="text-primary">Care</span>{" "}
          <span className="text-lg font-medium leading-7 font-lato">
            provides a centralized repository for all patient information.
          </span>
        </p>
        <section className="flex justify-start items-start gap-[190px] font-lato border-b border-b-black pb-12">
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="text-2xl font-semibold">Company</p>
            <p className="text-lg font-medium">About us</p>
            <p className="text-lg font-medium">Our Services</p>
            <p className="text-lg font-medium">FAQs</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="text-2xl font-semibold">Products</p>
            <p className="text-lg font-medium">Features</p>
            <p className="text-lg font-medium">Mobile App</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="text-2xl font-semibold">Legal</p>
            <p className="text-lg font-medium">Legal</p>
            <p className="text-lg font-medium">Terms of service</p>
          </div>
          <div className="w-[320px] flex flex-col justify-start items-center gap-6">
            <p>
              Be the first to know about our new update. Get a mail in your
              inbox.
            </p>
            <div className="relative w-full text-left">
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
              className="w-full py-2 text-white rounded-lg bg-primary"
            >
              Submit
            </button>
          </div>
        </section>
        <section className="flex items-center justify-center w-full gap-7">
          <p className="text-base font-semibold capitalize font-lato">
            IntegratedCare 2024 all right reserved
          </p>
          <div className="flex items-center justify-start gap-8">
            <a href="https://www.facebook.com" target="_blank">
              <img
                src={facebook}
                alt="facebook"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img
                src={twitter}
                alt="twitter"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <img
                src={youtube}
                alt="youtube"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img
                src={linkedin}
                alt="linkedin"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img
                src={instagram}
                alt="instagram"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}
