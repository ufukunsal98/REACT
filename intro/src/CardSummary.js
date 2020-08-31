import React, {Component} from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";

class CardSummary extends Component {

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Carts - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(
                            cardItem => (
                                <DropdownItem key={cardItem.product.id}>
                                    {cardItem.product.productName}
                                    <Badge color="danger" className="float-right"
                                           onClick={() => this.props.removeFromCart(cardItem)}>X</Badge>
                                    <Badge color="primary" className="float-right">{cardItem.quantity}</Badge>
                                </DropdownItem>
                            )
                        )
                    }
                    <DropdownItem divider/>
                    <DropdownItem>
                        <Link to="cart">See Cart</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    notFoundSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Carts - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        Not found
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {
        return (this.props.cart.length > 0 ? this.renderSummary() : this.notFoundSummary())
    }
}

export default CardSummary;
