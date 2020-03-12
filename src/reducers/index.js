import fakeInitialState from '../fake-data/fake-data';
const initialState = {
    data: fakeInitialState,
    selectedColum: [
        {name: 'rank', isSelected: false, isSortUp: false, isClickOn: true},
        {name: 'name', isSelected: false, isSortUp: false, isClickOn: true},
        {name: 'email', isSelected: false, isSortUp: false},
        {name: 'score', isSelected: false, isSortUp: false, isClickOn: true},
        {name: 'role', isSelected: false, isSortUp: false},
        {name: 'isActive', isSelected: false, isSortUp: false},
        {name: 'date', isSelected: false, isSortUp: false, isClickOn: true}
    ],
    filter: false,
    searchRequest: '',
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
        const { isSortUp, isClickOn } = element;
        if(element.name === sortColum) {
            return { name: sortColum, isSelected: true, isSortUp: !isSortUp, isClickOn: isClickOn}
        }
        return {name: element.name, isSelected: false, isSortUp: false, isClickOn: isClickOn};
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
            console.log(state);
            return {
                ...state,
                searchRequest: action.payload, 
            }
        default: return state;
    }
    
}

export default reducer;