var express = require('express');
var router = express.Router();
var users = require('../models/users.js');

/* GET users listing. */
router.get('/api/v1/users', function(req, res, next) {
  console.log(users)
  users.getAll().then((result) => {
    console.log("result", result)
    const users = result.map(item => ({
      First: item.FirstName,
      Last: item.LastName,
      Active: item.IsActive
    }));
    res.render('users', { users: users });

    // res.send("users", {users: users});

  })
  .catch((err) => {
    res.sendStatus(500);
    res.render('error', { message: "Cannot get users", error: err });
  });
});

/* INSERT mocked user data */
router.get('/setup-mock-data', function(req, res, next) {
  users.insertMockData().then((result) => {
    res.render('status', { status: `${result.message}\nUsers in database: ${result.count}` });
  })
  .catch((err) => {
    res.render('error', { message: "Cannot insert mock data", error: err });
  });
});

module.exports = router;
