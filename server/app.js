const express = require('express')
const cors = require('cors');
const routes = require('./routes');
// const cookieSession = require('cookie-session');
const bodyParser = require('body-parser')
const Knex = require('knex');
const knexConfig = require('./knexfile');
const { Model } = require('objection');

const knex = Knex(knexConfig.development);
Model.knex(knex);


const app = express()
const port = 3000

app.use(bodyParser.json())
const allowedOrigins = ['http://localhost:8080', 'https://account.google.com']
app.use(cors({
  origin: 'http://localhost:8080'
}));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/', routes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})