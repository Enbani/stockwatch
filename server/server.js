require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT;
const environment = process.env.ENVIRONMENT;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    payload: 'success!'
  });
});

app.listen(port, () => {
  console.log(`app server started at port ${port}`);
});

module.exports = { app };
