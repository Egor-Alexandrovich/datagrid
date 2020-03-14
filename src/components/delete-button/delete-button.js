import React from 'react';
import { connect } from 'react-redux';
import { deleteItems } from '../../actions/index';
import './delete-button.css'

const DeleteButton = ({selectedRow, onDeleteItems}) => {
    return (
        <div className="row">
            <button 
                className="btn btn-secondary btn-custom"
                onClick = { onDeleteItems }
                >Delete all select row
            </button>
        </div>
    );
}

const mapStateToProps = ({selectedRow}) => {
    return {
        selectedRow: selectedRow,
    }
  }
  const mapDispatchToProps =  {
    onDeleteItems: deleteItems,
}
export default connect(mapStateToProps, mapDispatchToProps ) (DeleteButton);