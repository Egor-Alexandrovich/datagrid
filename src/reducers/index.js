import fakeInitialState from '../fake-data/fake-data';
const initialState = {
    data: fakeInitialState,
    selectedColum: [
        {name: 'rank', isSelected: false, isSortUp: false, isClickOn: true, classTh:'col-1', label: 'Rank'},
        {name: 'name', isSelected: false, isSortUp: false, isClickOn: true, classTh:'col-2', label: 'name'},
        {name: 'email', isSelected: false, isSortUp: false, classTh:'col-3', label: 'email'},
        {name: 'score', isSelected: false, isSortUp: false, isClickOn: true, classTh:'col-1', label: 'score'},
        {name: 'role', isSelected: false, isSortUp: false, classTh:'col-2', label: ''},
        {name: 'isActive', isSelected: false, isSortUp: false, classTh:'col-1', label: 'Active'},
        {name: 'date', isSelected: false, isSortUp: false, isClickOn: true, classTh:'col-2', label: 'date'}
    ],
    filter: false,
    searchRequest: '',
    selectFilter: [],
}
const sortRow = ({data, selectedColum}, sortRow) => {
    const itemIndex = selectedColum.findIndex(({name}) => name === sortRow);
    let isSortDown = false;
    if(selectedColum[itemIndex].isSelected === true && selectedColum[itemIndex].isSortUp === true) {isSortDown = true}
    let newArray = [...data];
    const compareUp = (a,b) => {
        if (a[sortRow] < b[sortRow]) return -1;
        if (a[sortRow] > b[sortRow]) return 1;
      return 0;
    }
    const compareDown = (a,b) => {
        if (a[sortRow] < b[sortRow]) return 1;
        if (a[sortRow] > b[sortRow]) return -1;
      return 0;
    }
    if (isSortDown) {
        return newArray.sort(compareDown);
    }
    return newArray.sort(compareUp);
}
const selectColum = ({selectedColum}, sortColum) => {
    const newArray = selectedColum.map((element) => {
        const { isSortUp, isClickOn, label, classTh } = element;
        if(element.name === sortColum) {
            return { name: sortColum, isSelected: true, isSortUp: !isSortUp, isClickOn: isClickOn, label: label, classTh:classTh}
        }
        return {name: element.name, isSelected: false, isSortUp: false, isClickOn: isClickOn, label: label, classTh:classTh };
    });
    return newArray;
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_SORT' :
            return {
                ...state,
                data: sortRow(state, action.payload),
                selectedColum: selectColum(state, action.payload),
            }
        case 'FILTER_CHANGE' :
            return {
                ...state,
                filter: !state.filter 
            }
        case 'SEARCH_FILTER' :
            return {
                ...state,
                searchRequest: action.payload, 
            }
        case 'SELECT_FILTER' :
            return {
                ...state,
                selectFilter: action.payload, 
            }
        default: return state;
    }
    
}

export default reducer;