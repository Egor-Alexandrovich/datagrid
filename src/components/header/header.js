import React from 'react';
import './header.css'

import ActiveFilter from '../active-filter';
import SearchPanel from '../search-panel';


const Header = () => {
    return (
        <header className="header">
            <h2>Score Table</h2>
            <div className="row">
                <div className ="col-6 filter-wrapper">
                    <span className = "custom-control__text">Active Only</span>
                    <ActiveFilter />
                </div>
                <div className ="col-6">
                    <SearchPanel />
                </div>
            </div>
        </header>
    );
}

export default Header;