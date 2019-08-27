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


app.use('/', routes);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})