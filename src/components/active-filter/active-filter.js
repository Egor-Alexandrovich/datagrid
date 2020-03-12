import React from 'react';
import { connect } from 'react-redux';
import { filterChange } from '../../actions/index';
import './active-filter.css';

const ActiveFilter = ({filter, onFilterChange}) => {
    return (
        <div className="custom-control custom-switch">
            <input 
            onClick ={ onFilterChange }
            type="checkbox" className="custom-control-input" id="customSwitches"/>
            <label 
                className="custom-control-label" htmlFor="customSwitches">
            </label>
        </div>
    )
}
const mapStateToProps = ({filter}) => {
    return {
        filter: filter,
    }
  }
  const mapDispatchToProps =  {
    onFilterChange: filterChange,
}
export default connect(mapStateToProps, mapDispatchToProps ) (ActiveFilter);