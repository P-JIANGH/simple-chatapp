/***************
  Use Socket.io (WebSocket)
***************/

// import io from 'socket.io-client';
// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     terminal: false,
// });

// const client = io('http://localhost:5000');

// client.on('connect', () => {
//     console.log('connected ->', client.connected);
// });

// client.on('message', (msg) => {
//     console.log(`>>> ${msg}`)
// });

// rl.on('line', msg => {
//     client.send(msg)
// });

// process.stdin.resume();

/**********************
 * Use net (TCP-Socket)
 *********************/
// import net from 'net';
// import readline from 'readline';

// const client = new net.Socket();
// const client = new net.createServer
// const rl = readline.createInterface({
//     input: process.stdin,
//     terminal: false,
// });

// process.stdin.resume();

// rl.on('line', msg => {
//     client.write(msg, 'utf-8');
// });

// client.connect(8000, 'localhost', () => {
//     console.log('connected');
// })

// client.addListener('data', data => {
//     console.log(`>>> ${data}`);
// });

/**********************
 * Use dgram (UDP-Socket)
 *********************/
import dgram from 'dgram';
import readline from 'readline';

const client = new dgram.createSocket('udp4');

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false,
});

process.stdin.resume();

rl.on('line', msg => {
    client.send(msg, 8000, 'localhost')
});

client.addListener('message', data => {
    console.log(`>>> ${data}`);
});
