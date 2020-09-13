import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {increaseCounter} from "../redux/actions/counterActions";


class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => {
                    this.props.dispatch(increaseCounter());
                }}>
                    1 arttır
                </button>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(increaseCounter, dispatch)};
}

// Uygulamamıza bir Aksiyonu mbağlamak için dispatch kullanırız
export default connect(mapDispatchToProps)(IncreaseCounter);
