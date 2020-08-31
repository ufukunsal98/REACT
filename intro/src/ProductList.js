import React, {Component} from 'react';
import {Button, Table} from "reactstrap";

class ProductList extends Component {
    state = {}


    render() {
        return (
            <div>
                <h2>Product List - {this.props.currentCategory}</h2>
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
                                    <td>{product.productName}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>
                                        <Button color="info" onClick={() => this.props.addToCard(product)}>Add</Button>{' '}
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

export default ProductList;
