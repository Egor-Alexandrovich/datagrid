import React from "react";
import { connect } from 'react-redux';
import { selectRow } from '../../actions/index';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./react-window-component.css";

const ReactWindowComponent = ({visibleItems, selectedRow, onSelectRow}) => {
  const itemsCount = visibleItems.length
  const activeRow = (item) => selectedRow.has(item) ? 'activeRow': null;
  const Row = ({ index, style }) => (
    <div className={`table-row ${activeRow(visibleItems[index].rank)}`}
      style={style}
      onClick = {(e) => {onSelectRow(e.shiftKey, visibleItems[index].rank)}}
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
  
  return (
    <AutoSizer>
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
    </AutoSizer>
  ); 
} 

const mapStateToProps = ({selectedRow}) => {
  return {
    selectedRow:selectedRow,
  }
}
const mapDispatchToProps =  {
  onSelectRow: selectRow,

}

export default connect(mapStateToProps, mapDispatchToProps) (ReactWindowComponent);