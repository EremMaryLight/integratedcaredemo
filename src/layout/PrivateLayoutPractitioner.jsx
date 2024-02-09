import { useContext } from "react";
import {
  NavLink,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { GlobalPractitionerContext } from "../context/GlobalPractitionerUser";
import categoryImg from "../assets/category.png";
import settingsImg from "../assets/settings.png";
import faqsImg from "../assets/faqs.png";
import supportImg from "../assets/support.png";
import logoutImg from "../assets/logout.png";
import { userLogout } from "../authentication/userLogout";

export default function PrivateLayoutPractitioner() {
  const { userPractitioner } = useContext(GlobalPractitionerContext);
  const location = useLocation();
  const navigate = useNavigate();
  return userPractitioner && userPractitioner.confirmed ? (
    <section className="flex items-start justify-start font-montserrat">
      <aside className="w-[240px] h-screen sticky top-0 left-0 bg-[#004385] text-[#E6E6E6] py-9 flex flex-col justify-between items-start">
        <div className="px-4">
          <p className="text-2xl font-semibold text-white">
            Integrated<span className="text-primary">Care</span>
          </p>
        </div>
        <section className="flex flex-col items-start justify-start w-full gap-5 py-3">
          <NavLink
            to={"dashboard"}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#002549] w-full border-l-2 border-white font-semibold"
                : "text-[#E6E6E6] bg-transparent border-l-0 font-normal"
            }
          >
            <div className="flex items-center justify-start w-full gap-2 py-3 text-base pl-7 font-lato">
              <img src={categoryImg} alt="dashbaord" />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink
            to={"patients"}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#002549] w-full border-l-2 border-white font-semibold"
                : "text-[#E6E6E6] bg-transparent border-l-0 font-normal"
            }
          >
            <div className="flex items-center justify-start w-full gap-2 py-3 text-base pl-7 font-lato">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3a2.5 2.5 0 1 1 2-4.5M19.5 17h.5c.6 0 1-.4 1-1a3 3 0 0 0-3-3h-1m0-3a2.5 2.5 0 1 0-2-4.5m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3c0 .6-.4 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <p>Patients</p>
            </div>
          </NavLink>
          <NavLink
            to={"notification"}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#002549] w-full border-l-2 border-white font-semibold"
                : "text-[#E6E6E6] bg-transparent border-l-0 font-normal"
            }
          >
            <div className="flex items-center justify-start w-full gap-2 py-3 text-base pl-7 font-lato">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
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
                  d="M12 5.4V3m0 2.4a5.3 5.3 0 0 1 5.1 5.3v1.8c0 2.4 1.9 3 1.9 4.2 0 .6 0 1.3-.5 1.3h-13c-.5 0-.5-.7-.5-1.3 0-1.2 1.9-1.8 1.9-4.2v-1.8A5.3 5.3 0 0 1 12 5.4ZM8.7 18c.1.9.3 1.5 1 2.1a3.5 3.5 0 0 0 4.6 0c.7-.6 1.3-1.2 1.4-2.1h-7Z"
                />
              </svg>
              <p>Notification</p>
            </div>
          </NavLink>
          <NavLink
            to={"settings"}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#002549] w-full border-l-2 border-white font-semibold"
                : "text-[#E6E6E6] bg-transparent border-l-0 font-normal"
            }
          >
            <div className="flex items-center justify-start w-full gap-2 py-3 text-base pl-7 font-lato">
              <img src={settingsImg} alt="settings" />
              <p>Settings</p>
            </div>
          </NavLink>
          <NavLink
            to={"faq"}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#002549] w-full border-l-2 border-white font-semibold"
                : "text-[#E6E6E6] bg-transparent border-l-0 font-normal"
            }
          >
            <div className="flex items-center justify-start w-full gap-2 py-3 text-base pl-7 font-lato">
              <img src={faqsImg} alt="faqs" />
              <p>FAQs</p>
            </div>
          </NavLink>
          <NavLink
            to={"support"}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#002549] w-full border-l-2 border-white font-semibold"
                : "text-[#E6E6E6] bg-transparent border-l-0 font-normal"
            }
          >
            <div className="flex items-center justify-start w-full gap-2 py-3 text-base pl-7 font-lato">
              <img src={supportImg} alt="support" />
              <p>Support</p>
            </div>
          </NavLink>
        </section>
        <div
          className="flex items-center justify-start w-full gap-4 px-6 font-normal cursor-pointer font-lato"
          onClick={() => {
            userLogout();
            navigate("/auth/signin");
          }}
        >
          <img src={logoutImg} alt="logout" />
          <p>Logout</p>
        </div>
      </aside>
      <section className="w-full">
        <nav className="w-full h-[65px] bg-white flex justify-between items-center font-montserrat px-7 drop-shadow-sm">
          <section className="text-2xl font-semibold capitalize">
            <p>{location.pathname.split("/")[2]}</p>
          </section>
          <section className="w-[400px] border border-[#B4B4B4] rounded-md py-2 flex justify-start items-center">
            <input
              type="text"
              id="search"
              className="bg-transparent pl-4 pr-1 w-[90%] outline-none text-base font-lato text-black placeholder:text-[#B4B4B4]"
              placeholder="Search here"
            />
            <svg
              className="w-6 h-6 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </section>
          <section className="flex items-center justify-start h-full font-lato">
            <div className="w-10 h-10 overflow-hidden rounded-full bg-primary"></div>
            <div className="flex flex-col items-start justify-center h-full ml-2">
              <p className="text-sm font-medium leading-5 capitalize">
                {`${userPractitioner.firstName} ${userPractitioner.lastName}`}
              </p>
              <p className="text-xs font-normal leading-5 text-[#838383]">
                {userPractitioner.email}
              </p>
            </div>
            <div>
              <svg
                className="w-7 h-7 text-[#383838] ml-7"
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
                  d="M12 5.4V3m0 2.4a5.3 5.3 0 0 1 5.1 5.3v1.8c0 2.4 1.9 3 1.9 4.2 0 .6 0 1.3-.5 1.3h-13c-.5 0-.5-.7-.5-1.3 0-1.2 1.9-1.8 1.9-4.2v-1.8A5.3 5.3 0 0 1 12 5.4ZM8.7 18c.1.9.3 1.5 1 2.1a3.5 3.5 0 0 0 4.6 0c.7-.6 1.3-1.2 1.4-2.1h-7Z"
                />
              </svg>
            </div>
          </section>
        </nav>
        <Outlet />
      </section>
    </section>
  ) : userPractitioner && !userPractitioner.confirmed ? (
    <Navigate to={"/auth/confirm"} replace state={location.pathname} />
  ) : (
    <Navigate to={"/auth/signin"} replace state={location.pathname} />
  );
}
