export default function ConfirmMail() {
  return (
    <section className="bg-[#FAFDFF] w-[720px] flex flex-col justify-center items-center py-9 rounded-2xl shadow-md">
      <div className="w-20 h-20 rounded-full bg-transparent border-8 border-[#B6E5FF] flex justify-center items-center mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M28.3335 35.4166H11.6668C5.5835 35.4166 2.0835 31.9166 2.0835 25.8333V14.1666C2.0835 8.08331 5.5835 4.58331 11.6668 4.58331H28.3335C34.4168 4.58331 37.9168 8.08331 37.9168 14.1666V25.8333C37.9168 31.9166 34.4168 35.4166 28.3335 35.4166ZM11.6668 7.08331C6.90016 7.08331 4.5835 9.39998 4.5835 14.1666V25.8333C4.5835 30.6 6.90016 32.9166 11.6668 32.9166H28.3335C33.1002 32.9166 35.4168 30.6 35.4168 25.8333V14.1666C35.4168 9.39998 33.1002 7.08331 28.3335 7.08331H11.6668Z"
            fill="#00A6FB"
          />
          <path
            d="M19.9995 21.4499C18.5995 21.4499 17.1828 21.0166 16.0995 20.1333L10.8828 15.9666C10.3495 15.5333 10.2495 14.7499 10.6828 14.2166C11.1161 13.6833 11.8995 13.5833 12.4328 14.0166L17.6495 18.1833C18.9161 19.2 21.0661 19.2 22.3328 18.1833L27.5495 14.0166C28.0828 13.5833 28.8828 13.6666 29.2995 14.2166C29.7328 14.7499 29.6495 15.55 29.0995 15.9666L23.8828 20.1333C22.8161 21.0166 21.3995 21.4499 19.9995 21.4499Z"
            fill="#00A6FB"
          />
        </svg>
      </div>
      <p className="text-[32px] text-black font-bold mb-4">Check Your Mail!</p>
      <p className="text-base font-normal leading-6 w-[550px] text-center mb-14">
        We have sent you a mail. Please click on the link in the message to
        verify your email address so that you can access the app.
      </p>

      <button
        className="w-[520px] py-4 bg-primary disabled:bg-blue-200 text-white font-semibold text-base"
        type="button"
      >
        Open Email App
      </button>
      <p className="text-base font-normal text-black mt-5">
        Didn't receive the mail? Check your spam folder.
      </p>
    </section>
  );
}
