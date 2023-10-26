import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg) return;
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
         
          setErrorMsg(errorCode+"-"+errorMessage)
        });
    } else {
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg"
      >
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
          ref={email}
          type="text"
          placeholder="email address"
          className="p-4 my-4 w-full bg-grey-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-grey-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errormsg}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
