import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-2 lg:px-16 py-2 md:py-4" style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow rounded bg-base-100 w-52">
                            <li className="hover-bordered"><ActiveLink to="/">Home</ActiveLink></li>
                            <li className="hover-bordered"><Link to="/statistics">Statistics</Link></li>
                            <li className="hover-bordered"><Link to="/applied-jobs">Applied Jobs</Link></li>
                            <li className="hover-bordered"><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <a className="btn text-white normal-case font-bold text-2xl border-none" style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>Job Hero</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/statistics">Statistics</Link></li>
                        <li><Link to="/applied-jobs">Applied Jobs</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn normal-case text-white text-lg border-none" style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>Apply Now</a>
                </div>
            </div>
        </div>
    );
};

export default Header;