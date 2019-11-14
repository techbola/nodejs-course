const crypto = require('crypto');

// const hash = crypto.createHash('md5')
//     .update('password')
//     .digest('hex');

const secret = 'secret key';

const hash = crypto.createHmac('sha256', secret)
    .update('password')
    .digest('hex');

console.log(hash);