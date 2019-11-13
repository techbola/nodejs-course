const fs = require('fs');
const http = require('http');

const server = http.createServer(
    (request, result) => {
        fs.readFile('./hello.html', (err, data) => {
            if (err) throw err;
                result.end(data);
        });
    }
);

server.listen(8081, 'localhost');