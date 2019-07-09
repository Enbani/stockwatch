import { GET_STOCKS, ADD_STOCK,  REMOVE_STOCK, ADD_HISTORY } from './actionTypes';
import axios from 'axios';

export const addStocksList = (data) => {
  return {
    type: GET_STOCKS,
    payload: data
  }
};

export const addSingleStock = (data) => {
  console.log('this is singleStock: ', data)
  return {
    type: ADD_STOCK,
    payload: data
  }
}

export const removeSingleStock = (data) => {
  return {
    type: REMOVE_STOCK,
    payload: data
  }
}

export const addHistory = (data) => {
  return {
    type: ADD_HISTORY,
    payload: data
  }
}

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

export const addStock = (ticker) => {
  console.log(ticker);
  return async dispatch => {
    try {
      const stocksResponse = await axios.get(`/api/v1/stocks/add-stock?stock=${ticker}`);
      console.log(stocksResponse);
      let newStock = [stocksResponse.data.payload];

      dispatch(addSingleStock(newStock));
    } catch (e) {
      console.log(e)
    }
  }
}

export const removeStock = (id) => {
  return async dispatch => {
    try {
      const stocksResponse = await axios.delete(`/api/v1/stocks/remove-stock/${id}`);
      console.log(stocksResponse)
      dispatch(removeSingleStock(stocksResponse.data.payload));
    } catch (e) {
      console.log(e)
    }
  }
}



export const getHistorical = (symbol) => {
  return async dispatch => {
    try {
      const histResponse = await axios.get(`/api/v1/stocks/historical?stock=${symbol}`);
      console.log(histResponse);
      let { history, name } =  histResponse.data.payload;

    } catch (e) {
      console.log(e)
    }
  }
}
