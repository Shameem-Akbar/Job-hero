import React from 'react';
import salaryIcon from '../assets/salary.png'
import locationIcon from '../assets/location.png'
import { Link } from 'react-router-dom';

const Jobs = (props) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrPartTime, location, salary } = props.job
    return (
        <div>
            <div className="card border border-slate-300 mx-auto mb-7 bg-slate-100 hover:bg-slate-200 cursor-pointer shadow-xl">
                <img className='pl-8 pr-6 pt-6 pb-2' src={companyLogo} alt="" style={{ height: "6rem", width: "12rem" }} />
                <div className="md:pl-8 pl-4 pb-4">
                    <h3 className='text-2xl font-bold'>{jobTitle}</h3>
                    <p className='font-medium text-xl' style={{ color: "#757575" }}>{companyName}</p>
                </div>
                <div className="md:px-8 px-4 pb-4 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    <button className='btn btn-outline text-blue-500 hover:bg-blue-500 hover:border-blue-400 normal-case'>{remoteOrOnsite}</button>
                    <button className='btn btn-outline text-blue-500 hover:bg-blue-500 hover:border-blue-400 normal-case'>{fulltimeOrPartTime}</button>
                </div>
                <div className='flex md:pl-8 pl-4 pb-4'>
                    <div className='flex mr-6'>
                        <img src={locationIcon} alt="" />
                        <p className='ml-1'>{location}</p>
                    </div>
                    <div className='flex'>
                        <img src={salaryIcon} alt="" />
                        <p className='ml-1'>Salary: {salary}</p>
                    </div>
                </div>
                <div className='md:pl-8 pl-4 pb-6'>
                    <Link to="/jobDetails" className="btn text-white normal-case text-lg border-none" style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Jobs;