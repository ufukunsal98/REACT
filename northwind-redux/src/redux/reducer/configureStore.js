import {applyMiddleware, createStore} from "redux";
import reducers from "./index";
import thunk from "redux-thunk";
// store veritabanı gibi state veritabanı gibi

export default function configureStore() {
    return createStore(reducers, applyMiddleware(thunk));
}
