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
                <label>First Name</label>
                <input/>
                <label>Last Name</label>
                <input/>
                <label>Email Address</label>
                <input/>
                <label>Password</label>
                <input/>
                <input type="checkbox"/><p>I agree to the terms of service and privacy policy</p>
                <button>
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
