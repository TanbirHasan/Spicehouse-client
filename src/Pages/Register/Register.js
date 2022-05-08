import React, { useRef, useState } from 'react';

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Sociallogin from '../../components/SocialLogin/SocialLogin';
import auth from '../../firebase.init';

const Register = () => {

  
  const [agree, setAgree] = useState(false);
    const navigate = useNavigate();



   const [createUserWithEmailAndPassword, user,loading, error] =
     useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

   const [updateProfile, updating, updateerror] = useUpdateProfile(auth);


   
   const nameref = useRef(" ");
   const emailref = useRef(" ");
   const passref = useRef(" ");

    if (loading || updating) {
      return <Loading></Loading>;
    }

      if (user) {
        navigate("/");
      }


   
   const handleSubmit = async (e) => {
     e.preventDefault();
     const name = nameref.current.value;
     const email = emailref.current.value;
     const password = passref.current.value;
     const agree = e.target.terms.checked;
     if (agree) {
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name });
       console.log("Updated profile");
     }

     console.log(email);
     console.log(password);

     e.reset();
   };
    return (
      <div>
        <Sociallogin/>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
             
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Register your account
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    ref={nameref}
                    autoComplete="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    ref={emailref}
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    ref={passref}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    onClick={() => setAgree(!agree)}
                    className={agree ? "text-primary" : "text-dark"}
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Accept Terms and Conditions
                  </label>
                </div>

              
              </div>

              <div>
                <button
                disabled={!agree}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;