import React from 'react';
// import { connect } from 'react-redux';
// import { filterChange } from '../../actions/index';
import './active-filter.css';

const ActiveFilter = ({onFilterChange, id}) => {
    return (
        <div className="custom-control custom-switch">
            <input 
            onClick ={ onFilterChange }
            type="checkbox" className="custom-control-input" id={`customSwitches${id}`}/>
            <label 
                className="custom-control-label" htmlFor={`customSwitches${id}`}>
            </label>
        </div>
    )
}
export default ActiveFilter;