import axios from 'axios';
const Api_url = '../DATA.json'

export const restaurantData = async () => {
  const url = `${Api_url}`;
  const response = await axios.get(url);
  return response.data.restaurants;
};
