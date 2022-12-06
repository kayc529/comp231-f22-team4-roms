import axios from 'axios';

const getBaseUrl = () => {
  //will use the url of the backend later
  return '';
};

const customFetch = axios.create({
  baseURL: getBaseUrl(),
});

export default customFetch;
