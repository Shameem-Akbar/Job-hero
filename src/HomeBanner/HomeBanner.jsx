import React from 'react';
import image from '../assets/homepage.png'

const HomeBanner = () => {
    return (
        <div>
            <div className='px-2 lg:px-16 py-2 md:pt-4 md:pb-0 flex flex-col md:flex-row' style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <div>
                    <h2 className='font-bold md:font-extrabold text-5xl md:text-7xl'>One Step <br /> Closer To Your <br /> <span style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)", backgroundClip: "text", WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text" }}>Dream Job</span></h2>
                    <p className='md:text-lg md:font-medium my-3 md:my-4' style={{ color: "#757575" }}>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <a className="btn text-white normal-case text-lg border-none mb-5" style={{ background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)" }}>Get Started</a>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;