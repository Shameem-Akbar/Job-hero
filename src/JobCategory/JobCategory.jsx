import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const JobCategory = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categoryData.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    })
    return (
        <div>
            <div className='text-center mt-10 md:mt-24'>
                <h2 className='text-5xl font-extrabold'>Job Category List</h2>
                <p className='font-medium mt-6 mb-10' style={{ color: "#757575" }}>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly mb-5 px-2 lg:px-16 md:py-4'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;