const logEvents = require('./logEvents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize object
const myEmitter = new MyEmitter();

// listener for the log event
myEmitter.on('log', (msg)=> logEvents(msg));

// lister for email event
myEmitter.on('email',(msg)=> logEvents(msg));

setTimeout(()=> {
    // Emit event
    myEmitter.emit('log', 'Log event emitted');
}, 2000)

setTimeout(()=> {
    // Emit event
    myEmitter.emit('email', 'Email event emitted');
}, 2000)

   