import axios from 'axios';

const getBaseUrl = () => {
  //will use the url of the backend later

  return 'http://localhost:4000/api/v1/orders';
};

const customFetch = axios.create({
  baseURL: getBaseUrl(),
});

export default customFetch;
