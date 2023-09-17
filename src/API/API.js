import axios from 'axios';

const BASE_URL = 'https://641201246e3ca3175304119e.mockapi.io/api/auth';

export const getAllCars = async () => await axios.get(`${BASE_URL}/adverts`);
