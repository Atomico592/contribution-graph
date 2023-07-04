import React from 'react';
import "./Text.css"

const Text = ({content, style}) => {
    return (
        <div className="text-style" style={style}>
            <p>
                {content}
            </p>
        </div>
    );
};

export default Text;