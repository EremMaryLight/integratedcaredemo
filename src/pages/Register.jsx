import React from 'react'
import { Link } from 'react-router-dom';
export default function Register() {
    return (
      <>
         <div>
          <section>
            <div>
            <p className="text-3xl font-semibold leading-10">
              Integrated<span className="text-[#00A6FB]">Care</span>
            </p>
            <p>...providing centralized repository for all patient information</p>
            </div>
          </section>
          <section>
            <div>
              <form>
                
<div class=" relative ">
    <label for="name-with-label" class="text-gray-700">
        First Name
    </label>
    <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="firstname" placeholder="firstname"/>
    </div>

                
<div class=" relative ">
    <label for="name-with-label" class="text-gray-700">
        Last Name
    </label>
    <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="lastname" placeholder="Your name"/>
    </div>

    <div class=" relative ">
    <label for="name-with-label" class="text-gray-700">
        Email
    </label>
    <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="lastname" placeholder="email"/>
    </div>
    <div class=" relative ">
    <label for="name-with-label" class="text-gray-700">
        Password
    </label>
    <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="lastname" placeholder="Your name"/>
    </div>
                <input type="checkbox"/><p>I agree to the terms of service and privacy policy</p>
                <button className="mt-6" fullWidth>
                  Sign Up
                </button>
                <p>Already have an account? <Link to ='Login'>Login</Link></p>
              </form>
            </div>
          </section>
         </div>


         
         
      </>
  );
}
