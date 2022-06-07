import axios from 'axios';
import { BASE_URL, WORDS_API_KEY } from '../constants';

export const fetchWords = async () => {
    const options = {
        method: 'GET',
        url: BASE_URL,
        params: {
            letterPattern: '^[^0-9]+$',
            lettersMin: '5',
            lettersMax: '10',
            frequencyMin: '5',
            limit: '200',
            page: '1'
        },
        headers: {
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
            'X-RapidAPI-Key': WORDS_API_KEY
        }
    };

    const { data } = await axios.request(options);
    return data;
};