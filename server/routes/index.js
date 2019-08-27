const routes = require('express').Router();
const passport = require('passport')
const secret = require('../config/secrets.json')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const cors = require('cors')

const allowedOrigins = ['http://localhost:8080', 'https://account.google.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
cors(corsOptions)

passport.use(new GoogleStrategy({
  clientID: secret.GOOGLE_CLIENT_ID,
  clientSecret: secret.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

routes.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

  routes.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('it is now time to redirect')
    res.redirect('/');
  });

routes.get('/auth/google', (req, res) => {
  console.log('started to do /auth/google')
  res.status(200).json({message: 'google auth link'})
})

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the index of the routes folder!' });
});

module.exports = routes;