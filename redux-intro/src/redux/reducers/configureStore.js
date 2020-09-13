import {createStore} from "redux";
import reducers from "./index";
// store veritabanı gibi state veritabanı gibi

export default function configureStore() {
    return createStore(reducers);
}
