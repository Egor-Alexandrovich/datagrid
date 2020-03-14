import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { selectRow } from '../../actions/index';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./react-window-component.css";

const ReactWindowComponent = ({visibleItems, selectedRow, virtualization, onSelectRow}) => {
  const itemsCount = visibleItems.length
  const activeRow = (item) => selectedRow.has(item) ? 'activeRow': '';
  const Row = ({ index, style }) => (
    <div className={`table-row ${activeRow(visibleItems[index].rank)}`}
      style={style}
      onClick = {(e) => {onSelectRow(e, visibleItems[index].rank)}}
      >
        <div className="col-1 table-row__item">{visibleItems[index].rank}</div>
        <div className="col-2 table-row__item">{visibleItems[index].name}</div>
        <div className="col-3 table-row__item">{visibleItems[index].email}</div>
        <div className="col-1 table-row__item">{visibleItems[index].score * -1 }</div>
        <div className="col-2 table-row__item">{visibleItems[index].role}</div>
        <div className="col-1 table-row__item">{visibleItems[index].isActive ? 'Yes' : 'No'}</div>
        <div className="col-2 table-row__item">{visibleItems[index].date.toLocaleString('ru', {year:'numeric', month: 'numeric', day: 'numeric'})}</div>
    </div>
  );
  const NotvirtualizRow = visibleItems.map((elem) => (
    <div className={`table-row-novirt col-12 ${activeRow(elem.rank)}`}
      onClick = {(e) => {onSelectRow(e, elem.rank)}}
      key = {elem.name}
      >
        <div className="col-1 table-row-novirt__item">{elem.rank}</div>
        <div className="col-2 table-row-novirt__item">{elem.name}</div>
        <div className="col-3 table-row-novirt__item">{elem.email}</div>
        <div className="col-1 table-row-novirt__item">{elem.score * -1 }</div>
        <div className="col-2 table-row-novirt__item">{elem.role}</div>
        <div className="col-1 table-row-novirt__item">{elem.isActive ? 'Yes' : 'No'}</div>
        <div className="col-2 table-row-novirt__item">{elem.date.toLocaleString('ru', {year:'numeric', month: 'numeric', day: 'numeric'})}</div>
    </div>
  )
  );
  
  return (
    virtualization ? <AutoSizer>
    {({ height, width }) => (
      <List
        className="List"
        height={height}
        itemCount={itemsCount}
        itemSize={40}
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer> : 
    <Fragment>
      {NotvirtualizRow}
    </Fragment>
  ); 
} 

const mapStateToProps = ({selectedRow, virtualization}) => {
  return {
    selectedRow:selectedRow,
    virtualization: virtualization,
  }
}
const mapDispatchToProps =  {
  onSelectRow: selectRow,

}

export default connect(mapStateToProps, mapDispatchToProps) (ReactWindowComponent);