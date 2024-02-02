import { useState } from "react";
import patientDark from "../../assets/patient.webp";
import practitionalDark from "../../assets/practitional.webp";
import { useNavigate } from "react-router-dom";
export default function RoleSelection() {
  const [isPatient, setIsPatient] = useState(false);
  const [isPractitional, setIsPractitional] = useState(false);
  const [userType, setIsUserType] = useState(null);
  const navigate = useNavigate();
  return (
    <section className="w-full font-montserrat bg-white flex flex-col justify-center items-center text-center gap-20 py-10">
      <p className="text-[#383838] text-[36px] font-semibold max-w-[960px] leading-10">
        Select the option that best describes you and dive into a personalized
        experience...
      </p>
      <section className="flex justify-center items-center gap-20">
        <aside
          className={`w-[520px] px-14 py-10 border  rounded-lg cursor-pointer relative ${
            isPatient
              ? "border-primary text-primary"
              : "border-[#B4B4B4] text-[#6A6A6A]"
          }`}
          onClick={() => {
            setIsPatient(true);
            setIsPractitional(false);
            setIsUserType("patient");
          }}
        >
          <img
            src={patientDark}
            alt="patient"
            width={400}
            height={244}
            className="w-[390px] h-[234px] mb-10"
          />
          <p className="text-2xl font-semibold mb-5">Patients</p>
          <p className="text-lg font-normal leading-7">
            Access your dashboard where you can view and manage your health
            information...
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            fill="none"
            className={`w-8 h-8 absolute top-4 right-6 ${
              isPatient ? "block" : "hidden"
            }`}
          >
            <path
              d="M16.6668 28.3333L8.3335 19.9999L10.6835 17.6333L16.6668 23.6166L29.3168 10.9666L31.6668 13.3333M20.0002 3.33325C17.8115 3.33325 15.6442 3.76435 13.6221 4.60193C11.6 5.4395 9.76269 6.66716 8.21505 8.21481C5.08944 11.3404 3.3335 15.5796 3.3335 19.9999C3.3335 24.4202 5.08944 28.6594 8.21505 31.785C9.76269 33.3327 11.6 34.5603 13.6221 35.3979C15.6442 36.2355 17.8115 36.6666 20.0002 36.6666C24.4204 36.6666 28.6597 34.9106 31.7853 31.785C34.9109 28.6594 36.6668 24.4202 36.6668 19.9999C36.6668 17.8112 36.2357 15.644 35.3982 13.6219C34.5606 11.5998 33.3329 9.76245 31.7853 8.21481C30.2376 6.66716 28.4003 5.4395 26.3782 4.60193C24.3561 3.76435 22.1889 3.33325 20.0002 3.33325Z"
              fill="#00A6FB"
            />
          </svg>
        </aside>
        <aside
          className={`w-[520px] px-14 py-10 border rounded-lg cursor-pointer relative ${
            isPractitional
              ? "border-primary text-primary"
              : "border-[#B4B4B4] text-[#6A6A6A]"
          }`}
          onClick={() => {
            setIsPatient(false);
            setIsPractitional(true);
            setIsUserType("practitional");
          }}
        >
          <img
            src={practitionalDark}
            alt="practitional"
            width={400}
            height={244}
            className="w-[390px] h-[234px] mb-10"
          />
          <p className="text-2xl font-semibold mb-5">
            Healthcare Practitioners
          </p>
          <p className="text-lg font-normal leading-7">
            Access your dashboard where you can view, manage and monitor
            patient's data...
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            fill="none"
            className={`w-8 h-8 absolute top-4 right-6 ${
              isPractitional ? "block" : "hidden"
            }`}
          >
            <path
              d="M16.6668 28.3333L8.3335 19.9999L10.6835 17.6333L16.6668 23.6166L29.3168 10.9666L31.6668 13.3333M20.0002 3.33325C17.8115 3.33325 15.6442 3.76435 13.6221 4.60193C11.6 5.4395 9.76269 6.66716 8.21505 8.21481C5.08944 11.3404 3.3335 15.5796 3.3335 19.9999C3.3335 24.4202 5.08944 28.6594 8.21505 31.785C9.76269 33.3327 11.6 34.5603 13.6221 35.3979C15.6442 36.2355 17.8115 36.6666 20.0002 36.6666C24.4204 36.6666 28.6597 34.9106 31.7853 31.785C34.9109 28.6594 36.6668 24.4202 36.6668 19.9999C36.6668 17.8112 36.2357 15.644 35.3982 13.6219C34.5606 11.5998 33.3329 9.76245 31.7853 8.21481C30.2376 6.66716 28.4003 5.4395 26.3782 4.60193C24.3561 3.76435 22.1889 3.33325 20.0002 3.33325Z"
              fill="#00A6FB"
            />
          </svg>
        </aside>
      </section>
      <button
        disabled={!isPatient && !isPractitional}
        className="disabled:bg-[#b0cbd8f5] bg-primary text-white w-[400px] py-4 rounded-lg"
        onClick={() => navigate("/auth/signup", { state: userType })}
      >
        Continue
      </button>
    </section>
  );
}
