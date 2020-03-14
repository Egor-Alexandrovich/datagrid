import React from 'react';
import { connect } from 'react-redux';
import { dataSort } from '../../actions/index';
import SelectRole from '../select-role';
import ReactWindowComponent from '../react-window-component';
import './score-table.css';

const ScoreTable = ({data, selectedColum, filter, searchRequest, selectFilter, virtualization, onSort}) => {
    const renderThead = (item) => {
        const {name, isSelected, isSortUp, isClickOn = false, label, classTh} = item;
        let isSortDown = false;
        const classCol = classTh + ' table-header__item';
        if(isSelected === true && isSortUp === false) {isSortDown = true}
        if(isClickOn) {
        return (
            <div key={name}
                onClick = {() => onSort(name)}
                className = {isSelected ? `${classCol} active` : classCol}
                >
                {label}
                <i className={`fa fa-arrow-circle-o-down ${isSortDown ? "active" : null }`} />
                <i className={`fa fa-arrow-circle-o-up ${isSortUp ? "active" : null }`} />
            </div>
            )
        }
        return (
          name === 'role' ? <div key={name} className = {classCol}><SelectRole /></div> : <div key={name} className = {classCol}>{label}</div>
        )
    }
    const isActiveFilter = (data, filter) => {
      if(filter){ 
        return data.filter((elem) => elem.isActive === true)
      }
      return data;
    }
    const selectedFilter = (data, filter) => {
      if(filter.length !==0){ 
        const arrSearchValue = filter.map((elem) => elem.value)
        // eslint-disable-next-line array-callback-return
        return data.filter((elem) => {
          if(arrSearchValue.some((element) => element === elem.role)){ return elem }
        });
      }
      return data;
    }
    const mySearch = (data, term) => {
      if (term.length === 0) {
        return data;
      }
      return data.filter((item) => {
        return item.name.toLowerCase().indexOf(term.toLowerCase()) > - 1 || item.email.toLowerCase().indexOf(term.toLowerCase()) > - 1;
      });
    }
    const visibleItems = selectedFilter((isActiveFilter(mySearch(data,searchRequest), filter)), selectFilter );
    // console.log(visibleItems);
    
    return (
      <div className ="container-lg score-table">
        <div className ="row table-header">
          {selectedColum.map(renderThead)}
        </div>
        <div className ={`row ${virtualization ? 'table-row__container': ''}`}>
        { visibleItems.length !== 0 ? <ReactWindowComponent visibleItems = { visibleItems }/> : null }
        </div>
      </div>
    );
  };
  
  const mapStateToProps = ({data, selectedColum, filter, searchRequest, selectFilter, virtualization}) => {
    return {
      data: data,
      selectedColum: selectedColum,
      filter: filter,
      searchRequest: searchRequest,
      selectFilter: selectFilter,
      virtualization: virtualization,
    }
  }
  const mapDispatchToProps =  {
    onSort: dataSort,

}

  export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable);






{/* <div className ="row table-header">
          <div className= "col-1 table-header__item">rank</div>
          <div className= "col-2 table-header__item">name</div>
          <div className= "col-3 table-header__item">email</div>
          <div className= "col-1 table-header__item">score</div>
          <div className= "col-2 table-header__item">role</div>
          <div className= "col-1 table-header__item">isActive</div>
          <div className= "col-2 table-header__item">date</div>
          
        </div> */}