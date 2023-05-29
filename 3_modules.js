
// console.log(module);

// one of the node functions, not avl in browsers. '.s' gets added automtically by node
const log = require('./3.1_logger')
// Comment above line and uncomment below 2 lines and observe what happens
// var logger = require('./3.1_logger')
// logger = 1; 
// if var logger, we can overwrite, if const, error is a compile time error rather than a runtime error.
// Using const allows us to debug using tools like jshint

// Uncomment and view
// console.log(log)
// log.log('message printed');

// logger is no longer an object. It is a function because of the way we exported it
log('message printed');
