import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init"
import Loading from "../../components/Loading/Loading"
import { toast } from 'react-toastify';

const Login = () => {
   const [agree, setAgree] = useState(false);

   const emailRef = useRef("");
   const passRef = useRef("");
   const navigate = useNavigate();
   const location = useLocation();

   let errorElement;

   let from = location.state?.from?.pathname || "/";

   const [signInWithEmailAndPassword, user, loading, error] =
     useSignInWithEmailAndPassword(auth);

   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

   if (loading || sending) {
     return <Loading></Loading>;
   }

   if (user) {
     navigate(from, { replace: true });
   }
     if (error) {
       errorElement = <p className="text-red">Error: {error?.message}</p>;
     }

   

   const handleSubmit = (e) => {
     e.preventDefault();
     const email = emailRef.current.value;
     const password = passRef.current.value;

     signInWithEmailAndPassword(email, password);
   };

     const resetPassword = async () => {
       const email = emailRef.current.value;
       if (email) {
         await sendPasswordResetEmail(email);
         toast("Sent email");
       } else {
         toast("please enter your email address");
       }
     };



  return (
    <div className="flex flex-col items-center mb-10">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  ref={emailRef}
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
                  ref={passRef}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  onClick={() => setAgree(!agree)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Accept Terms and Conditions
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={resetPassword}
                >
                  Reset password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={!agree}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      {errorElement}
    </div>
  );
};

export default Login;