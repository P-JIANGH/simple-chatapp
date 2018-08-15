/***************
  Use Socket.io (WebSocket)
***************/

// import io from 'socket.io-client';
// import readline from 'readline';

// const rl = readline.createInterface({
//     input: process.stdin,
//     terminal: false,
// });

// const client = io('http://localhost:8000');

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
 * Use net (Socket)
 *********************/
import net from 'net';
import readline from 'readline';

const client = new net.Socket();
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false,
});

rl.on('line', msg => {
    client.write(msg)
});

process.stdin.resume();

client.connect(8000, 'localhost', () => {
    console.log('connected');
})

client.on('message', data => {
    console.log(`>>> ${data}`);
});

client.on('close', () => {
    console.log('connect closed')
});
