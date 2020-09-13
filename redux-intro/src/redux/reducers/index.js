import {combineReducers} from 'redux'; // reducerleri bir araya getir
import counterReducer from './counterReducer';

const reducers = combineReducers({ // reducerleri birden fazla olursa bağlamak için birleştirmek için tanımlıyoruz..
    counterReducer
})

export default reducers;
