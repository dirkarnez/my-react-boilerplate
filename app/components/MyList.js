import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'react-virtualized';

var list = newFilledArray(1000000);

function newFilledArray(len) {
  var rv = new Array(len);
  for (var i = 0; i < len; i++) {
    rv[i] = { 
      id: i,
      name: `Brian Vaughn_${i}`
    }
  }
  return rv;
}

export default class MyList extends React.PureComponent {
  constructor (props) {
    super(props);
  }

  rowRenderer ({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style        // Style object to be applied to row (to position it)
  }) {
    return (
      <div
        key={key}
        style={style}
      >
        {list[index].id + "-" + list[index].name}
      </div>
    )
  }

  render() {
    return (
      <List
        width={300}
        height={300}
        rowCount={list.length}
        rowHeight={20}
        rowRenderer={this.rowRenderer}
      />
    );
  }
}
