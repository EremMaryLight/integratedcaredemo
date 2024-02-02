import { Link } from "react-router-dom";
import { ForgotPasswordForm } from "../../component";

export default function ForgotPassword() {
  return (
    <section className="w-full h-screen flex justify-center items-center font-montserrat">
      <section className="bg-[#FAFDFF] w-[720px] flex flex-col justify-center items-center py-9 rounded-2xl shadow-md">
        <ForgotPasswordForm />
      </section>
    </section>
  );
}
