const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    unique: true
  },
  name: String,
  currency: String,
  stock_exchange_long: String,
  price: Number,
  price_open: Number,
  day_high: Number,
  day_low: Number,
  day_change: Number,
  change_pct: Number,
  close_yesterday: Number,
  market_cap: Number,
  volume: Number,
  volume_avg: Number,
  shares: Number,
  stock_exchange_short: String
});

const Stock = mongoose.model('Stock', StockSchema);

module.exports = { Stock };
