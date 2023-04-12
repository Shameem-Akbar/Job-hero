import React from 'react';
import salaryIcon from '../assets/salary.png'
import locationIcon from '../assets/location.png'

const AppliedJob = ({ job }) => {
    const { companyLogo, jobTitle, companyName, remoteOrOnsite, fulltimeOrPartTime, location, salary } = job;

    return (
        <div>
            <div className='mb-4 border rounded-xl p-4 flex flex-col md:flex-row'>
                <div className='bg-slate-100 w-40 h-40 py-16 px-4 mb-2 md:mb-0 rounded-lg'>
                    <img src={companyLogo} alt="" />
                </div>
                <div className='flex md:flex-row flex-col'>
                    <div>
                        <div className="md:pl-8 pb-4">
                            <h3 className='text-2xl font-bold'>{jobTitle}</h3>
                            <p className='font-medium text-xl' style={{ color: "#757575" }}>{companyName}</p>
                        </div>
                        <div className="md:px-8 mr-16 Md:mr-0 pb-4 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            <button className='btn btn-outline text-blue-500 hover:bg-blue-500 hover:border-blue-400 normal-case'>{remoteOrOnsite}</button>
                            <button className='btn btn-outline text-blue-500 hover:bg-blue-500 hover:border-blue-400 normal-case'>{fulltimeOrPartTime}</button>
                        </div>
                        <div className='flex flex-col mb-4 md:mb-0 md:flex-row md:pl-8'>
                            <div className='flex mr-6 mb-2 md:mb-0'>
                                <img src={locationIcon} alt="" />
                                <p className='ml-1'>{location}</p>
                            </div>
                            <div className='flex'>
                                <img src={salaryIcon} alt="" />
                                <p className='ml-1'>Salary: {salary}</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:my-14 md:ml-24'>
                        <button className="btn text-white normal-case text-lg border-none" style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;