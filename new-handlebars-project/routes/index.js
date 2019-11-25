var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hbs', (req, res, next) => {
  res.render('hbs-example', {
    title: '<h1>Example HBS Template</h1>',
    showTitle: true,
    data: ['apples', 'oranges', 'pears', 'kiwi']
  });
});

module.exports = router;
