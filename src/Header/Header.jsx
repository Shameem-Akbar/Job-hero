import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow rounded bg-base-100 w-52">
                            <li className="hover-bordered"><a>Home</a></li>
                            <li className="hover-bordered"><a>Statistics</a></li>
                            <li className="hover-bordered"><a>Applied Jobs</a></li>
                            <li className="hover-bordered"><a>Blog</a></li>
                        </ul>
                    </div>
                    <a className="btn text-white normal-case font-bold text-2xl border-none" style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>Job Hero</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Statistics</a></li>
                        <li><a>Applied Jobs</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn normal-case text-lg border-none" style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>Start Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;