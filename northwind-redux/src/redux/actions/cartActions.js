import * as actionTypes from './actionTypes';
import * as alertify from 'alertifyjs'

export function addToCart(cart) {
    alertify.success(cart.productName + " " + cart.id+ " is added to cart");
    return {type: actionTypes.ADD_TO_CART, payload: {product:cart , quantity:1}}
}

export function removeFromCart(cartItem) {
    alertify.error(cartItem.product.productName + " " + cartItem.product.id+ " is removed from cart");
    return {type: actionTypes.REMOVE_FROM_CART, payload: cartItem}
}

