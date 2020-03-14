import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddDeleteColumn } from '../../actions/index';

import Select from 'react-select';
import './select-column.css';

const options = [
    { value: 'rank', label: 'Rank' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' },
    { value: 'score', label: 'Score' },
    { value: 'role', label: 'Role' },
    { value: 'isActive', label: 'Active' },
    { value: 'date', label: 'Date' }
  ]

class SelectColumn extends Component {
state = {
    selectedOption: [],
    }
handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(selectedOption);
    let result = [];
    if(selectedOption !== null) {
      result = selectedOption.map((elem) => elem.value)
    }
    this.props.onIputChange(result);
}
render(){
    return (
        <Select
        defaultValue={options}
        isMulti
        name="role"
        options={options}
        className="basic-multi-select col-9 select-column"
        classNamePrefix="select"
        onChange={this.handleChange}
      />
    );
}
}

const mapStateToProps = ({selectFilter}) => {
    return {
        selectFilter: selectFilter,
    }
  }
  const mapDispatchToProps =  {
    onIputChange: AddDeleteColumn,
  
  }
export default connect(mapStateToProps, mapDispatchToProps )(SelectColumn);