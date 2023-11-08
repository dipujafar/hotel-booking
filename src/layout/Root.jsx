import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



const Root = () => {
    return (
        <div>            
            <Navbar>
                <Outlet></Outlet>
            </Navbar>
        </div>
    );
};

export default Root;