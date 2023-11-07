import Lottie from "lottie-react";
import Error from '../assets/404_Error.json'


const ErrorPage = () => {
    return (
        <div className="h-screen flex items-center ">
            <Lottie animationData={Error} className="max-w-sm mx-auto"></Lottie>
        </div>
    );
};

export default ErrorPage;