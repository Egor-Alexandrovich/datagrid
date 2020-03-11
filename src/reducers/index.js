import fakeInitialState from '../fake-data/fake-data';
const initialState = {
    data: fakeInitialState,
}
const sortRow = ({data}, sortRow) => {
    let newArray = [...data];
    const compare = (a,b) => {
        if (a[sortRow] < b[sortRow]) return -1;
        if (a[sortRow] > b[sortRow]) return 1;
      return 0;
    }
    newArray.sort(compare);
    return newArray
} 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_SORT' :
            return {
                data: sortRow(state, action.payload)
            }
        default: return state;
    }
    
}

export default reducer;