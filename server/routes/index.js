var express = require('express');
var router = express.Router();

var messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

/* GET new message page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

/* POST new message page */
router.post('/new', function(req, res, next) {
  // Get username and message from request body
  console.log(req.body);
  let { username, message } = req.body;
  console.log()

  // Push new message to messages array
  messages.push({
    user: username,
    text: message,
    added: new Date(),
  });

  // Redirect to homepage (main message board)
  res.redirect('/');
});


module.exports = router;
