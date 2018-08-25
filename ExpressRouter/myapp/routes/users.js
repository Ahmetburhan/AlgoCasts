// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
var users = require('../models/users.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(users)
  users.all().then((result) => {
    console.log("result", result)
    const users = result.map(item => ({
      First: item.FirstName,
      Last: item.LastName,
      Active: item.IsActive
    }));
    res.send("users", { Users: users });

  })
    .catch((err) => {
      res.sendStatus(500);
      res.render('error', { message: "Cannot get users", error: err });
    });
});

/* INSERT mocked user data */
router.get('/setup-mock-data', function (req, res, next) {
  users.insertMockData().then((result) => {
    res.render('status', { status: `${result.message}\nUsers in database: ${result.count}` });
  })
    .catch((err) => {
      res.render('error', { message: "Cannot insert mock data", error: err });
    });
});

module.exports = router;

