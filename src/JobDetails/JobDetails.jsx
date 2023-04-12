import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import salaryIcon from '../assets/salary.png'
import locationIcon from '../assets/location.png'
import emailIcon from '../assets/emailIcon.png'
import phoneIcon from '../assets/phoneIcon.png'
import titleIcon from '../assets/titleIcon.png'
import { Link } from 'react-router-dom';
import { addToDb } from '../Utilities/fakeDb';

const JobDetails = () => {
    const [details, setDetails] = useState({});
    const { jobTitle, location, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, phone, email } = details;
    const { id } = useParams();
    const data = useLoaderData();
    useEffect(() => {
        if (data) {
            const detailsData = data.find(dt => dt.id == id)
            setDetails(detailsData);
        }
    }, []);

    const handleAddJobs = () => {
        addToDb(details.id);
    }

    return (
        <div>
            <div className='px-2 lg:px-16 py-2 md:py-8' style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <h2 className='text-center text-5xl font-bold py-5'>Job Details</h2>
            </div>
            <div className='px-2 lg:px-28 py-2 md:pt-20 md:pb-8 flex md:flex-row flex-col'>
                <div className='text-xl md:px-8 mb-4 md:mb-0'>
                    <p><span className='font-bold'>Job Description: </span><span className='font-medium' style={{ color: "#757575" }}>{jobDescription}</span></p>
                    <p className='my-1'><span className='font-bold'>Job Responsibility: </span><span className='font-medium' style={{ color: "#757575" }}>{jobResponsibility}</span></p>
                    <p><span className='font-bold'>Educational Requirements: </span><br /><span className='font-medium' style={{ color: "#757575" }}>{educationalRequirements}</span></p>
                    <p className='mt-1'><span className='font-bold'>Experiences: </span><br /><span className='font-medium' style={{ color: "#757575" }}>{experiences}</span></p>
                </div>
                <div className='md:w-3/5'>
                    <div className='bg-slate-100 rounded-xl  p-4 text-xl'>
                        <h2 className='mb-2 font-bold'>Job Details</h2>
                        <hr className='border-gray-400' />
                        <div className='flex mt-2'>
                            <img src={salaryIcon} alt="" />
                            <p className='ml-2'><span className='font-semibold'>Salary:</span> {salary} (Per Month)</p>
                        </div>
                        <div className='flex mt-2 mb-4'>
                            <img src={titleIcon} alt="" />
                            <p className='ml-2'><span className='font-semibold'>Job Title:</span> {jobTitle}</p>
                        </div>
                        <h2 className='mb-2 font-bold'>Contact Information</h2>
                        <hr className='border-gray-400' />
                        <div className='flex mt-2 mb-4'>
                            <img src={phoneIcon} alt="" />
                            <p className='ml-2'><span className='font-semibold'>Phone:</span> {phone}</p>
                        </div>
                        <div className='flex mt-2 mb-4'>
                            <img src={emailIcon} alt="" />
                            <p className='ml-2'><span className='font-semibold'>Email:</span> {email}</p>
                        </div>
                        <div className='flex mt-2 mb-2 md:mb-4'>
                            <img src={locationIcon} alt="" />
                            <p className='ml-2'><span className='font-semibold'>Address:</span> {location}</p>
                        </div>
                    </div>
                    <div className='mt-2 md:mt-4'>
                        <Link to="/applied-jobs" onClick={handleAddJobs} className="btn btn-block normal-case text-white text-lg border-none" style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails; <h2>Hell</h2>