import React from 'react';
import Dashboard from "./Dashboard";
import {Container} from 'reactstrap';
import Navi from "../navi/Navi";

function App() {
    return (
        <div>
            <Container>
                <Navi/>
                <Dashboard/>
            </Container>
        </div>
    );
}

export default App;
