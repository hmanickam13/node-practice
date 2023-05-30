
const fs = require('fs');

//  View all the options when u type 'fs.'
// fs.

const files = fs.readdirSync('./');
console.log(files)

// call back function
fs.readdir('./', function(err, files) {
    if (err) console.log('Error: ', err);
    else console.log('Result: ', files);
});

// change ./ to $ and see what happens when you run this file