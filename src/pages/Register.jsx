import { FcBusinessman } from "react-icons/fc";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import useAuth from "../hooks/useAuth";
import auth from "../firebase.confiq";
import Aos from "aos";
import 'aos/dist/aos.css';
import Lottie from "lottie-react";
import loginAnimation from '../assets/registation_amnimation.json'
import { Helmet } from "react-helmet";

const Register = () => {
  const { singInWithGoogle, createUser } = useAuth()
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
  

    setError("");

    // set some condition
    if (password.length < 6) {
      setError("Your Password length Must be 6 character or logger!");
      return;
    }
    if (!/[A-Z][!@#$%^&*()_+{}|:;<>,.?~]/.test(password)) {
      setError(
        "Your password should have a capital letter and a special character!"
      );
      return;
    }

    //create user
    createUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast("Successfully Create User");
            navigate(location?.state ? location.state : "/");
          })
          .catch();
      })
      .catch((error) => setError(error.message));
  };

  //login with google
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
    <div>
    <Helmet>
            <title>Register</title>
        </Helmet>
    <div className="bg-gradient-to-r from-blue-500 md:from-blue-950">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 min-h-screen">
    <div className="md:w-1/2  mx-auto "  data-aos="fade-up"
     data-aos-duration="1000">
      <div className="md:w-3/4 mx-auto border bg-gray-200 rounded shadow-xl shadow-gray-900 p-5">
        <h1 className="text-2xl font-medium mb-5 text-orange-400">
          REGISTER 
        </h1>
        <form onSubmit={handleRegister}>
          <div className="flex items-center mb-5">
            <label>
              <FcBusinessman className="text-2xl"></FcBusinessman>
            </label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
              required
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
          <div className="flex items-center mb-5">
            <label>
              <HiOutlinePhotograph className="text-2xl"></HiOutlinePhotograph>
            </label>
            <input
              type="text"
              name="photo"
              id=""
              placeholder="Photo URL"
              className="w-3/4 mx-auto py-1 px-2 bg-transparent border-b border-b-orange-400"
            />
          </div>
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
          <div className="flex items-center mb-5 relative ">
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
            value="Register"
            className=" w-full btn btn-outline btn-warning"
          />
          <p>
            Already have account?{" "}
            <Link to="/login" className="btn btn-link">
              Login
            </Link>{" "}
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
    </div>
    <div className="md:w-2/6 hidden md:flex">
        <Lottie animationData={loginAnimation}></Lottie>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Register;