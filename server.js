const http = require('http');
const express = require('express');
const app = express();
const socketIo = require('socket.io');

app.use(express.static('public'));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/public/index.html');
});

const port = process.env.PORT || 3000;

const server = http.createServer(app)
                 .listen(port, function () {
                    console.log('Listening on port ' + port + '.');
                  });

const io = socketIo(server);
module.exports = server;
