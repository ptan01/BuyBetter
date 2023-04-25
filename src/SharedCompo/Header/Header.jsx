import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../privetRoute_Context/ContextProvider';

const Header = () => {

    const {user , logOut} = useContext(AuthContext)
    console.log(user)

    const handleLogout =()=>{
        logOut()
        .then(()=>{
            alert('sign out successfully')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/details">Details</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Buy Better</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/details">Details</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex'>
                        <p className='text-purple-500 font-semibold border-purple-700 border mr-2 rounded-lg'>{user.displayName}</p>
                        <a onClick={handleLogout} className="btn btn-sm">Logout</a>
                        </div>
                        : <img className='w-[50px] h-[50px] rounded-xl' src="https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg" alt="" />

                }
            </div>
        </div>
    );
};

export default Header;