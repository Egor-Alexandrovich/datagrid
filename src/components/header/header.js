import React from 'react';
import { connect } from 'react-redux';
import { filterChange, virtualizationFilter } from '../../actions/index';
import './header.css'

import ActiveFilter from '../active-filter';
import SearchPanel from '../search-panel';
import DeleteButton from '../delete-button';
import SelectColumn from '../select-column';

const Header = ({onActiveFilterChange, onVirtualizationFilter, virtualization}) => {
    return (
        <header className="header">
            <h2>Score Table</h2>
            <div className="row">
                <div className ="col-3 filter-wrapper">
                    <span className = "custom-control__text">Active Only</span>
                    <ActiveFilter onFilterChange = {onActiveFilterChange} id = {1} />
                </div>
                <div className ="col-3 filter-wrapper">
                    <span className = "custom-control__text">
                        {virtualization ? 'Virtualization On': 'Virtualization Off'}
                    </span>
                    <ActiveFilter onFilterChange = { onVirtualizationFilter } id = {2} />
                </div>
                <div className ="col-6">
                    <SearchPanel />
                </div>
            </div>
            <div className="row align-items-center">
            <SelectColumn />
            <DeleteButton />
            </div>
        </header>
    );
}
const mapStateToProps = ({filter, virtualization}) => {
    return {
        filter: filter,
        virtualization: virtualization,
    }
  }
  const mapDispatchToProps =  {
    onActiveFilterChange: filterChange,
    onVirtualizationFilter: virtualizationFilter,
}
export default connect(mapStateToProps, mapDispatchToProps ) (Header);;