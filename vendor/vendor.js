const faker = require('faker');
const ioClient = require('socket.io-client');
const flowerSocket = ioClient.connect('http://localhost:3001');
const candySocket = ioClient.connect('http://localhost/3001');