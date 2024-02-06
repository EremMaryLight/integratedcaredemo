import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { patientError, patientSignup } from "../authentication/PatientSignUp";
// Component for handling patient signup
export default function PatientForm() {
  // State variables for form data, errors, loading state, and checkbox
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // Refs to access input values
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  // Function to handle navigation
  const navigate = useNavigate();
  // Function to handle signup form submission
  const signUp = async () => {
    setIsLoading(true);
    // destructure required arguments
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // Validate required fields
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setIsLoading(false);
      setIsError("All fields must be filled");
      setTimeout(() => setIsError(null), 4000); // Clear error message after 4 seconds
      return;
    }
    // Attempt signup
    const success = await patientSignup(firstName, lastName, email, password);
    if (success) {
      // Clear form fields and navigate to sign-in page on success
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
      navigate("/auth/signin"); // Navigate to login page
    } else {
      setIsLoading(false);
      setIsError(patientError); // Display signup error message
      setTimeout(() => setIsError(null), 4000); // Clear error message after 4 seconds
    }
  };

  return (
    <form className="w-full flex flex-col justify-center items-center gap-7 text-[#383838] font-montserrat">
      {isError !== "Email already in-use" && isError !== "Invalid Email" ? (
        <p className="font-mono text-xl italic font-semibold text-red-700 -mb-7">
          {isError}
        </p>
      ) : null}
      <section className="flex items-center justify-start w-full gap-6">
        <div className="w-[50%] text-left relative">
          <label
            htmlFor="firstName"
            className="text-base font-semibold leading-6"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            className="w-full pr-3 pl-8 py-2 text-base bg-transparent border border-[#B4B4B4] focus:border-[#383838] rounded-md outline-none"
            ref={firstNameRef}
          />
          <svg
            className="w-6 h-6 dark:text-[#383838] text-white absolute bottom-2 left-1"
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
        </div>
        <div className="w-[50%] text-left relative">
          <label
            htmlFor="lastName"
            className="text-base font-semibold leading-6"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            className="w-full pr-3 pl-8 py-2 text-base bg-transparent border border-[#B4B4B4] focus:border-[#383838] rounded-md outline-none"
            ref={lastNameRef}
          />
          <svg
            className="w-6 h-6 dark:text-[#383838] text-white absolute bottom-2 left-1"
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
        </div>
      </section>
      <div className="relative w-full text-left">
        <label htmlFor="email" className="text-base font-semibold leading-6">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@gmail.com"
          className={`w-full pr-3 pl-8 py-2 text-base bg-transparent border focus:border-[#383838] rounded-md outline-none ${
            isError === "Email already in-use" || isError === "Invalid Email"
              ? "border-red-700"
              : "border-[#B4B4B4]"
          }`}
          ref={emailRef}
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
      {isError === "Email already in-use" || isError === "Invalid Email" ? (
        <p className="w-full text-[#DC2626] text-base font-medium text-left -mt-6">
          {isError}
        </p>
      ) : null}
      <div className="relative w-full text-left">
        <label htmlFor="password" className="text-base font-semibold leading-6">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          className="w-full pr-3 pl-8 py-2 text-base bg-transparent border border-[#B4B4B4] focus:border-[#383838] rounded-md outline-none"
          ref={passwordRef}
          autoComplete="true"
        />
        <svg
          className="w-6 h-6 dark:text-[#383838] text-white absolute bottom-2 left-1"
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
            d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H7a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z"
          />
        </svg>
        <svg
          className="w-6 h-6 dark:text-[#383838] text-white absolute bottom-2 right-3 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"
          />
          <path
            stroke="currentColor"
            strokeWidth="2"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
      <div className="flex items-center justify-start w-full gap-3 -mt-5">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          className="w-4 h-4 bg-white outline-none accent-primary"
        />
        <p className="text-base font-normal text-[#6A6A6A]">
          I agree with the{" "}
          <Link className="text-primary">terms of service</Link> and{" "}
          <Link className="text-primary">privacy policy</Link>.
        </p>
      </div>
      <button
        type="button"
        className="w-full py-3 text-base text-white rounded-lg bg-primary disabled:bg-blue-200"
        onClick={() => signUp()}
        disabled={!isChecked}
      >
        {isLoading ? <p className="animate-pulse">.....</p> : <p>Sign Up</p>}
      </button>
      <p className="-mt-3 text-base text-[#515151] font-normal text-center">
        Already have an account?{" "}
        <Link className="text-primary" to={"/auth/signin"}>
          Log in.
        </Link>
      </p>
    </form>
  );
}
