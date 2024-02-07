export default function ConfirmMailApprove({ onclick }) {
  return (
    <section className="bg-[#FAFDFF] w-[720px] flex flex-col justify-center items-center py-9 rounded-2xl shadow-md">
      <div className="w-20 h-20 rounded-full bg-transparent border-8 border-[#B6E5FF] flex justify-center items-center mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0,0,256,256"
        >
          <g
            fill="#3498ff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M42.875,8.625c-0.03125,0.00781 -0.0625,0.01953 -0.09375,0.03125c-0.26172,0.06641 -0.48828,0.23438 -0.625,0.46875l-20.4375,31.6875l-14.0625,-12.6875c-0.24609,-0.3125 -0.65625,-0.44922 -1.04297,-0.34766c-0.38672,0.10156 -0.67187,0.42578 -0.73047,0.82031c-0.05859,0.39453 0.12109,0.78516 0.46094,0.99609l14.90625,13.5c0.21875,0.19141 0.51172,0.27734 0.80078,0.23438c0.28906,-0.04297 0.54297,-0.20703 0.69922,-0.45312l21.09375,-32.6875c0.23047,-0.32812 0.24219,-0.76172 0.03125,-1.10156c-0.21094,-0.33984 -0.60547,-0.51953 -1,-0.46094z"></path>
            </g>
          </g>
        </svg>
      </div>
      <p className="text-[32px] text-black font-bold mb-4">Account Verified</p>
      <p className="text-base font-normal leading-6 w-[550px] text-center mb-14">
        The email address is now a verified account. You can now proceed to
        access the app.
      </p>

      <button
        className="w-[520px] py-4 bg-primary disabled:bg-blue-200 text-white font-semibold text-base"
        type="button"
        onClick={onclick}
      >
        Continue
      </button>
    </section>
  );
}
