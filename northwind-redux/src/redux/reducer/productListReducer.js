import * as actionTypes from '../actions/actionTypes';
import initialState from "./initialState";

export default function productsListReducer(state = initialState.products, action) {
    //reducer bizim için state döndürür

    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }

}
