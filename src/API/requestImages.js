import axios from 'axios';

export default page => {
  const IMAGE_COUNT = 3;
  const URL = process.env.REACT_APP_API_URL;
  const KEY = process.env.REACT_APP_API_KEY;

  return axios.get(`${URL}${KEY}&per_page=${IMAGE_COUNT}&page=${page}`);
};
