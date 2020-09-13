import * as actionTypes from '../actions/actionTypes';
// ************* çok önemli reducerin amacı state bilgisini döndürmektir..


const counterReducer = (state = 0, action) => { // reducer içerisinde db ye bağlanılmaz apiye bağlanılmas basit state işleri yapılır..
    let newState; // referansın değiştirilmesi için kullanılır...
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            return (newState = state + action.payload);
        case actionTypes.DECREASE_COUNTER:
            return (newState = state - action.payload);
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload);
        default:
            return state;
    }
}

export default counterReducer;

// Javascript Immutability
