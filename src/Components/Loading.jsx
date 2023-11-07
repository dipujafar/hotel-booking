import Lottie from "lottie-react";
import loadingAnimation from '../assets/loading.json'

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
           <Lottie animationData={loadingAnimation} className="max-w-sm"></Lottie>
        </div>
    );
};

export default Loading;