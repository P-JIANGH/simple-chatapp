/***************
 * Use Socket.io (WebSocket)
***************/

import socketIo from 'socket.io';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

rl.on('line', (msg) => {
  io.send(msg);
})

const io = socketIo(5000)

io.on('connection', socket => {
  console.log('* a user connected');
  socket.on('message', msg => {
    console.log(`>>> ${msg}`)
  });
})
process.stdin.resume();

/**********************
 * Use net (Socket)
 *********************/
// import net from 'net';
// import readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   terminal: false,
// });
// const server = net.createServer(socket => {
//   socket.write('>> Echo from Server');
//   socket.pipe(socket);
// })

// server.listen(8000, 'localhost');

// rl.on('line', (msg) => {
// });
