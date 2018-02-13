const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const facebookTokenStrategy = require('passport-facebook-token');
const User = require('../models/user');
const config = require('../config/database');

module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload._doc._id, (err, user) => {
        if(err){
          return done(err, false);
        }

        if(user){
          return done(null, user);
        }else{
          return done(null, false);
        }
    });
  }));

  passport.use('facebookToken', new facebookTokenStrategy({
    clientID:'1584930958210813',
    clientSecret: '0acd82d8eea81220ef97a3799e71938d',
    profileFields: ['id', 'displayName', 'gender']
  }, (accessToken, refreshToken, profile, done) =>{
      try{
        console.log('profile', profile);
        console.log('accessToken', accessToken);
        console.log('refreshToken', refreshToken);

        User.findOne({"facebook_id":profile.id}, (err,user)=>{
          if(err){
            console.log('user not found');
          }
          if(user){
            return done(null ,user);
          }
        });
        const newUser = new User({
          username: profile.displayName,
          facebook_id: profile.id,
          gender: profile.gender
        });

        User.addUser(newUser, (err, user) => {
          if(err){
            console.log('user not registered');
          }else{
            console.log('user saved');
            return done(null ,user);
          }
        });
      }catch(error){
        done(error, false,error.message);
      }
  }));
}
