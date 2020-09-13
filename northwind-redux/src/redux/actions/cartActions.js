import * as actionTypes from './actionTypes';
import * as alertify from 'alertifyjs'

export function addToCart(cart) {
    alertify.success("cart");
    return {type: actionTypes.ADD_TO_CART, payload: cart}
}

