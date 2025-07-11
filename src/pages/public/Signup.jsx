import { Navigate, useLocation } from "react-router-dom";
import signupImage from "../../assets/signup.webp";
import { PatientForm, PractitionalForm } from "../../component";
export default function SignUp() {
  const location = useLocation();
  return (
    <section className="flex flex-col md:flex-row w-full  justify-start items-start font-montserrat">
      <aside className="bg-[#002549] md:w-[680px] md:h-screen flex flex-col justify-center items-center text-center md:sticky top-0 left-0">
        <img
          src={signupImage}
          alt="image"
          width={552}
          height={330}
          className="w-[522px] object-contain"
        />
        <p className="text-[32px] font-semibold text-white mb-4">
          Integrated<span className="text-primary">Care</span>
        </p>
        <p className="text-lg text-white font-medium">
          ...providing centralized repository for all patient information.
        </p>
      </aside>
      <aside className="bg-white md:w-[680px] md:min-h-screen flex flex-col justify-center items-center gap-16 text-center px-5 md:px-16 py-8">
        <div>
          <p className="text-[32px] font-semibold text-black mb-4">
            Integrated<span className="text-primary">Care</span>
          </p>
          <p className="text-base text-black font-medium">
            Welcome! Let's get started...
          </p>
        </div>
        {location.state === "patient" ? (
          <PatientForm />
        ) : location.state === "practitional" ? (
          <PractitionalForm />
        ) : (
          <Navigate to={"/auth/selection"} replace />
        )}
      </aside>
    </section>
  );
}
