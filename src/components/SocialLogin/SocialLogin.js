import { Button } from "react-bootstrap";
import React from "react";

import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Sociallogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="error text-center mt-4" style={{ color: "red" }}>
          {error?.message}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <button
          className="flex justify-center my-3 bg-orange-600 text-white rounded-md px-2 py-2 mx-auto"
          onClick={() => signInWithGoogle()}
        >
          <i className="fa-brands fa-google"></i>
          Google Sign In
        </button>
        <button
          className="flex justify-center my-3 bg-orange-600 text-white rounded-md px-2 py-2 mx-auto"
          onClick={() => signInWithGithub()}
        >
          <i className="fa-brands fa-github"></i>
          Github Sign In
        </button>
      </div>
      {errorElement}
    </div>
  );
};

export default Sociallogin;
