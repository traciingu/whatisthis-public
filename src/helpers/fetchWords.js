import axios from 'axios';
import { BASE_URL, WORDS_API_KEY } from '../constants/apiConstants';

export const fetchWords = async (difficulty) => {
    const settingsAt = {
        'easy': {
            letterPattern: '^[A-Za-z]+$',
            lettersMax: '4',
            frequencyMin: '5',
            limit: '200'
        },
        'medium': {
            letterPattern: '^[A-Za-z]+$',
            lettersMin: '5',
            lettersMax: '10',
            frequencyMin: '5',
            limit: '200'
        },
        'hard': {
            letterPattern: '^[A-Za-z]+$',
            lettersMin: '5',
            lettersMax: '10',
            frequencyMax: '4',
            limit: '200'
        },
        'expert': {
            letterPattern: '^[A-Za-z]+$',
            lettersMin: '10',
            frequencyMax: '3',
            limit: '200'
        }
    };

    const options = {
        method: 'GET',
        url: BASE_URL,
        params: settingsAt[difficulty.toLowerCase()],
        headers: {
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
            'X-RapidAPI-Key': WORDS_API_KEY
        }
    };

    const { data } = await axios.request(options);
    return data;
};