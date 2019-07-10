module.exports = function (io) {
  io.on('connection', (client) => {
    console.log('Connection with client established\n\n');
  });
};
