import React from "react";


const DefaultButton = props => {
    const modification = props.modification;
    return <button type='button' className={`default-button ${modification ? `default-button--${modification}`: ''}`}>
        {props.text}
    </button>

}

export default DefaultButton;