import * as actionTypes from '../actions/actionTypes';
import initialState from "./initialState";

export default function addCartReducer(state = initialState.cart, action) {
    //reducer bizim için state döndürür
    let newCart = state;
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            newCart.push(action.payload);
            return newCart;
        default:
            return state;
    }

}
