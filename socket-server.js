/***************
 * Use Socket.io (WebSocket)
***************/

// import socketIo from 'socket.io';
// import readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   terminal: false,
// });

// rl.on('line', (msg) => {
//   io.send(msg);
// })

// const io = socketIo(5000)

// io.on('connection', socket => {
//   console.log('* a user connected');
//   socket.on('message', msg => {
//     console.log(`>>> ${msg}`)
//   });
// })
// process.stdin.resume();

/**********************
 * Use net (TCP Socket)
 *********************/
// import net from 'net';

// const server = net.createServer(socket => {
//   console.log(`Connecting from: ${socket.address().address} ${socket.address().port}`)
//   // socket.pipe(socket);
//   socket.addListener('data', (data) => {
//     socket.write(`[${new Date()}] ${data}`, 'utf-8');
//   })
// })

// server.listen(8000, 'localhost');

/**********************
 * Use net (UDP Socket)
 *********************/
import dgram from 'dgram';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false,
});

const server = dgram.createSocket('udp4', (msg, rinfo) => {
  console.log(`Recived message ${msg} from ${rinfo.address} ${rinfo.port}`);
  server.send(`[${new Date().toDateString()}] ${msg}`, rinfo.port, rinfo.address)
});

server.addListener('message', (msg, rinfo) => {
  console.log(`Recived message ${msg} from ${rinfo.address} ${rinfo.port}`);
  server.send(`[${new Date().toDateString()}] ${msg}`, rinfo.port, rinfo.address)
});

process.stdin.resume();


// const server = net.createServer(socket => {
//   console.log(`Connecting from: ${socket.address().address} ${socket.address().port}`)
//   // socket.pipe(socket);
//   socket.addListener('data', (data) => {
//     socket.write(`[${new Date()}] ${data}`, 'utf-8');
//   })
// })

// server.listen(8000, 'localhost');

