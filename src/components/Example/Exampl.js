import React from 'react';
import Cell from "../UI/Cell/Cell";
import "./Examlp.css"

const Exampl = () => {
    const contr = [0, 9, 19, 29, 30]
    return (
        <div className="exampl">
            <p className="text"> Меньше</p>
            {contr.map(item => (
                <Cell
                    key={item + 1}
                    color={item}
                />
            ))}
            <p className="text">
                Больше
            </p>
        </div>
    );
};

export default Exampl;