import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import {Button, Table} from "reactstrap";
import {Link} from "react-router-dom";

class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
    }

    render() {
        return (
            <div>
                <h3>Products - Category : {this.props.currentCategory.categoryName}</h3>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>CategoryId</th>
                        <th>Product Name</th>
                        <th>Quantity Per Unit</th>
                        <th>Unit Price</th>
                        <th>Unit In Stock</th>
                        <th>Add</th>
                    </tr>
                    </thead>
                    <tbody>

                    { // mpa fonksiyonu birr döngüdür elemanlarını tek tek döner
                        // ve yeni bir nesne yapıp yeni bir array dondurur
                        this.props.products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.categoryId}</td>
                                    <td><Link to={"/addproduct/" + product.id} >{product.productName}</Link></td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>
                                        <Button color="info"
                                                onClick={() => this.props.actions.addToCard(product)}>Add</Button>{' '}
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
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCard: bindActionCreators(cartActions.addToCart, dispatch),
            saveProduct: bindActionCreators(productActions.saveProduct, dispatch),
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
