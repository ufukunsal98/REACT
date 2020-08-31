import React, {Component} from 'react';
import Navi from "./Navi";
import Category from "./Category";
import ProductList from "./ProductList";
import {Col, Container, Row} from 'reactstrap';
import alertify from 'alertifyjs';
import {Route, Switch} from "react-router-dom";
import Notfound from "./Notfound";
import CardList from "./CardList";

class App extends Component {
    // let baskaBisey = "";
    // State önemli  veriyönetimi için kullanılır
    /*
    * Props bir componentten diğerine taşınan data veya event
    * State ise bir componentin datası özel bir data tutmak istersek onu state
    * ile sağlarız.
    *
    *
    * */

    state = {
        currentCategory: "",
        products: [],
        carts: []
    };

    getProducts(categoryId) {
        let url = "http://localhost:3004/products";
        if (categoryId) {
            url += "?categoryId=" + categoryId;
        }
        fetch(url).then(
            response => response.json()
        ).then(
            data => this.setState({products: data})
        )
    }


    componentDidMount() {
        this.getProducts();
    }


    changeCategory = (category) => {
        this.setState({currentCategory: category.categoryName});
        this.getProducts(category.id);
    }

    addToCard = (product) => {
        let newCart = this.state.carts;
        var addedItem = newCart.find(c => c.product.id === product.id);
        if (addedItem) {
            addedItem.quantity++;
        } else {
            newCart.push({product: product, quantity: 1});
        }
        this.setState({carts: newCart});
        alertify.success(product.productName + " added to cart!")
    }

    removeFromCart = (cartItem) => {
        let newCard = this.state.carts.filter(
            card => card.product.id !== cartItem.product.id
        )
        this.setState({carts: newCard});
        alertify.error(cartItem.product.productName + " is removed");
    }


    render() {
        let productInfo = {title: "Product List"};
        let categoryInfo = {title: "Category List"};
        return (
            <div>
                <Container>
                    <Navi cart={this.state.carts} removeFromCart={this.removeFromCart}/>
                    <br/>
                    <Row>
                        <Col xs="4">
                            <Category currentCategory={this.state.currentCategory}
                                      changeCategory={this.changeCategory} info={categoryInfo}/>
                        </Col>
                        <Col xs="8">
                            <Switch>
                                <Route exact path="/" render={props => (
                                    <ProductList {...props} addToCard={this.addToCard} products={this.state.products}
                                                 currentCategory={this.state.currentCategory} info={productInfo}/>
                                )
                                }/>
                                <Route exact path="/cart" render={props => (
                                    <CardList {...props} cart={this.state.carts} removeFromCart={this.removeFromCart}/>
                                )}/>
                                <Route component={Notfound}/>
                            </Switch>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;
