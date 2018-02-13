const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User schema
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  facebook_id: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id,callback){
  User.findById(id,callback);
};

module.exports.getUserByUsername = function (username,callback){
  const query = {username: username};
  User.findOne(query,callback);
};

module.exports.addUser = function(newUser, callback){
      newUser.save(callback);
};
