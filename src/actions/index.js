const dataLoaded = (newData) => {
    return {
        type: 'DATA_LOADED',
        payload: newData,
    }
};

export {
    dataLoaded
}
