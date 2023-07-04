import React, {useEffect} from 'react';
import "./MainBlock.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchDateRequest} from "../../store/actions/dateActions";
import Cell from "../../components/UI/Cell/Cell";
import Text from "../../components/UI/Text/Text";

const MainBlock = () => {
    const dispatch = useDispatch();
    const date = useSelector(store => store.date.date);
    const week = ["Пн", "Ср", "Пт"];
    const  month = ["Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек.", "Янв.", "Февр.", "Март"]

    useEffect(() => {
        dispatch(fetchDateRequest())
    }, [dispatch])

        const renderGraph = () => {
            if (!date) {
                return <div>Loading...</div>;
            }
            const today = new Date();
            const startDate = new Date(today.getTime() - (50 * 7 * 24 * 60 * 60 * 1000));

            const calendar = [];

            let currentDate = new Date(startDate);
            while (currentDate <= today) {
                const dateKey = currentDate.toISOString().split('T')[0];
                const weekDay = currentDate.getDay();
                const color = date[dateKey] || '#EDEDED';

                if (!calendar[weekDay]) {
                    calendar[weekDay] = [];
                }
                calendar[weekDay].push(<Cell key={dateKey} color={color}/>);
                currentDate.setDate(currentDate.getDate() + 1);
            }
            return (
                <div className="main-block-wrapper">
                <div className="main-block">
                    <div className="main-block-inner">
                        {calendar.map((day, index) => (
                            <div key={index}  className="row">
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
                        <div className="week" >
                            {week.map((item, index) => (
                                <Text
                                    key={index}
                                    content={item}
                                    style= {{paddingBottom: "5px"}}
                                />
                            ))}
                        </div>
                        <div className="month">
                            {month.map((item, index) => (
                                <Text
                                    key={index}
                                    content={item}
                                    style={{paddingRight: "50px", display: "inline-block"}}
                                />
                            ))}
                        </div>
                </div>
            );
        };

        return (
            <div>
                {renderGraph()}
            </div>
        )
    }

export default MainBlock;
