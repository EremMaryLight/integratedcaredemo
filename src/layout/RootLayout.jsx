import { Outlet, NavLink, useNavigate } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

export default function RootLayout() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("integratedUser"));
  return (
    <>
      <header className="flex flex-col items-start justify-start w-full bg-secondary font-montserrat">
        <section className="flex items-center justify-between w-full h-10 px-4 text-sm text-white">
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center justify-start gap-1 font-medium">
              <svg
                className="w-6 h-6 text-white dark:text-white"
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
                    fill="#cfcece"
                  ></path>
                </g>
              </svg>
              <p>integratedcare@gmail.com</p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-[#cfcece]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                />
              </svg>
              <p>+234 8113672801</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <a href="https://www.facebook.com" target="_blank">
              <img
                src={facebook}
                alt="facebook"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <img
                src={twitter}
                alt="twitter"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <img
                src={youtube}
                alt="youtube"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img
                src={linkedin}
                alt="linkedin"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img
                src={instagram}
                alt="instagram"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </a>
          </div>
        </section>
        <nav className="flex items-center justify-between w-full px-3 py-4 bg-white">
          <div>
            <p className="text-3xl font-semibold leading-10">
              Integrated<span className="text-[#00A6FB]">Care</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 text-base font-medium font-lato">
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
          <div className="flex items-center justify-start gap-3">
            {storedUser ? (
              <button
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white border rounded-lg bg-primary"
                onClick={() => navigate(`/${storedUser}/dashboard`)}
              >
                Dashboard
              </button>
            ) : (
              <>
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm border rounded-lg text-primary border-primary"
                  onClick={() => navigate("/auth/signin")}
                >
                  Login
                </button>
                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white border rounded-lg bg-primary"
                  onClick={() => navigate("/auth/selection")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
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
