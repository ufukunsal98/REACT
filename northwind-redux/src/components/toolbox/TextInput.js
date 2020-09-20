import React from 'react';
import {Alert} from "reactstrap";

const TextInput = ({name , label, onChange, placeHolder , value , error}) => { // React Hooks
    let wrapperClass = "form-group";
    if(error && error.length > 0) {
        wrapperClass = " has-error";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>
                {label}
            </label>
            <div className="field">
                <input type="text" name={name} placeholder={placeHolder} onChange={onChange} value={value} className="form-control">
                </input>
            </div>
            {/*{error & <div className="alert alert-danger">{error}</div>}*/}
            { <Alert color="danger">
                {error}
            </Alert>}
        </div>
    );
}

export default TextInput;
