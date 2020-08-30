import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class Category extends Component {
    // Props kategoriler arasında veri aktarımı için kullanılır..
    state = {
        categories: [
            // {categoryId: 1, categoryName: "Beverages"},
            // {categoryId: 2, categoryName: "Condiments"},
        ],
        currentCategory: ""
    };

    // state nesnesi olusturma yont 1
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         categories: [
    //             {categoryId: 1, categoryName: "Beverages"},
    //             {categoryId: 2, categoryName: "Condiments"},
    //         ]
    //     }; // state nesnesi olusturma yont 1
    // }

    getCategories() {
        fetch("http://localhost:3004/categories").then(
            response => response.json()
        ).then(data => this.setState( {categories: data}));
    }

    componentDidMount() {
        this.getCategories();
    }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h3>{this.state.counter}</h3>
                <ListGroup>
                    { // mpa fonksiyonu birr döngüdür elemanlarını tek tek döner
                        // ve yeni bir nesne yapıp yeni bir array dondurur
                        this.state.categories.map(category => (
                                <ListGroupItem active={category.categoryName === this.props.currentCategory}
                                               action
                                               onClick={()=>this.props.changeCategory(category)}
                                               key={category.id}>{category.categoryName}
                                </ListGroupItem>
                            )
                        )
                    }
                </ListGroup>
                {/*{this.props.currentCategory}*/}
            </div>
        );
    }
}

export default Category;
