var express = require('express');
var router = express.Router();
var users = require('../models/users.js');
const fs = require('fs');
const db = require('../utils/db');





// // /* GET home page. */
// router.get('/', function (req, res, next) {
//   const users = JSON.parse(fs.readFileSync("./spec/fixtures/mockdata.json"));
//   console.log("data here", users)
//   // const promises = users.map(element => {
//   //     console.log("elements here",element);

//   //     return 
//   // });
//   res.send("users", { users: users });
//   res.render('layout', { users: users });
// });




/* GET users listing. */
router.get('/', function (req, res, next) {
  users.getAll().then((result) => {
    const users = result.map(item => ({
      First: item.FirstName,
      Last: item.LastName,
      Active: item.IsActive
    }));
    res.send({ Users: users });
    res.render('layout', { Users: users });
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
