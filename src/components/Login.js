import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="name"
            className="p-4 my-4 w-full bg-grey-700"
          />
        )}
        <input
          type="text"
          placeholder="email address"
          className="p-4 my-4 w-full bg-grey-700"
        />

        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-grey-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
        <p onClick={toggleSignIn} className="py-4 cursor-pointer  text-white">
          {isSignInForm
            ? "are you new to netflix?sign up now"
            : "Already registered user.Sign in now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
