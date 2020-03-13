import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import "./react-window-component.css";

const ReactWindowComponent = ({visibleItems}) => {
  const itemsCount = visibleItems.length
  const Row = ({ index, style }) => (
    <div className={"table-row"} style={style}>
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

export default ReactWindowComponent;