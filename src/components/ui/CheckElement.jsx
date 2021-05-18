import React from "react";

const CheckElement = props => {

    const {type, name, text, checked} = props;

    return (
        <div className={`custom-check custom-check--${type}`}>
            <label className="custom-check__label">
                <input type={type} name={name} className='custom-check__input' defaultChecked={checked}/>
                <span className="custom-check__content">
                    <span className="custom-check__box"> </span>
                    <span className="custom-check__text">{text}</span>
                </span>
            </label>
        </div>
    )
}

export default CheckElement;