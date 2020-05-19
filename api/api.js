'use strict';
const express = require('express');
const ioClient = require('socket.io-client');
const port = process.env.PORT;

const app = express();


app.listen(port, () => {
  console.log('port connected and running on', port)
})