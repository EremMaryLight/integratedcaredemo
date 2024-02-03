export default function About() {
  return (
    <>
      <section className="font-montserrat w-full h-[404px] flex justify-center items-center divide-x-2 divide-black gap-3">
        <div className="text-end w-[553px]">
          <p
            id="about"
            className="text-primary text-lg font-semibold capitalize"
          >
            About Us
          </p>
          <p className="text-[40px] font-semibold text-black leading-10">
            Revolutionized Healthcare Through Centralized Data
          </p>
        </div>
        <p className="w-[510px] px-2 text-justify">
          We're dedicated to transforming patient care by providing a
          centralized hub for comprehensive medical data. With us, healthcare
          professionals can access crucial information seamlessly, ensuring
          better-informed decisions and ultimately improving patient outcomes.
        </p>
      </section>
      <section className="bg-secondary w-full pt-28 px-12 pb-8 flex flex-col justify-start items-start gap-10 text-white font-poppins">
        <p className="text-[40px] font-semibold">How To Register</p>
        <section className="grid grid-cols-3 gap-[150px]">
          <div className="flex justify-start items-center gap-1">
            <p className="text-lg font-semibold bg-white text-black px-4 py-1 rounded-full">
              1
            </p>
            <div>
              <p className="text-2xl font-semibold leading-8">
                Create an account
              </p>
              <p className="w-[281px] text-base font-medium leading-6">
                Sign up with your name, number, email and password
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-1">
            <p className="text-lg font-semibold bg-white text-black px-4 py-1 rounded-full">
              2
            </p>
            <div>
              <p className="text-2xl font-semibold leading-8">Upload Record</p>
              <p className="w-[281px] text-base font-medium leading-6">
                Sign up with your name, number, email and password
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-1">
            <p className="text-lg font-semibold bg-white text-black px-4 py-1 rounded-full">
              3
            </p>
            <div>
              <p className="text-2xl font-semibold leading-8">Upload Record</p>
              <p className="w-[281px] text-base font-medium leading-6">
                Access Records
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full h-[360px] bg-white relative">
        <aside className="w-[882px] h-[281px] flex flex-col justify-center items-center gap-3 bg-white border-t-4 border-t-black font-montserrat text-center rounded-b-lg shadow-md absolute -bottom-20 left-[50%] -translate-x-[50%]">
          <p className="text-3xl font-semibold leading-10">Get Started Today</p>
          <p className="w-[715px] text-base font-medium leading-6 text-black/65">
            Embark on Your Health Journey Today! Get started with our healthcare
            platform for seamless access to centralized patient data and
            personalized care.
          </p>
          <button className="text-base font-semibold text-white bg-primary px-10 py-3 rounded-lg mt-3">
            Get Started
          </button>
        </aside>
      </section>
    </>
  );
}
