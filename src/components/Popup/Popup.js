import React from 'react';
import './Popup.css';

function Popup({ text, onClose }) {
    return (
        <div className="popup">
            <button className="popup-close-button" onClick={onClose}></button>

            <div className="popup-content">
                <p className="popup-message">{text}</p>
            </div>
        </div>
    );
}

export default Popup;