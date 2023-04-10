import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const Statistics = () => {
    const data01 = [
        { name: "A1: Build your new year new mission website", marks: 60 },
        { name: "A2: Create a responsive G3-Architects website", marks: 60 },
        { name: "A3: CSS Framework Ed Tech landing page", marks: 60 },
        { name: "A4: Basic Javascript Problem Solving", marks: 60 },
        { name: "A5: Geometry Genius", marks: 60 },
        { name: "A6: AI Universe API and ES6", marks: 58 },
        { name: "A7: Make Quiz Hero a great quiz website", marks: 60 },
        { name: "A8: Simple React Knowledge cafe", marks: 60 }
    ];
    return (
        <div>
            <div className='px-2 lg:px-16 py-2 md:py-8' style={{ background: "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)" }}>
                <h2 className='text-center text-5xl font-semibold py-5'>Statistics</h2>
            </div>
            <div className='md:w-1/4 mx-auto md:mt-10'>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="marks"
                        isAnimationActive={false}
                        data={data01}
                        cx={200}
                        cy={200}
                        outerRadius={140}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;