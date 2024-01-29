export default function PatientForm() {
  return (
    <aside className="bg-white w-[680px] min-h-screen flex flex-col justify-center items-center gap-16 text-center px-16">
      <div>
        <p className="text-[32px] font-semibold text-black mb-4">
          Integrated<span className="text-primary">Care</span>
        </p>
        <p className="text-base text-black font-medium">
          Welcome! Let's get started...
        </p>
      </div>
      <form className="w-full flex flex-col justify-start items-start gap-7 text-[#383838]">
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
      </form>
    </aside>
  );
}
