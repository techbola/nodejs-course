const dns = require('dns');

// to checkup the ipadress that belongs to a domain name
// dns.lookup('techbola.com.ng', (err, value) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log(value);

// });

// the resolve is almost same as the lookup
// with the resolve you can get the mail mx records etc for a domain name
// dns.resolve('techbola.com.ng', 'MX', (err, value) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log(value);

// });

// used to get the hosting server that belongs to an ipaddress
dns.reverse('192.3.45.50', (err, value) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(value);

});