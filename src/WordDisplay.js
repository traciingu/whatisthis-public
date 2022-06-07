import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { fetchWords } from './helpers/fetchWords';

const TextTransform = styled.div`
transform: rotateY(180deg);
font-size: 2rem;
margin: 1em auto;
`;

const WordDisplay = ({ timerIsActive }) => {
    const [words, setWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [responseType, setReponseType] = useState();

    const responses = {
        'correct': 'Correct!',
        'wrong': 'Try again!',
        'results': `You entered ${currentWordIndex + 1} word(s) correctly!`
    };

    const clearResponse = () => {
        setTimeout(() => setReponseType(), 1750);
    };

    // Get array of words and generate array of indexes in random order
    useEffect(() => {
        (async () => {
            const data = await fetchWords();
            console.log(data);
            setWords(data.results.data);
            setCurrentWordIndex(0);
        })();
    }, []);

    useEffect(() => {
        if (!timerIsActive) {
            setReponseType('results');
        }
    }, [timerIsActive]);

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (words[currentWordIndex].localeCompare(userInput) === 0) {
            if (currentWordIndex + 1 < words.length) {
                setCurrentWordIndex(currentWordIndex + 1);
                setReponseType('correct');
                clearResponse();
            } else {
                setReponseType();
            }

            setUserInput('');
        } else {
            setReponseType('wrong');
            clearResponse();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextTransform>{words[currentWordIndex]}</TextTransform>
            <input type="text" value={userInput} onChange={handleChange} disabled={!timerIsActive} />
            {responseType && <p>{responses[responseType]}</p>}
        </form>
    );
};

export default WordDisplay;