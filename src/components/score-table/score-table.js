import React from 'react';
import { connect } from 'react-redux';
import { dataSort } from '../../actions/index';
import './score-table.css';

const ScoreTable = ({data, selectedColum, onSort}) => {
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
                <td>{date}</td>
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
    return (
        <table className="table table-hover">
          <thead className ="thead-light">
            <tr>
              {selectedColum.map(renderThead)}
            </tr>
          </thead>
          <tbody>
            {data.map(renderRow)}
          </tbody>
        </table>
        
    );
  };
  
  const mapStateToProps = ({data, selectedColum}) => {
    return {
      data: data,
      selectedColum: selectedColum,
    }
  }
  const mapDispatchToProps =  {
    onSort: dataSort,

}

  export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable);
