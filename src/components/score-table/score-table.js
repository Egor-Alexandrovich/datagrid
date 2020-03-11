import React from 'react';
import { connect } from 'react-redux';
import { dataSort } from '../../actions/index';
import './score-table.css';

const ScoreTable = ({data, onSort}) => {
    const renderRow = (item, idx) => {
        const { rank, name, email, score, role, isActive, date} = item;
        return (
            <tr key={idx}>
                <td>{rank}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{score}</td>
                <td>{role}</td>
                <td>{isActive ? 'Yes' : 'No'}</td>
                <td>{date}</td>
            </tr>
        )
      }
    return (
        <table className="table table-hover">
          <thead className ="thead-light">
            <tr>
              <th onClick = {() => onSort('rank')}>#</th>
              <th  onClick = {() => onSort('name')}>
              Name</th>
              <th>Email</th>
              <th onClick = {() => onSort('score')}>Score</th>
              <th>Role</th>
              <th>isActive</th>
              <th onClick = {() => onSort('date')}>date of registration</th>
            </tr>
          </thead>
          <tbody>
            {data.map(renderRow)}
          </tbody>
        </table>
        
    );
  };
  
  const mapStateToProps = ({data}) => {
    return {
      data: data,
    }
  }
  const mapDispatchToProps =  {
    onSort: dataSort,

}

  export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable);
