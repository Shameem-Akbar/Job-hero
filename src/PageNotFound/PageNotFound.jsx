import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-purple-300 to-blue-200">
                <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                        <div className="border-t border-gray-200 text-center pt-8">
                            <h1 className="text-9xl font-bold text-purple-400">404</h1>
                            <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                            <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                            <button className="bg-gradient-to-r to-purple-400 from-blue-500 hover:to-purple-500 hover:from-blue-600 text-white font-semibold text-xl px-6 py-3 rounded-md mr-6">
                                <Link to="/">Go To Home</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;