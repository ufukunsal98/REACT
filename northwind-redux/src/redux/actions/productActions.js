import * as actionTypes from './actionTypes';


export function getProductsSuccess(categories) {
    return {type: actionTypes.GET_PRODUCTS_SUCCESS, payload: categories}
}


export function createProductsSuccess(product) {
    return {type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product}
}

export function updateProductsSuccess(product) {
    return {type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product}
}


export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3004/products"
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

export function saveProductApi(product) {
    return function (dispatch) {
        let url = "http://localhost:3004/products"
        fetch(url, {
            body: JSON.stringify(product),
            headers: {
                "content-type": "application/json"
            }, method: product.id ? "PUT" : "POST"
        }).then(response => response.json()).then(
            handleResponse
        ) // hata yönetimi icin hazirlanmistir.
    }
}

export function saveProduct(product) {
    return function (dispatch) {
        return saveProductApi(product).then(
            savedProduct => {
                product.id ? dispatch(updateProductsSuccess(savedProduct)) : dispatch(createProductsSuccess(savedProduct))
            }
        );
    }
}

export function handleResponse(response) {
    if (response.ok) {
        response.json();
    }
    const err = response.text();
    throw new Error(err);
}




