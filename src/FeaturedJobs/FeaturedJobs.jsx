import React, { useEffect, useState } from 'react';
import Jobs from '../Jobs/Jobs';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/jobData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    });
    const [showAllJobs, setShowAll] = useState(false);
    const showAllButtonHandler = () => {
        setShowAll(true);
    };
    const displayJobs = showAllJobs ? jobs : jobs.slice(0, 4);


    return (
        <div>
            <div className='text-center mt-10 md:mt-24'>
                <h2 className='text-5xl font-extrabold'>Featured Jobs</h2>
                <p className='font-medium mt-6 mb-10' style={{ color: "#757575" }}>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-10 px-6 lg:px-72 py-2 md:pt-4'>
                {
                    displayJobs.map((job) => <Jobs
                        key={job.id}
                        job={job}
                    ></Jobs>)
                }
            </div>
            <div className='flex justify-center mb-4 md:mb-8'>
                {!showAllJobs && (
                    <button onClick={showAllButtonHandler} className="btn text-white normal-case text-lg border-none" style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>See All Jobs</button>
                )}
            </div>
        </div>
    );
};

export default FeaturedJobs;