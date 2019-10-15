import React from 'react';
import validate from './validate';


const ReactTextinput = props => {

    var {passedprops, className} = props

    if (!className) {
        className = "input-control"
    }

    // console.log(passedprops,className)

    const [value, setValue] = React.useState(passedprops.value)
    const [touched, setTouched] = React.useState(false)
    const [valid, setValid] = React.useState(true)


    const OnChangeHandler = event => {
        setValue(event.target.value);

        let updatedControls = passedprops;

        let updatedFormElement = updatedControls

        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(updatedFormElement.value, updatedFormElement.validationRules);

        setTouched(updatedFormElement.touched);
        setValid(updatedFormElement.valid);

        let formIsValid = true;

        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }        
    }

    var validationError = null;

    if (touched && !valid) {
        className = 'input-error';
        validationError = <p className='input-error-msg'>Please enter a valid value!</p>;
    }

    return (
        <div className="form-group">
            <input className={className}
                name={passedprops.name}
                placeholder={passedprops.placeholder}
                type={passedprops.type}
                value={value}
                onChange={OnChangeHandler}
            />
            {validationError}
        </div>
    );
}

export default ReactTextinput;
