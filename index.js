import {io} from 'socket.io-client';

// client instance Socket.IO and connection to server
const socket = io.connect('http://localhost:3000');

// listening on 'connect'
socket.on('connect', () => {
  console.log('Connected to server!');
});

// listening on 'message' (sent from server)
socket.on('message', (data) => {
  console.log(`Received message: ${data}`);
});

// sending message
const sendMessage = (message) => {
  console.log("sending");
  var res = socket.emit('message', message);
  //console.log(res);
};


for(var i=0;i<10000;++i)
{
  sendMessage("no: " + i + " time: " + Date.now());
}