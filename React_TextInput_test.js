import React from 'react';
import validate from './validate';


const ReactTextinput = props => {
    const { passedprops } = props;

    // console.log(passedprops)

    let touched = passedprops.touched;
    let valid = passedprops.valid;
    let value = passedprops.value;


    const OnChangeHandler = event => {
        // console.log("onchangehandler component")

        let updatedControls = passedprops;

        let updatedFormElement = updatedControls

        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(updatedFormElement.value, updatedFormElement.validationRules);

        console.log(updatedFormElement.value, updatedFormElement.valid);
        console.log(updatedFormElement);

        touched = updatedFormElement.touched;
        valid = updatedFormElement.valid;
        value = updatedFormElement.value;

        let formIsValid = true;

        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
        
    }

    var inputControl = "input-control";
    var validationError = null;

    if (touched && !valid) {
        inputControl = 'input-control input-error';
        validationError = <p className='input-error-msg'>Please enter a valid value!</p>;
    }
    console.log('outside',touched, valid);

    return (
        <div className="form-group">
            <input className={inputControl}
                name={passedprops.name}
                placeholder={passedprops.placeholder}
                type={passedprops.type}
                value={passedprops.value}
                onChange={OnChangeHandler}
            />
            {validationError}
        </div>
    );
}

export default ReactTextinput;
