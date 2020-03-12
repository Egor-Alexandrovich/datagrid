import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFilter } from '../../actions/index';

import Select from 'react-select';
import './select-role.css';

const options = [
    { value: 'student', label: 'Student' },
    { value: 'activist', label: 'Activist' },
    { value: 'mentor', label: 'Mentor' },
    { value: 'admin', label: 'Admin' },
    { value: 'lector', label: 'Lector' }
  ]

class SelectRole extends Component {
state = {
    selectedOption: null,
    }
handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.onIputChange(selectedOption);
}
render(){
    return (
        <Select
        isMulti
        name="role"
        options={options}
        className="select-role"
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
    onIputChange: selectFilter,
  
  }
export default connect(mapStateToProps, mapDispatchToProps )(SelectRole);