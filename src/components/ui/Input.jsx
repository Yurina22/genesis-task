import React from "react";

const Input = props => {
    const input = <div className="custom-input">
        <input type="text" className="custom-input__input" placeholder={props.placeholder}/>
    </div>;

    const textarea = <div className="custom-input">
        <textarea className='custom-input__input custom-input__input--textarea' placeholder={props.placeholder}></textarea>
    </div>

    return (
        <>
            {props.type === 'textarea'  ? textarea : input}
        </>
    )
}

export default Input;