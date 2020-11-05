import axios from 'axios';

const apiKey = '6dbf4a59ec3fb82023ce629c3c0031cdf466ddc51cb6db3aad8eefe27dec72a4'

export const cryptoHttp = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `Apikey ${apiKey}`
    }
});