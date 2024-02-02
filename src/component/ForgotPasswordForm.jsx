import { Link } from "react-router-dom";

export default function ForgotPasswordForm() {
  return (
    <>
      <div className="w-20 h-20 rounded-full bg-transparent border-8 border-[#B6E5FF] flex justify-center items-center mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.3002 37.9167C10.1336 37.9167 9.95023 37.9 9.80023 37.8834L6.18356 37.3834C4.45023 37.15 2.88356 35.6 2.61689 33.8333L2.11689 30.1834C1.95023 29.0167 2.45023 27.5 3.28356 26.65L10.6002 19.3333C9.4169 14.6 10.7836 9.60001 14.2669 6.15001C19.6669 0.766681 28.4502 0.750014 33.8669 6.15001C36.4836 8.76668 37.9169 12.25 37.9169 15.95C37.9169 19.65 36.4836 23.1333 33.8669 25.75C30.3669 29.2167 25.3836 30.5833 20.6836 29.3833L13.3502 36.7C12.6502 37.4333 11.4002 37.9167 10.3002 37.9167ZM24.0502 4.60001C21.1336 4.60001 18.2336 5.70001 16.0169 7.91668C13.0169 10.9 11.9336 15.2667 13.1836 19.3333C13.3169 19.7833 13.2002 20.25 12.8669 20.5833L5.03356 28.4167C4.75023 28.7 4.51689 29.4333 4.56689 29.8167L5.06689 33.4667C5.16689 34.1 5.85023 34.8167 6.48356 34.9L10.1169 35.4C10.5169 35.4667 11.2502 35.2333 11.5336 34.95L19.4002 27.1C19.7336 26.7667 20.2169 26.6667 20.6502 26.8C24.6669 28.0667 29.0502 26.9834 32.0502 23.9834C34.1836 21.85 35.3669 18.9833 35.3669 15.95C35.3669 12.9 34.1836 10.05 32.0502 7.91668C29.8836 5.71668 26.9669 4.60001 24.0502 4.60001Z"
            fill="#00A6FB"
          />
          <path
            d="M15.3165 34.2333C14.9998 34.2333 14.6831 34.1167 14.4331 33.8667L10.5998 30.0333C10.1165 29.55 10.1165 28.75 10.5998 28.2667C11.0831 27.7833 11.8831 27.7833 12.3665 28.2667L16.1998 32.1C16.6831 32.5833 16.6831 33.3833 16.1998 33.8667C15.9498 34.1167 15.6331 34.2333 15.3165 34.2333Z"
            fill="#00A6FB"
          />
          <path
            d="M24.167 19.5833C22.1003 19.5833 20.417 17.9 20.417 15.8333C20.417 13.7666 22.1003 12.0833 24.167 12.0833C26.2337 12.0833 27.917 13.7666 27.917 15.8333C27.917 17.9 26.2337 19.5833 24.167 19.5833ZM24.167 14.5833C23.4837 14.5833 22.917 15.15 22.917 15.8333C22.917 16.5166 23.4837 17.0833 24.167 17.0833C24.8503 17.0833 25.417 16.5166 25.417 15.8333C25.417 15.15 24.8503 14.5833 24.167 14.5833Z"
            fill="#00A6FB"
          />
        </svg>
      </div>
      <p className="text-[32px] text-black font-bold mb-4">Forgot Password?</p>
      <p className="text-base font-normal leading-6 w-[550px] text-center mb-14">
        Enter the email address associated with your account and we will send
        you a link to reset your password.
      </p>
      <form className="w-[530px] flex flex-col justify-start items-start gap-20 mb-4">
        <div className="w-full flex flex-col justify-start items-start relative">
          <label htmlFor="email" className="text-base font-semibold leading-6">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            className="w-full pr-3 pl-8 py-2 text-base bg-transparent border border-[#B4B4B4] focus:border-[#383838] rounded-md outline-none placeholder:text-[#CDCDCD]"
          />
          <svg
            className="w-6 h-6 dark:text-[#6A6A6A] text-white absolute bottom-2 left-1"
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
          className="w-full py-4 bg-primary disabled:bg-blue-200 text-white font-semibold text-base"
          type="button"
          disabled
        >
          Reset Password
        </button>
      </form>
      <p className="text-base font-normal text-black">
        Remember Password?{" "}
        <Link className="text-primary font-medium" to={"/auth/signin"}>
          Back to Log in.
        </Link>
      </p>
    </>
  );
}
