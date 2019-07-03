const express = require('express');
const axios = require('axios');

const router = express.Router();
const apiKey = process.env.WTD_API_KEY;

// fetch overview stock data
router.get('/overview', async (req, res) => {
  const { stock } = req.query;

  try {
    const stockData = await axios.get(`https://api.worldtradingdata.com/api/v1/stock?symbol=${stock}&api_token=${apiKey}`);
    console.log(stockData.data);
    return res.send({ payload: stockData.data });
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
