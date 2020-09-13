import * as actionTypes from '../actions/actionTypes';
import initialState from "./initialState";

export default function categoryListReducer(state = initialState.categories, action) {
    //reducer bizim için state döndürür

    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }

}
