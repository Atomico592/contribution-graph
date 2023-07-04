import React from 'react';
import "./Info.css"

const Info = ({ contributions,content, position }) => {
    return (
        <div className="info" style={position}>
            <p className="contributions">{contributions} contributions</p>
            <p className="content">{content}</p>
        </div>
    );
};

export default Info;