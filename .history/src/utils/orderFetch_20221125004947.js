import axios from 'axios';

const getBaseUrl = () => {
  //will use the url of the backend later
  return '';
};

const orderFetch = axios.create({
  baseURL: "http://localhost:4000/api/v1/orders",
});

export default const orderFetch = axios.create({
    ;
