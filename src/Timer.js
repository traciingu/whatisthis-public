import { useEffect, useState, useRef } from "react";

const Timer = () => {
    const [time, setTime] = useState(60);
    const timerId = useRef();

    useEffect(() => {
        if (time <= 0) {
            clearInterval(timerId.current);
            setTime(60);
        }
    }, [time, timerId])

    const startTimer = () => {
        const start = Date.now();
        timerId.current = setInterval((start) => {
            let delta = Math.floor((Date.now() - start) / 1000);
            setTime(time - delta);
        }, 500, start);
    };

    const resetTimer = () => {
        clearInterval(timerId.current);
        setTime(60);
    };

    return (
        <div>
            <p>{time}</p>
            <input type="button" value="Start Time" onClick={startTimer} />
            <input type="button" value="Reset" onClick={resetTimer} />
        </div>
    );
}

export default Timer;