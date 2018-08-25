const debug = require('debug')('app:users');
const fs = require('fs');
const db = require('../utils/db');
const Schema = require('mongoose').Schema;

const userSchema = new Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Gender: String,
  IsActive: Boolean,
  LastLoginDate: Date,
});

const User = db.model('User', userSchema);

const UsersModel = {

  model: User,

  insert(data) {
    const user = new User(data);

    debug(`Insert user into db: ${JSON.stringify(user)}`);
    return user.save();
  },

  removeAll() {
    return User.remove({});
  },

  insertMockData() {
    return User.count({}).then((count) => {
      if (count === 0) {
        const data = JSON.parse(fs.readFileSync("../spec/fixtures/mockdata.json"));
        const promises = data.map(element => UsersModel.insert(element));
        return Promise.all(promises)
          .then(() => {
            debug('All mock data inserted.');
            return {message: 'Mock data inserted', count: promises.length};
          })
          .catch((error) => {
            debug(`Error adding mock data: ${error}`);
          });
      } else {
        return {message: 'Mock data not inserted', count};
      }
    });
  },

  getAll() {
    return 
  const data = JSON.parse(fs.readFileSync("./spec/fixtures/mockdata.json"));
  console.log("data here", data)
  const promises = users.map(element => {
      console.log("elements here",element);

      
  })
  return data;
 
},

  // getActiveUsers() {
  //   return Promise.reject(new Error('Not Implemented'));
  // },
  getActiveUsers() {
    if(data){
      if (data["IsActive"] === true)

    }
    return console.log(user);
  }
}


module.exports = UsersModel;