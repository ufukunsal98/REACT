import React, {Component} from 'react';
import {
    DropdownItem,
    DropdownMenu,
    NavLink,
    DropdownToggle, NavItem,
    UncontrolledDropdown
} from 'reactstrap';
import {connect} from "react-redux";
import Badge from "reactstrap/es/Badge";
import {bindActionCreators} from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from "react-router-dom";

class CartSummary extends Component {

    renderNotFound() {
        return (
            <NavItem>
                <NavLink>Sepetiniz Boş</NavLink>
            </NavItem>
        );
    }

    renderCartItems() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Urunler
                    </DropdownToggle>
                    <DropdownMenu right>
                        {
                            this.props.cart.map(
                                car => (
                                    <DropdownItem>
                                        {car.product.productName} <Badge>{car.quantity}</Badge>
                                        <Badge color="danger" onClick={() => this.props.actions.removeFromCart(car)}>X</Badge>
                                    </DropdownItem>
                                )
                            )
                        }
                        <DropdownItem>
                            <Link to="/cart">
                                Sepete Git
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>

                </UncontrolledDropdown>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderCartItems() : this.renderNotFound()}

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

export default connect(mapStateToProps , mapDispatchToProps)(CartSummary);
