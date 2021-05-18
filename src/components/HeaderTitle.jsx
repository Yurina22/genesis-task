import React from "react";

const HeaderTitle = props => {
    return (
        <div className='header-title'>
            <div className="container">
                <div className="header-title__content">
                    <h2 className="header-title__text">{props.title}</h2>
                    <button onClick={props.openModal} className="header-title__close"> </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderTitle;