import React from 'react';

import JobCategory from '../JobCategory/JobCategory';
import HomeBanner from '../HomeBanner/HomeBanner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>
        </div >
    );
};

export default Home;