import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {connect} from "react-redux";
import {Button, Table} from "reactstrap";

class CartDetail extends Component {
    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>CategoryId</th>
                        <th>Product Name</th>
                        <th>Quantity Per Unit</th>
                        <th>Unit Price</th>
                        <th>Unit In Stock</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>

                    { // mpa fonksiyonu birr döngüdür elemanlarını tek tek döner
                        // ve yeni bir nesne yapıp yeni bir array dondurur
                        this.props.cart.map(cartItem => (
                                <tr key={cartItem.product.id}>
                                    <td>{cartItem.product.id}</td>
                                    <td>{cartItem.product.categoryId}</td>
                                    <td>{cartItem.product.productName}</td>
                                    <td>{cartItem.product.quantityPerUnit}</td>
                                    <td>{cartItem.product.unitPrice}</td>
                                    <td>{cartItem.product.unitsInStock}</td>
                                    <td>{cartItem.quantity}</td>
                                    <td>
                                        <Button color="info"
                                                onClick={() => this.props.actions.removeFromCart(cartItem)}>Remove</Button>{' '}
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.addCartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
