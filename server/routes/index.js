const routes = require('express').Router();
// const models = require('./models');
// const games = require('./games')
// const user = require('./user')

// routes.use('/models', models);
// routes.use('/games', games);
// routes.use('/user', user);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to root routes!' });
});

routes.get('/auth/google', (req, res) => {
  res.status(200).json({message: 'google auth link'})
})

routes.post('/auth/google', (req, res) => {
  res.status(200).json({message: 'google auth post link'})
})

module.exports = routes;