import * as actionTypes from './actionTypes';


export function getProductsSuccess(categories) {
    return {type: actionTypes.GET_PRODUCTS_SUCCESS, payload: categories}
}

export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products"
        if (categoryId) {
            url = url + "?categoryId=" + categoryId;
        }
        fetch(url).then(response => response.json()).then(
            response => {
                dispatch(getProductsSuccess(response))//  dispatch yakalamak demek
            }
        )
    }
}
