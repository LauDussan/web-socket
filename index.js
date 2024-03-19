import { WebSocketServer } from 'ws';
//https://blog.postman.com/set-up-a-websockets-server-in-node-js-postman/

const wss = new WebSocketServer({ port: 8080 });

let gpu_client ={};

const clients = [];
wss.on('connection', function connection(ws) {
    console.log("connected");
    clients.push(ws);
  ws.on('message', function message(data) {
    // console.log(JSON.stringify(data,null,2))
    // console.log(data.toString())
    data = data.toString()
    if (data == "GPU-1234"){
        gpu_client = ws
    }
    if (data.startsWith("classify")){
        gpu_client.send(data);
    }
    console.log('received: %s', data);
    setTimeout(()=>{ws.send("Segundo Mensaje",5000)})
  });

  ws.send('something');
});
/*
clients.forEach(client => {
    clients[i].send('new somthing' + i);
  });
*/
  /*
  for var i = 0; i< clients.length; i++{
    clients[i].send('new somthing' + i);
  }
});
*/
