import React from 'react';
import Dashboard from "./Dashboard";
import {Container} from 'reactstrap';
import Navi from "../navi/Navi";
import {Switch, Route} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../toolbox/NotFound";

function App() {
    return (
        <div>
            <Container>
                <Navi/>
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/cart" exact component={CartDetail}/>
                    <Route path="/addproduct/:productId" exact component={AddOrUpdateProduct}/>
                    <Route path="/addproduct/" exact component={AddOrUpdateProduct}/>
                    <Route component={NotFound}/>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
