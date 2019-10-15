import React from 'react';

const ReactButton = props => {
    var {passedprops, className} = props

    if (!className) {
        className = "submit-class"
    }

    // console.log(passedprops,className)

    return (
        <div className="form-group">
            <button className={className}
                    type={passedprops.type} 
                    disabled={passedprops.disabled}
            >
            {passedprops.value}
            </button>
        </div>
    );
}

export default ReactButton;
