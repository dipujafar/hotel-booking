import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';

const Navbar = ({ children }) => {
    const {user, logOut} = useAuth()

    //user LogOut
    const handleLogout =()=>{
        logOut()
        .then(()=>{
            toast.success("Successfully Logged Out")
        })
        .catch(error=>{
            console.log(error)
        })
    } 

    const navRoute = <>
        <li className='font-medium'>
            <NavLink
                to="/"
                className={({ isActive }) =>`
                    ${isActive ? "bg-orange-400" : "btn-outline"} btn btn-sm mr-2`
                }
            >
                Home
            </NavLink>
        </li>
        {user?.email ? <button onClick={handleLogout} className='btn btn-sm btn-outline mr-2'>Logout</button>: <li className='font-medium'>
            <NavLink
                to="/login"
                className={({ isActive }) =>`
                ${isActive ? "bg-orange-400" : "btn-outline"} btn btn-sm mr-2`
            }
            >
                Login
            </NavLink>
        </li>}
        

    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full  bg-base-300 shadow-md shadow-gray-300">
                    <div className='navbar max-w-7xl mx-auto'>
                    <div className="flex-none md:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Navbar Title</div>
                    <div className="flex-none hidden md:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            {navRoute}
                        </ul>
                    </div>
                    </div>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    {navRoute}
                </ul>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    children: PropTypes.node
};

export default Navbar;