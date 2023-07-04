import React from 'react';
import "./Cell.css";

const Cell = ({color, onClick}) => {

    if (color >= 30) {
        color = "#254E77";
    } else if (color <= 29 && color >= 20) {
        color = "#527BA0";
    } else if (color <= 19 && color >= 10) {
        color = "#7FA8C9"
    } else if (color <= 1 && color >= 9) {
        color = "#ACD5F2"
    } else {
        color = "#EDEDED"
    }

    return <div className="cell" style={{ backgroundColor: color }} onClick={onClick} />;
};

export default Cell;