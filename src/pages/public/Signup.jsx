import signupImage from "../../assets/signup.webp";
import { PatientForm } from "../../component";
export default function SignUp() {
  return (
    <section className="w-full flex justify-start items-start font-montserrat">
      <aside className="bg-[#002549] w-[680px] min-h-screen flex flex-col justify-center items-center text-center">
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
      <PatientForm />
    </section>
  );
}
