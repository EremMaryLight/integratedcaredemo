import access from "../../assets/no-access.webp";
import connection from "../../assets/connection.webp";
import patient from "../../assets/patient.webp";
import decision from "../../assets/decision.webp";
import efficiency from "../../assets/efficiency.webp";
export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden w-full min-h-[80vh] flex flex-col justify-center items-center text-center doctors bg-bottom bg-cover text-white font-montserrat">
        <p className="text-[44px] font-bold mb-4">
          SImplified Patient Data for Improved{" "}
          <span className="text-primary">Healthcare</span>
        </p>
        <p className="text-[28px] font-medium mb-11">
          Accessible anywhere, anytime
        </p>
        <button onClick="auth/signin" className="px-8 py-4 text-base font-semibold rounded-lg bg-primary w-fit">
          Get Started
        </button>
      </section>
      <section
        className="px-4 py-12 bg-[#F5F7FA] font-montserrat flex flex-col justify-center items-center"
        id="offer"
      >
        <p className="mb-3 text-lg md:text-3xl font-semibold text-primary">What We Offer</p>
        <p className="text-[40px] font-semibold text-black mb-20 text-center">
          Improved Quality of Healthcare
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <aside className="grid px-5 py-8 text-center bg-white rounded-lg place-items-center">
            <div className="w-[77px] h-[77px] bg-primary rounded-full flex justify-center items-center">
              <img src={access} alt="no-access" />
            </div>
            <p className="my-2 text-2xl font-semibold text-black">
              Streamlined Access
            </p>
            <p className="w-[266px] text-sm font-medium text-center leading-6">
              Instant access to comprehensive patient information for healthcare
              professionals.
            </p>
          </aside>
          <aside className="grid px-5 py-8 text-center bg-white rounded-lg place-items-center">
            <div className="w-[77px] h-[77px] bg-primary rounded-full flex justify-center items-center">
              <img src={connection} alt="connection" />
            </div>
            <p className="my-2 text-2xl font-semibold text-black">
              Connected Care
            </p>
            <p className="w-[266px] text-sm font-medium text-center leading-6">
              Bridging the gaps between hospitals to ensure a unified and
              collaborative approach.
            </p>
          </aside>
          <aside className="grid px-5 py-8 text-center bg-white rounded-lg place-items-center">
            <div className="w-[77px] h-[77px] bg-primary rounded-full flex justify-center items-center">
              <img src={patient} alt="patient" />
            </div>
            <p className="my-2 text-2xl font-semibold text-black">
              Patient-Centric Focus
            </p>
            <p className="w-[266px] text-sm font-medium text-center leading-6">
              Putting patients at the forefront by enabling better-informed and
              personalized care.
            </p>
          </aside>
          <aside className="grid px-5 py-8 text-center bg-white rounded-lg place-items-center">
            <div className="w-[77px] h-[77px] bg-primary rounded-full flex justify-center items-center">
              <img src={decision} alt="decision" />
            </div>
            <p className="my-2 text-2xl font-semibold text-black">
              Informed Decision-Making
            </p>
            <p className="w-[266px] text-sm font-medium text-center leading-6">
              Empowering doctors with the data they need for precise and timely
              decisions.
            </p>
          </aside>
          <aside className="grid px-5 py-8 text-center bg-white rounded-lg place-items-center">
            <div className="w-[77px] h-[77px] bg-primary rounded-full flex justify-center items-center">
              <img src={efficiency} alt="efficiency" />
            </div>
            <p className="my-2 text-2xl font-semibold text-black">
              Enhanced Efficiency
            </p>
            <p className="w-[266px] text-sm font-medium text-center leading-6">
              Streamlining processes for improved healthcare delivery.
            </p>
          </aside>
        </div>
      </section>
      <section
        className="px-3 font-montserrat w-full h-[404px] flex justify-center items-center divide-x-2 divide-black gap-3"
        id="about-us"
      >
        <div className="text-end w-full md:w-[553px]">
          <p
            id="about"
            className="text-lg font-semibold capitalize text-primary text-center"
          >
            About Us
          </p>
          <p className="text-[20px] md:text-[40px] font-semibold text-black leading-10 text-center">
            Revolutionized Healthcare Through Centralized Data
          </p>
        </div>
        <p className="md:w-[510px] px-2 text-center text-sm">
          We're dedicated to transforming patient care by providing a
          centralized hub for comprehensive medical data. With us, healthcare
          professionals can access crucial information seamlessly, ensuring
          better-informed decisions and ultimately improving patient outcomes.
        </p>
      </section>
      <section className="flex flex-col items-center justify-start w-full gap-10 px-12 pb-8 text-white bg-secondary pt-28 font-poppins">
        <p className=" text-2xl md:text-[40px] font-semibold ">How To Register</p>
        <section className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-[150px]">
          <div className="flex items-center justify-start gap-6">
            <p className="px-4 py-1 text-lg font-semibold text-black bg-white rounded-full">
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
          <div className="flex items-center justify-start gap-6">
            <p className="px-4 py-1 text-lg font-semibold text-black bg-white rounded-full">
              2
            </p>
            <div>
              <p className="text-2xl font-semibold leading-8">Upload Record</p>
              <p className="w-[281px] text-base font-medium leading-6">
                Sign up with your name, number, email and password
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-6">
            <p className="px-4 py-1 text-lg font-semibold text-black bg-white rounded-full">
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
        <aside className="w-[350px] md:w-[882px] h-[281px] flex flex-col justify-center items-center gap-3 bg-white border-t-4 border-t-black font-montserrat text-center rounded-b-lg shadow-md absolute -bottom-20 left-[50%] -translate-x-[50%]">
          <p className="text-xl md:text-3xl font-semibold leading-10">Get Started Today</p>
          <p className="w-full text-sm md:text-lg md:w-[715px] text-center font-medium leading-6 text-black/65">
            Embark on Your Health Journey Today! Get started with our healthcare
            platform for seamless access to centralized patient data and
            personalized care.
          </p>
          <button className="px-10 py-3 mt-3 text-base font-semibold text-white rounded-lg bg-primary">
            Get Started
          </button>
        </aside>
      </section>
    </>
  );
}
