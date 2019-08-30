const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const secret = require('./secrets.json')
const User = require('../models/users')
const Knex = require('knex');
const knexConfig = require('../knexfile');
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex);


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
      done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
      // options for google strategy
      clientID: secret.GOOGLE_CLIENT_ID,
      clientSecret: secret.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
      // check if user already exists in our own db
      User.query().where({uid: profile.id}).then((currentUser) => {
          if(currentUser.length > 0){
              // already have this user
              console.log('user is: ', currentUser[0]);
              done(null, currentUser[0]);
          } else {
              // if not, create user in our db
              const userInfo = {
                uid: profile.id,
                first_name: profile.name.givenName,
                last_name: profile.name.familyName,
                provider: profile.provider
              }
              knex('users').insert(userInfo).then((newUser) => {
                  console.log('created new user: ', newUser);
                  done(null, newUser);
              });
          }
      });
  })
);