// require packages
const express = require('express');
const axios = require('axios');
// require models
const { Stock } = require('../models/stock');

// define API key for World Trading Data API
const apiKey = process.env.WTD_API_KEY;

const router = express.Router();

// fetch overview stock data
router.get('/overview', async (req, res) => {
  const { stock } = req.query;

  try {
    const data = await axios.get(`https://api.worldtradingdata.com/api/v1/stock?symbol=${stock}&api_token=${apiKey}`);
    const stockData = data.data.data[0];
    const body = {
      symbol: stockData.symbol,
      description: stockData.name,
      currency: stockData.currency,
      exchange: stockData.stock_exchange_long
    };

    const newStock = new Stock(body);
    const savedStock = await newStock.save();

    return res.send({ payload: savedStock });
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
});

// fetch time-series historical data
router.get('/historical', async (req, res) => {
  const { stock } = req.query;

  try {
    const historicalData = await axios.get(`https://api.worldtradingdata.com/api/v1/history?symbol=${stock}&api_token=${apiKey}&sort=newest`);
    console.log(historicalData.data);
    return res.send({ payload: historicalData.data });
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
});

module.exports = router;
