import React from 'react';

const Category = (props) => {
    const { categoryLogo, categoryName, jobsAvailable } = props.category
    return (
        <div>
            <div className="card mx-auto mb-7 w-72 bg-slate-200 hover:bg-slate-300 cursor-pointer shadow-xl">
                <img src={categoryLogo} alt="" style={{ height: "8rem", width: "8rem", padding: "2rem" }} />
                <div className="md:pl-8 pl-4 pb-4">
                    <h3 className='text-xl font-bold'>{categoryName}</h3>
                    <p className='font-medium' style={{ color: "#A3A3A3" }}>{jobsAvailable} Jobs Available</p>

                </div>
            </div>
        </div>
    );
};

export default Category; <h2>hi</h2>