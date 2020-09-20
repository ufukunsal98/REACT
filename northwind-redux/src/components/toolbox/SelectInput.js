import React from 'react';
import {Alert} from "reactstrap";

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => { // React Hooks
    let wrapperClass = "form-group";
    if (error && error.length > 0) {
        wrapperClass = " has-error";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>
                {label}
            </label>
            <select name={name} value={value} onChange={onChange} className="form-control">
                <option value="">
                    {defaultOption}
                </option>
                {options.map(
                    option => {
                        return (
                            <option value={option.value} key={option.value}>{option.text}</option>
                        )
                    }
                )}
            </select>
            {/*{error & <div className="alert alert-danger">{error}</div>}*/}
            {<Alert color="danger">
                {error}
            </Alert>}
        </div>
    );
}

export default SelectInput;
