import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL, WORDS_API_KEY } from './constants';

const TextTransform = styled.div`
transform: rotateY(180deg);
text-align: right;
font-size: 2rem;
margin: 1em auto;
`;

const Words = () => {
    const [words, setWords] = useState([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        (async () => {
            const options = {
                method: 'GET',
                url: BASE_URL,
                params: {
                    letterPattern: '^[^0-9]+$',
                    lettersMin: '5',
                    lettersMax: '10',
                    frequencyMin: '5',
                    limit: '20',
                    page: '1'
                },
                headers: {
                    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
                    'X-RapidAPI-Key': WORDS_API_KEY
                }
            };

            const { data } = await axios.request(options);

            console.log(data);
            setWords(data.results.data);
            setCurrentWordIndex(0);
        })();
    }, []);

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (words[currentWordIndex].localeCompare(userInput) === 0) {
            if (currentWordIndex + 1 < words.length) {
                setCurrentWordIndex(currentWordIndex + 1);
            }

            setUserInput('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextTransform>{words[currentWordIndex]}</TextTransform>
            <input type="text" value={userInput} onChange={handleChange} />
        </form>
    );
};

export default Words;