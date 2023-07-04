import React from 'react';
import "./Text.css"

const Text = ({content}) => {
    return (
        <div className="text-style">
            {content}
        </div>
    );
};

export default Text;