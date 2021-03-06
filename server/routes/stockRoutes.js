// require packages
const express = require('express');
const axios = require('axios');
const moment = require('moment');
// require models
const { Stock } = require('../models/stock');

// define API key for World Trading Data API
const apiKey = process.env.WTD_API_KEY;

const router = express.Router();

// fetch overview stock data
router.get('/', async (req, res) => {
  try {
    const allStocks = await Stock.find({});
    return res.send({ payload: allStocks });
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
});


router.get('/add-stock', async (req, res) => {
  const { stock } = req.query;

  try {
    const data = await axios.get(`https://api.worldtradingdata.com/api/v1/stock?symbol=${stock}&api_token=${apiKey}`);
    const stockData = data.data.data[0];
    const {
      name,
      currency,
      stock_exchange_long,
      price,
      price_open,
      day_high,
      day_low,
      day_change,
      change_pct,
      close_yesterday,
      market_cap,
      volume,
      volume_avg,
      shares,
      stock_exchange_short,
      symbol
    } = stockData


    const body = {
      name,
      currency,
      stock_exchange_long,
      price,
      price_open,
      day_high,
      day_low,
      day_change,
      change_pct,
      close_yesterday,
      market_cap,
      volume,
      volume_avg,
      shares,
      stock_exchange_short,
      symbol
    }

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
  let toDate = moment().format("YYYY-MM-DD");
  let fromDate = moment().subtract(10, 'years').format("YYYY-MM-DD");

  try {
    const historicalData = await axios.get(`https://api.worldtradingdata.com/api/v1/history?symbol=${stock}&api_token=${apiKey}&sort=newest&date_from=${fromDate}&date_to=${toDate}`);
    console.log(historicalData.data);
    return res.send({ payload: historicalData.data });
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
});

router.delete('/remove-stock/:symbol', async (req, res) => {
  const { symbol } = req.params;

  try {
    const stock = await Stock.findOneAndRemove({ symbol });
    return res.send({ payload: stock });
  } catch (e) {
    console.log(e)
    return res.status(400).send({ error: e.message });
  }
});

module.exports = router;
