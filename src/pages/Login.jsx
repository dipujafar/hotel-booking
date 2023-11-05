

import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from '../assets/login_animation.json'
import Aos from "aos";
import 'aos/dist/aos.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { singInWithGoogle, singInUser } = useAuth();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    //singIn user
    singInUser(email, password)
      .then(() => {
        toast("successfully login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => setError(error.message));
  };

  // login with google
  const handleGoogleSing = () => {
    singInWithGoogle()
      .then(() => {
        toast.success("Success Login with Google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

useEffect(() => {
  Aos.init(); 
}, []);
  return (
    <div className=" bg-blue-950"> 
    <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 min-h-screen ">
      <div className="md:w-2/6  mx-auto border bg-gray-200 rounded shadow-lg shadow-gray-500 p-5" data-aos="fade-up"
     data-aos-duration="1000">
        <h1 className="text-2xl font-medium mb-5 text-orange-400">
          LOGIN 
        </h1>
        <form onSubmit={handleLogin}>
          <div className="flex items-center mb-5 ">
            <label>
              <AiOutlineMail className="text-2xl"></AiOutlineMail>
            </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              required
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
          <div className="flex items-center mb-5 relative">
            <label>
              <RiLockPasswordLine className="text-2xl"></RiLockPasswordLine>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              id=""
              placeholder="Password"
              required
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
            <span onClick={() => setShow(!show)} className="absolute right-10">
              {show ? (
                <AiOutlineEye className="text-2xl"></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible className="text-2xl"></AiOutlineEyeInvisible>
              )}
            </span>
          </div>
          <input
            type="submit"
            value="Login"
            className=" w-full btn btn-outline btn-warning"
          />
          <p>
            Do not have account?{" "}
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </p>
          <p className="text-xl text-red-700">{error}</p>
          <fieldset className="mt-5 border rounded border-orange-400 p-2">
            <legend className="text-center text-xl text-orange-400">
              LOGIN WITH
            </legend>
            <p onClick={handleGoogleSing}>
              <BsGoogle className="text-2xl text-blue-500 cursor-pointer"></BsGoogle>
            </p>
          </fieldset>
        </form>
      </div>
      <div className="md:w-2/6 hidden md:flex">
        <Lottie animationData={loginAnimation} loop={false}></Lottie>
      </div>
    </div>
    </div>
  );
};

export default Login;