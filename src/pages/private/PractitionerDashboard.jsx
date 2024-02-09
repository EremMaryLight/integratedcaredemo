import { useContext, useState } from "react";
import { GlobalPractitionerContext } from "../../context/GlobalPractitionerUser";
import docctorImg from "../../assets/pana.webp";
import folderImg from "../../assets/folder.webp";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function PractitionerDashboard() {
  const { userPractitioner } = useContext(GlobalPractitionerContext);
  const [date, setDate] = useState(new Date());
  return (
    <section className="flex flex-col items-end justify-start w-full px-6 py-8 gap-14">
      <div>
        <button className="px-3 py-2 text-sm text-white rounded-lg outline-none bg-primary font-lato">
          + Add Patient
        </button>
      </div>
      <section className="w-full h-[230px] bg-[#0025490D] flex justify-start items-start rounded-2xl py-4 px-3">
        <img
          src={docctorImg}
          alt="doctor"
          width={560}
          height={320}
          className="-translate-y-[104px]"
        />
        <div className="flex flex-col items-start justify-start capitalize">
          <p className="text-[36px] font-montserrat font-semibold text-black">
            Welcome{" "}
            {`${userPractitioner.firstName} ${userPractitioner.lastName}`}
          </p>
          <p className="font-lato font-normal text-base text-[#383838]">
            IntegratedCare provides you with all the data you need Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </p>
        </div>
      </section>
      <section className="grid w-full grid-cols-3 gap-10">
        <aside className="flex flex-col items-start justify-start w-full col-span-2 gap-6">
          <div className="flex items-center justify-between w-full">
            <p className="text-xl font-semibold leading-7 font-montserrat">
              Recent Patients
            </p>
            <button className="text-sm bg-transparent text-primary disabled:text-blue-300">
              View all
            </button>
          </div>
          <section className="w-full h-[344px] border border-[#CDCDCD] rounded-lg flex flex-col items-center justify-center gap-2">
            {/* display for when no patients. remember to set the conditions */}
            <img src={folderImg} alt="folder" width={140} height={140} />
            <p className="text-lg font-semibold font-lato">
              You don't have any patient yet.
            </p>
            <p className="font-lato text-base text-[#515151]">
              Start by adding a patient or use the search button above to find a
              patient
            </p>
          </section>
        </aside>
        <aside className="flex flex-col items-start justify-start col-span-1 gap-6">
          <p className="text-xl font-semibold leading-7 font-montserrat">
            Calender
          </p>
          <section>
            <Calendar
              className={
                "w-full h-[344px] border border-[#CDCDCD] rounded-lg overflow-hidden "
              }
            />
          </section>
        </aside>
      </section>
    </section>
  );
}
