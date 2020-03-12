import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFilter } from '../../actions/index';

import './search-panel.css';

class SearchPanel extends Component {
  state = {
    term: '',
  }
  onSearchChange = (event) => {
    const term  = event.target.value;
    this.setState({term});
    this.props.onSearch(term);
  };
  render() {
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search"
                value = { this.state.term } 
                onChange ={ this.onSearchChange }
                />
    );
  }
}
const mapStateToProps = ({searchRequest}) => {
  return {
    searchRequest: searchRequest,
  }
}
const mapDispatchToProps =  {
  onSearch: searchFilter,

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);