const routes = require('express').Router();
const secret = require('../config/secrets.json')
const {google} = require('googleapis');


const oauth2Client = new google.auth.OAuth2(
  secret.GOOGLE_CLIENT_ID,
  secret.GOOGLE_CLIENT_SECRET,
  ["http://localhost:8080/auth/google/callback"]
);

routes.get('/yess', (req, res) => {
  console.log('started to do /yess')
  res.status(200).json({message: 'google auth link'})
})

routes.post('/auth/google', (req, res) => {
  console.log('auth google post req')
  oauth2Client.params = ["profile"]
  oauth2Client.getToken(req.body.code, function (err, tokens) {
    const credentials = oauth2Client.setCredentials(tokens);
    console.log(err)
  })
})

routes.get('/auth/google/callback', (req, res) => {
  res.send(req.user);
})

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the index of the routes folder!' });
});

module.exports = routes;