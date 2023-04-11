import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const cart = useLoaderData();
    console.log(cart);

    return (
        <div>
            <div className='px-2 lg:px-16 py-2 md:py-8' style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <h2 className='text-center text-5xl font-bold py-5'>Applied Jobs</h2>
            </div>
            <div>
                {
                    cart.map(job => <AppliedJob
                        key={job.id}
                        job={job}

                    ></AppliedJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;