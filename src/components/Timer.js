import styled from 'styled-components';
import { useEffect, useState, useRef } from "react";
import ButtonGrouping from './ButtonGrouping';

const TimerContainerStyling = styled.div`
font-size: 2rem;

 .time {
    margin-bottom: .25em;
 }
`;

const Timer = ({ timerIsActive, handleTimerIsActive }) => {
    const [time, setTime] = useState(6);
    const timerId = useRef();

    useEffect(() => {
        if (time <= 0) {
            clearInterval(timerId.current);
            handleTimerIsActive(false);
            setTime(60);
        }
    }, [time, timerId, handleTimerIsActive]);

    const startTimer = () => {
        if (!timerIsActive) {
            handleTimerIsActive(true);
            const start = Date.now();
            timerId.current = setInterval((start) => {
                let delta = Math.floor((Date.now() - start) / 1000);
                setTime(time - delta);
            }, 500, start);
        }
    };

    const resetTimer = () => {
        clearInterval(timerId.current);
        handleTimerIsActive(false);
        setTime(6);
    };

    const handleClick = (e) => {
        if (e.target.value.toLowerCase().includes('start')) {
            startTimer();
        } else {
            resetTimer();
        }
    }

    const timerButtons = [
        {
            value: "Start Time",
            isSelected: false
        },
        {
            value: "Reset",
            isSelected: false
        }
    ];

    return (
        <TimerContainerStyling>
            <p className="time">{time}</p>
            <div onClick={handleClick}>
                <ButtonGrouping buttons={timerButtons} canSelect={false} />
            </div>
        </TimerContainerStyling>
    );
}

export default Timer;