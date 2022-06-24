import { useEffect, useRef } from 'react';

const TestResponse = ({ responseType = '', completedWordCount, handleResponseType }) => {
    const timerClearResponseId = useRef();

    const delayResponseClear = () => {
        timerClearResponseId.current = setTimeout(() => handleResponseType(), 1750);
    };

    useEffect(() => {
        clearInterval(timerClearResponseId.current);
        if (responseType.localeCompare('results') !== 0) {
            delayResponseClear();
        }
    }, [responseType]);

    const responses = {
        'correct': 'Correct!',
        'wrong': 'Try again!',
        'results': `You entered ${completedWordCount} word(s) correctly!`
    };

    return (<>{responseType && <p>{responses[responseType]}</p>} </>);
};

export default TestResponse;