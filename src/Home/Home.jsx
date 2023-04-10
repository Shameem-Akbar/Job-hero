import React from 'react';

import JobCategory from '../JobCategory/JobCategory';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <JobCategory></JobCategory>
        </div >
    );
};

export default Home;