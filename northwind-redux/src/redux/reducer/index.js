import {combineReducers} from "redux";
import changeCategoryReducer from './changeCategoryReducer';
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import addCartReducer from "./addCartReducer";
import saveProductReducer from "./saveProductReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    addCartReducer,
    saveProductReducer
});

export default rootReducer;
