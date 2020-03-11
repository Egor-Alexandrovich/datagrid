const dataSort = (dataId) => {
    return {
        type: 'DATA_SORT',
        payload: dataId,
    }
};

export {
    dataSort
}
