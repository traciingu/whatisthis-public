import styled from 'styled-components';
import { useEffect, useState } from 'react';
import TestResponse from './TestResponse';
import ButtonGrouping from './ButtonGrouping';

const TextTransform = styled.div`
transform: ${props => props.transform};
font-size: 2rem;
margin: 1em auto;
`;

const WordDisplay = ({ timerIsActive, wordsData }) => {
    const [words, setWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [responseType, setResponseType] = useState('medium');
    const [testMode, setTestMode] = useState('backwards')

    useEffect(() => {
        if (!timerIsActive) {
            setUserInput('');
            setResponseType('results');
        } else {
            setResponseType();
            setCurrentWordIndex(0);
        }
    }, [timerIsActive]);

    // Get array of words and generate array of indexes in random order
    useEffect(() => {
        if (wordsData) {
            setWords(wordsData.results.data);
        }
    }, [wordsData]);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleResponseType = (newResponseType) => {
        setResponseType(newResponseType);
    };

    const handleTestMode = (e) => {
        setTestMode(e.target.value.toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseType();

        if (words[currentWordIndex].localeCompare(userInput) === 0) {
            if (currentWordIndex + 1 < words.length) {
                setCurrentWordIndex(currentWordIndex + 1);
                setResponseType('correct');
            }

            setUserInput('');
        } else {
            setResponseType('wrong');
        }
    };

    const textTransformSettings = {
        'flipped': 'rotateX(180deg) rotateY(180deg)',
        'backwards': 'rotateY(180deg)'
    };

    const testModeButtons = [
        {
            value: "Backwards",
            isSelected: true
        },
        {
            value: "Flipped",
            isSelected: false
        }
    ];

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextTransform transform={textTransformSettings[testMode]}>{words[currentWordIndex]}</TextTransform>
                <input type="text" value={userInput} onChange={handleInputChange} disabled={!timerIsActive} />
            </form>
            {!timerIsActive &&
                <div onClick={handleTestMode}>
                    <ButtonGrouping buttons={testModeButtons} />
                </div>}

            <TestResponse
                responseType={responseType}
                completedWordCount={currentWordIndex}
                handleResponseType={handleResponseType}
            />
        </>
    );
};

export default WordDisplay;