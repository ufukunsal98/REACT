import React, {Component} from 'react';
import {Button, Table} from 'reactstrap';

class CardList extends Component {

    renderCart() {
        return (
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Category Id</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Units In Stock</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                { //ass
                    this.props.cart.map(
                        cartItem => (
                            <tr key={cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color="danger" onClick={() => this.props.removeFromCart(cartItem)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </Table>
        )
    }

    render() {
        return this.props.cart?.length > 0 ? this.renderCart() : (<div>Not Found</div>);
    }
}

export default CardList;
