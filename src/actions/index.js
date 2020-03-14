const dataSort = (dataId) => {
    return {
        type: 'DATA_SORT',
        payload: dataId,
    }
};
const filterChange = () => {
    return {
        type: 'FILTER_CHANGE',
    }
}
const searchFilter = (term) => {
    return {
        type: 'SEARCH_FILTER',
        payload: term,
    }
}
const AddDeleteColumn = (selectedOption) => {
    return {
        type: 'ADD_DELETE_COLUMN',
        payload: selectedOption,
    }
}
const selectFilter = (term) => {
    return {
        type: 'SELECT_FILTER',
        payload: term,
    }
}
const selectRow = (event, rank) => {
    return {
        type: 'SELECT_ROW',
        payload: rank,
        event: event
    }
}
const deleteItems = () => {
    return {
        type: 'DELETE_SELECT_ROW',
    }
}
const virtualizationFilter = () => {
    return {
        type: 'VIRTUALIZATION_CHANGE',
    }
}
export {
    dataSort,
    filterChange,
    searchFilter,
    selectFilter,
    selectRow,
    deleteItems,
    virtualizationFilter,
    AddDeleteColumn,
}
