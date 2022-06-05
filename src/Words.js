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

    return (
            <TextTransform>Hello</TextTransform>
    );
};

export default Words;