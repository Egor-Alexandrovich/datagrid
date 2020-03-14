import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { selectRow } from '../../actions/index';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./react-window-component.css";

const ReactWindowComponent = ({visibleItems, selectedRow, virtualization, visibleColumn, onSelectRow}) => {
  const itemsCount = visibleItems.length
  const activeRow = (item) => selectedRow.has(item) ? 'activeRow': '';
  const Row = ({ index, style }) => (
    <div className={`table-row ${activeRow(visibleItems[index].rank)}`}
      style={style}
      onClick = {(e) => {onSelectRow(e.shiftKey, visibleItems[index].rank)}}
      >
        { visibleColumn.has('rank') ? <div className="col-1 table-row__item">{visibleItems[index].rank}</div> : null}
        { visibleColumn.has('name') ? <div className="col-2 table-row__item">{visibleItems[index].name}</div> : null}
        { visibleColumn.has('email') ? <div className="col-3 table-row__item">{visibleItems[index].email}</div> : null}
        { visibleColumn.has('score') ? <div className="col-1 table-row__item">{visibleItems[index].score * -1 }</div>: null}
        { visibleColumn.has('role') ? <div className="col-2 table-row__item">{visibleItems[index].role}</div>: null}
        { visibleColumn.has('isActive') ? <div className="col-1 table-row__item">{visibleItems[index].isActive ? 'Yes' : 'No'}</div> : null}
        { visibleColumn.has('date') ? <div className="col-2 table-row__item">{visibleItems[index].date.toLocaleString('ru', {year:'numeric', month: 'numeric', day: 'numeric'})}</div> : null}
    </div>
  );
  const NotvirtualizRow = visibleItems.map((elem) => (
    <div className={`table-row-novirt col-12 ${activeRow(elem.rank)}`}
      onClick = {(e) => {onSelectRow(e.shiftKey, elem.rank)}}
      key = {elem.name}
      >
        { visibleColumn.has('rank') ? <div className="col-1 table-row-novirt__item">{elem.rank}</div> :null}
        { visibleColumn.has('name') ? <div className="col-2 table-row-novirt__item">{elem.name}</div> :null}
        { visibleColumn.has('email') ? <div className="col-3 table-row-novirt__item">{elem.email}</div> : null}
        { visibleColumn.has('score') ? <div className="col-1 table-row-novirt__item">{elem.score * -1 }</div> : null}
        { visibleColumn.has('role') ? <div className="col-2 table-row-novirt__item">{elem.role}</div> : null}
        { visibleColumn.has('isActive') ? <div className="col-1 table-row-novirt__item">{elem.isActive ? 'Yes' : 'No'}</div>: null}
        { visibleColumn.has('date') ? <div className="col-2 table-row-novirt__item">{elem.date.toLocaleString('ru', {year:'numeric', month: 'numeric', day: 'numeric'})}</div> : null}
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

const mapStateToProps = ({selectedRow, virtualization, visibleColumn}) => {
  return {
    selectedRow:selectedRow,
    virtualization: virtualization,
    visibleColumn: visibleColumn,
  }
}
const mapDispatchToProps =  {
  onSelectRow: selectRow,

}

export default connect(mapStateToProps, mapDispatchToProps) (ReactWindowComponent);