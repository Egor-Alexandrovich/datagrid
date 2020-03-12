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
const selectFilter = (term) => {
    return {
        type: 'SELECT_FILTER',
        payload: term,
    }
}
export {
    dataSort,
    filterChange,
    searchFilter,
    selectFilter,
}
