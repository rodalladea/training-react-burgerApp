import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-86511.firebaseio.com/'
});

export default instance;