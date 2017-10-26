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
const Users = db.users;
const Messages = db.messages;
const Topics = db.topics;


const routes = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static('public'));

// app.use('/api', routes);

app.listen(PORT, () => {
  // db.sequelize.sync({force:true});
  console.log(`Server listening on port: ${PORT}`);
});