const dns = require('dns');

dns.lookup('techbola.com', (err, value) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(value);

});