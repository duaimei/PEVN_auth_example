const routes = require('express').Router();
const passport = require('passport')
const {OAuth2Client} = require('google-auth-library');
const secret = require('../config/secrets.json')

routes.get('/yess', (req, res) => {
  console.log('started to do /yess')
  res.status(200).json({message: 'google auth link'})
})

// routes.get('/auth/google', passport.authenticate('google', { 
//   scope: ['profile']
// }))

routes.get('/auth/google', (req, res) => {
  console.log('auth google res')
  console.log(res)
  res.send(req)
})

routes.post('/auth/google', (req, res) => {
  console.log('auth google post req')
  console.log(req.body.code)
  const client = new OAuth2Client(secret.GOOGLE_CLIENT_ID);
  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: req.body.code,
        audience: secret.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
  
    });
    const payload = ticket.getPayload();
    console.log('PAYLOAD!!!!!!!!!')
    console.log(payload)
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    //const domain = payload['hd'];
  }
  verify().then(() => {
    res.send(req.body.code)
  }).catch(console.error);
    
  })

routes.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.send(req.user);
})

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the index of the routes folder!' });
});

module.exports = routes;