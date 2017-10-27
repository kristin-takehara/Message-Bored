//jshint esversion: 6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//----------AUTHENTICATION----------
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const session = require('express-session');
// const bcrypt = require('bcrypt');
// const saltRounds = 12;
// const redis = require('connect-redis')(session);
//----------------------------------

const db = require('./models');
const User = db.user;
const Message = db.message;
const Topic = db.topic;

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static('public'));

/////API ROUTES///////////////
app.use('/api', routes);
// USERS
app.get('/api/users', (req, res) => {
  console.log('got all users');
});

app.get('/api/users/:id', (req, res) => {
  console.log('got user and its messages ');
});

app.post('/api/users', (req, res) => {
  console.log('new user created');
});
// TOPICS
app.get('/api/topics', (req, res) => {
  console.log('got all topics including creator');
});//<<<--- does this need to be a joined path?

app.post('/api/topics', (req, res) => {
  console.log('new topic created');
});

app.put('/api/topics/:id', (req, res) => {
  console.log('topic updated');
});
// MESSAGES
app.post('/api/messages', (req, res) => {
  console.log('new message created');
});

app.get('/api/messages/latest', (req, res) => {
  console.log('got most recent 10 messages');
});

app.get('api/messages/by-topic/:topic_id', (req, res) => {
  console.log('got all topic messages');
});
///////////////////////////////////////

app.listen(PORT, () => {
  db.sequelize.sync({force:true});
  console.log(`Server listening on port: ${PORT}`);
});