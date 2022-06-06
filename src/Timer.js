import { useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(60);

    const startTimer = () => {
        const start = Date.now();
        setInterval(function () {
            console.log("Triggered")
            const delta = Math.floor((Date.now() - start) / 1000);
            if (delta >= 1) {
                setTime(time - delta);
            }
        }, 1000)
    }

    return (
        <div>
            <div>{time}</div>
            <input type="button" value="Start Time" onClick={startTimer} />
        </div>
    );
}

export default Timer;