import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const cart = useLoaderData();

    return (
        <div>
            <div className='px-2 lg:px-16 py-2 md:py-8' style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <h2 className='text-center text-5xl font-bold py-5'>Applied Jobs</h2>
            </div>
            <div className='flex justify-end px-2 lg:px-16 py-2 md:py-8'>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-info normal-case m-1" style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>Filter By</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box border border-blue-400 w-52">
                        <li className="hover-bordered"><a>Remote</a></li>
                        <hr />
                        <li className="hover-bordered"><a>Onsite</a></li>
                    </ul>
                </div>
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