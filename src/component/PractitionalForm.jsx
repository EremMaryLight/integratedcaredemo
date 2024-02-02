import { Link } from "react-router-dom";

export default function PractitionalForm() {
  return (
    <form className="w-full flex flex-col justify-center items-center gap-4 text-[#383838]">
      <section className="w-full flex justify-start items-center gap-6">
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
      <div className="w-full text-left relative">
        <label htmlFor="email" className="text-base font-semibold leading-6">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe@gmail.com"
          className="w-full pr-3 pl-8 py-2 text-base bg-transparent border border-[#B4B4B4] focus:border-[#383838] rounded-md outline-none"
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
      <div className="w-full text-left relative">
        <label htmlFor="password" className="text-base font-semibold leading-6">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          autoComplete="true"
          className="w-full pr-3 pl-8 py-2 text-base bg-transparent border border-[#B4B4B4] focus:border-[#383838] rounded-md outline-none"
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
      <section className="w-full flex justify-start items-center gap-6">
        <div className="w-[50%] text-left">
          <label htmlFor="regNum" className="text-base font-semibold leading-6">
            Registration Number
          </label>
          <input
            type="text"
            id="regNum"
            name="regNum"
            placeholder="FE12345678"
            className="w-full px-3 py-2 text-base bg-transparent border border-[#B4B4B4] focus:border-[#383838] rounded-md outline-none"
          />
        </div>
        <div className="w-[50%] text-left">
          <label
            htmlFor="specialty"
            className="text-base font-semibold leading-6"
          >
            Specialty
          </label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            placeholder="General Practitioner"
            className="w-full px-3 py-2 text-base bg-transparent border border-[#B4B4B4] focus:border-[#383838] rounded-md outline-none"
          />
        </div>
      </section>
      <div className="w-full text-left relative">
        <label
          htmlFor="workAddress"
          className="text-base font-semibold leading-6"
        >
          Work Address
        </label>
        <input
          type="text"
          id="workAddress"
          name="workAddress"
          placeholder="19, Herbert Macaulay Way, Obafemi Awolowo Road, Abuja"
          className="w-full px-3 py-2 text-base bg-transparent border border-[#B4B4B4] focus:border-[#383838] rounded-md outline-none"
        />
      </div>
      <div className="w-full text-left relative">
        <label
          htmlFor="workPhoneNo"
          className="text-base font-semibold leading-6"
        >
          Work Phone Number
        </label>
        <input
          type="number"
          id="workPhoneNo"
          name="workPhoneNo"
          placeholder="+2348102345678"
          className="w-full px-3 py-2 text-base bg-transparent border border-[#B4B4B4] focus:border-[#383838] rounded-md outline-none"
        />
      </div>
      <div className="w-full flex justify-start items-center -mt-2 gap-3">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="w-4 h-4 accent-primary bg-white outline-none"
        />
        <p className="text-base font-normal text-[#6A6A6A]">
          I agree with the{" "}
          <Link className="text-primary">terms of service</Link> and{" "}
          <Link className="text-primary">privacy policy</Link>.
        </p>
      </div>
      <button
        type="button"
        className="w-full bg-primary text-white py-3 rounded-lg text-base"
      >
        Sign Up
      </button>
      <p className="-mt-3 text-base text-[#515151] font-normal text-center">
        Already have an account?{" "}
        <Link className="text-primary" to={"/auth/login"}>
          Log in.
        </Link>
      </p>
    </form>
  );
}
