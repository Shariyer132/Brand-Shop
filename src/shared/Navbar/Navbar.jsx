import { Link, NavLink } from "react-router-dom";
import bandLogo from '../../assets/the7-logo-004.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import defaultPic from '../../assets/user.png';

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                console.log('log out');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const links = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-blue-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="normal-case text-xl"><img className="w-56" src={bandLogo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <button tabIndex={0} className="dropdown-content btn btn-sm z-[1] menu p-1 shadow bg-base-100 rounded-box w-40" onClick={handleLogOut}>LogOut</button>
                            </div>
                        </>
                            :
                            <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={defaultPic} />
                                    </div>
                                </label>
                                <Link to="/login">
                                    <button className="btn btn-sm">login</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;