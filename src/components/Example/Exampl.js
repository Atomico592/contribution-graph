import React, {useState} from 'react';
import Cell from "../UI/Cell/Cell";
import "./Examlp.css"
import Info from "../UI/Info/Info";

const Exampl = () => {
    const [state, setState] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const contr = [0, 9, 19, 29, 30];


    const onClick = (item, e) => {
        setState({contr : item, posY : e.clientY, posX: e.clientY});
        if (state) {
            setOpenPopup(true);
        }

    }

    if (openPopup) {
        setTimeout(() => {
            setOpenPopup(false);
        }, 5000);

    }


    return (
        <div>
        <div className="exampl">
            <p className="text"> Меньше</p>
            {contr.map(item => (
                <Cell
                    key={item + 1}
                    color={item}
                    onClick={(e) => onClick(item, e)}
                />
            ))}
            <p className="text">
                Больше
            </p>
        </div>
            {openPopup ? ( <Info
                contributions={state?.contr}
                position={{left: `${state?.positionX}px`, top: `${state?.positionY}px`}}
            />) : null}

        </div>
    );
};

export default Exampl;