import React from 'react';

const FilterJob = (props) => {

    function onFilterValueChanged(event) {
        props.filterValueSelected(event.target.value)
    }
    return (
        <div>
            <select name='isAvailable' onChange={onFilterValueChanged} className="select w-full max-w-xs border-2 border-slate-400">
                <option disabled>Sort By</option>
                <option value="all">All</option>
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
            </select>
        </div>
    );
};

export default FilterJob;