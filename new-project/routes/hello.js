const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.get('/time', (req, res, next) => {
    res.json({
        time: new Date().toISOString()
    });
});

router.post('/hash', (req, res, next) => {
    const plainText = req.body.plainText;
    const hash = crypto.createHash('md5').update(plainText).digest('hex');
    res.json({
        plainText,
        hash,
    });
});

router.get('/:name', (req, res, next) => {

    // getting query data from path
    // /hello?name=bola
    // const name = req.query.name;

    // getting params from path
    // /hello/:name
    const name = req.params.name;

    res.render('hello', { name });

});

module.exports = router;