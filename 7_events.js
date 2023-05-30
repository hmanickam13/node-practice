
const EventEmitter = require('events');
// Notice the upper case in the first letter of every word.
// This indicates that it is a class and not a function, not a simple value, but a class.
// Class is a container for properties and functionw which we call methods.


// const emitter = new EventEmitter();
// emitter is an object
// class is example a human and object is example john, or jacob

// View the methods below
// emitter.

// // Register a listener emitter.addListener aka emitter.on
// emitter.on('messageLogged',function(arg){
//     console.log('Listener called: ', arg)

//     // why does below not work?
//     // console.log(`Listener called: ${arg}`)
// })

// emitter.emit('messageLogged', {id: 1, 'url':'http://example.com'})
// // used to raise an event

// Order matters, you cant register a listener after raising an event

// Raise: logging (data: message)

const Logger = require('./3.1_logger');
// object of class
const logger = new Logger();

//  arrow function
logger.on('messageLogged',(arg) => {
    console.log('Listener called: ', arg)
})

logger.log('showing message');