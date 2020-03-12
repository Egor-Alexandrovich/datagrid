import React from 'react';
import { connect } from 'react-redux';
import { dataSort } from '../../actions/index';
import './score-table.css';

const ScoreTable = ({data, selectedColum, filter, searchRequest, onSort}) => {
    const renderRow = (item, idx) => {
        const { rank, name, email, score, role, isActive, date} = item;
        return (
            <tr key={idx}>
                <td>{rank}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{score * -1 }</td>
                <td>{role}</td>
                <td>{isActive ? 'Yes' : 'No'}</td>
                <td>{date.toLocaleString('ru', {year:'numeric', month: 'numeric', day: 'numeric'})}</td>
            </tr>
        )
      }
    const renderThead = (item) => {
        const {name, isSelected, isSortUp, isClickOn = false} = item;
        let isSortDown = false;
        if(isSelected === true && isSortUp === false) {isSortDown = true}
        if(isClickOn) {
        return (
            <th key={name}
                onClick = {() => onSort(name)}
                className = {isSelected ? "active" : null}
                >
                {name}
                <i className={`fa fa-arrow-circle-o-down ${isSortDown ? "active" : null } float-right`} />
                <i className={`fa fa-arrow-circle-o-up ${isSortUp ? "active" : null }  float-right`} />
            </th>
            )
        }
        return (
        <th key={name}>{name}</th>
        )
    }
    const isActiveFilter = (data, filter) => {
      if(filter){ 
        return data.filter((elem) => elem.isActive === true)
      }
      return data;
    }
    const mySearch = (data, term) => {
      if (term.length === 0) {
        return data;
      }
      return data.filter((item) => {
        return item.name.toLowerCase().indexOf(term.toLowerCase()) > - 1;
      });
    } 
    const visibleItems = isActiveFilter(mySearch(data,searchRequest), filter);
    return (
        <table className="table table-hover">
          <thead className ="thead-light">
            <tr>
              {selectedColum.map(renderThead)}
            </tr>
          </thead>
          <tbody>
            {visibleItems.map(renderRow)}
          </tbody>
        </table>
        
    );
  };
  
  const mapStateToProps = ({data, selectedColum, filter, searchRequest}) => {
    return {
      data: data,
      selectedColum: selectedColum,
      filter: filter,
      searchRequest: searchRequest,
    }
  }
  const mapDispatchToProps =  {
    onSort: dataSort,

}

  export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable);
