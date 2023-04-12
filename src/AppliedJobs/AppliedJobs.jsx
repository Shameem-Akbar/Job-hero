import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import { useState } from 'react';
import FilterJob from '../FilterJob/FilterJob';

const AppliedJobs = () => {
    const cart = useLoaderData();

    const [filterTextValue, setFilterTextValue] = useState('all');

    const filteredJobList = cart.filter((filterJob) => {
        if (filterTextValue === 'remote') {
            return filterJob.remoteOrOnsite == 'Remote';
        }
        else if (filterTextValue === 'onsite') {
            return filterJob.remoteOrOnsite == 'Onsite';
        }
        else if (filterTextValue === 'fullTime') {
            return filterJob.fulltimeOrPartTime == 'Full Time';
        }
        else if (filterTextValue === 'partTime') {
            return filterJob.fulltimeOrPartTime == 'Part Time';
        }
        else {
            return filterJob;
        }
    })
    const onFilterValueSelected = (filterValue) => {
        setFilterTextValue(filterValue);
    }

    return (
        <div>
            <div className='px-2 lg:px-16 py-2 md:py-8' style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <h2 className='text-center text-5xl font-bold py-5'>Applied Jobs</h2>
            </div>
            <div className='flex justify-end px-2 lg:px-80 py-2 md:pt-16'>
                <FilterJob filterValueSelected={onFilterValueSelected}></FilterJob>
            </div>
            <div className='px-2 lg:px-80 py-2 md:mb-16'>
                {
                    filteredJobList.map(job => <AppliedJob
                        key={job.id}
                        job={job}

                    ></AppliedJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;