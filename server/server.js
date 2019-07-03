require('./config/config');
// require packages
const express = require('express');
const bodyParser = require('body-parser');

// set constants based on env variables
const port = process.env.PORT;
const environment = process.env.ENVIRONMENT;

// init app
const app = express();
// treat all requests as json
app.use(bodyParser.json());

const stocks = require('./routes/stockRoutes');

// set API routes
app.use('/api/v1/stocks', stocks);


app.listen(port, () => {
  console.log(`app server started at port ${port}`);
});

module.exports = { app };
