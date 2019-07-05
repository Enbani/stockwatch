import { GET_STOCKS } from './actionTypes';
import axios from 'axios';

export const addStocksList = (data) => {
  return {
    type: GET_STOCKS,
    payload: data
  }
};

// request saved stocks from server and add to store
export const fetchStocks = () => {
  return async dispatch => {
    try {
      const stocksResponse = await axios.get('/api/v1/stocks/');
      const stocksList = stocksResponse.data.payload;
      dispatch(addStocksList(stocksList));
    } catch (e) {
      console.log(e);
    }
  }
};
