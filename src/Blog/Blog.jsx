import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='px-2 lg:px-16 py-2 md:py-8' style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <h2 className='text-center text-5xl font-bold py-5'>Blog</h2>
            </div>
            <div className='px-2 lg:px-16 py-2 md:py-8 flex flex-col md:flex-row gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-lg font-semibold"><span className='text-blue-700'>Ques:</span> When should you use context API?</h2>
                        <p><span className='text-blue-700 font-semibold'>Ans:</span> React Context API solves the problem of props drilling. It allows us to share props or state with an indirect child or parent.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-lg font-semibold"><span className='text-blue-700'>Ques:</span> What is a custom hook?
                        </h2>
                        <p><span className='text-blue-700 font-semibold'>Ans:</span> Custom React hooks are an essential tool that let us add special, unique functionality to our React applications.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-lg font-semibold"><span className='text-blue-700'>Ques:</span> What is useRef?
                        </h2>
                        <p><span className='text-blue-700 font-semibold'>Ans:</span> useRef is a hook that allows to directly create a reference to the DOM element in the functional component.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-lg font-semibold"><span className='text-blue-700'>Ques:</span> What is useMemo?</h2>
                        <p><span className='text-blue-700 font-semibold'>Ans:</span> useMemo is a hook that is used in the functional component of React that returns a memoized value.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;