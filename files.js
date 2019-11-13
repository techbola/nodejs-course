// working with files
// import the file system module
const fs = require('fs');

const data = fs.readFileSync('system.js');
console.log(data.toString());

// create a new file and input data into it
// fs.writeFileSync('data.txt', 'Hello World');

// add new data into an existing file
// fs.appendFileSync('data.txt', 'Another Message');

// copy a file
// fs.copyFileSync('data.txt', 'data.bak.txt');

// rename a file
// fs.renameSync('data.bak.txt', 'data.old.txt');

// delete a file
// fs.unlinkSync('data.old.txt');

// read content od a directory
// const dir = fs.readdirSync(__dirname);
// console.log(dir);

// create a new directory
// fs.mkdirSync('file-system');

// move a file from present directory to another
// fs.renameSync('data.txt', 'file-system/data.txt');

// to watch for chages in a particular file
// fs.watchFile('file-system/data.txt', () => {
//     console.log('Data file was changed');
// });