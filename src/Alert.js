import React from "react";


function Alert({ message, button, onClick }) {
    return (
        <div className="alert">
            <p>{message}</p>
            <button onClick={onClick}>{button}</button>
        </div>
    )
}

export default Alert