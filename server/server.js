require('./config/config');
// require packages
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const http = require('http');

// require db configs
const { mongoose } = require('./db/mongoose');

// require routes
const { stockRouter } = require('./routes');

// set constants based on env variables
const port = process.env.PORT;
const environment = process.env.ENVIRONMENT;

// init app
const app = express();

// init sockets
const server = http.createServer(app);
const io = socketIO.listen(server);
require('./sockets')(io);

// treat all requests as json
app.use(bodyParser.json());

// set API routes
app.use('/api/v1/stocks', stockRouter);


// start server and listen on the configured port
server.listen(port, () => {
  console.log(`app and socket server started at port ${port}`);
});

module.exports = { app };
