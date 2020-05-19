const io = require('socket.io');
const port = process.env.PORT || 3001;

const server = io(port, () => {
  console.log('port connected and running on ', port)
});