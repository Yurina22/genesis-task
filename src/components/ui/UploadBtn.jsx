import React from "react";

const UploadBtn = props => {
    return <button type='button' className="upload-btn" onClick={props.openModal}>{props.text}</button>
}
export default UploadBtn;