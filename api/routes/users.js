const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');

//Register

router.post('/register', (req,res,next) => {
  let newUser = new User({
    username: req.body.username,
    gender: req.body.gender
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    }else{
      res.json({success: true, msg:'User registered'});
    }
  });
});

//Authenticate

router.post('/authenticate', (req,res,next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err){
        throw err;
    }
    if(!user){
        return res.json({success: "false", msg:"User not found"});
    }

    if (password){
        const token = jwt.sign(user, config.secret, {
            expiresIn: 604800 // 1 week
        });

        res.json({
        success: true,
        token: 'JWT '+token,
        user: {
            id: user._id,
            username: user.username,
            gender: user.gender
            }
        });
    }else{
        res.json({success:false,msg:"password not true"});
    }
  });
});

//Profile

router.get('/chat',passport.authenticate('jwt', {session: false}), (req,res,next) => {
  res.json({success: true, user: req.user});
});

module.exports = router;
