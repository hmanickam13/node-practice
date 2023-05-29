// var x =;

console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';
// fake url

function log(message) {
    // Send an HTP request
    //  Logging msg for now
    console.log(message);
}

// using the export module to export the function as an object.
// module.exports.log = log;

// implementation detail
// module.exports.endPoint = url; 

// Objects are useful only when we have multiple methods or properties to export
// If we want to export a single function, 
module.exports = log;
//  Because of this, inside 3_modules, logger is no longer an object but a function.

// each module is passed as a function by js during runtime, it does not directly run it like import in python
// exports, require, module, __filename, __dirname are the parameters that is passed to the module wrapper function
// you can view this function and its parameter's by uncommenting the first line in this file and running node 3_modules.js

// valid lines
// module.exports.log = log;
// exports.log = log;

// invalid lines
// exports = log; // this is wrong, exports is a reference to module.exports