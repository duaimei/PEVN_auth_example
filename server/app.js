const express = require('express')
// const Knex = require('knex');
// const knexConfig = require('./knexfile');
// const { Model } = require('objection');
const cors = require('cors');
const routes = require('./routes');
// const passport = require('passport')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

// const knex = Knex(knexConfig.development);
// Model.knex(knex);

app.use(bodyParser.json())
app.use(cors({
  origin: 'http://localhost:8080'
}));

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

app.use('/', routes);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})