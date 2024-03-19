import { WebSocketServer } from 'ws';
//https://blog.postman.com/set-up-a-websockets-server-in-node-js-postman/

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});