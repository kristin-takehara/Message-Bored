//jshint esversion: 6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
//----------AUTHENTICATION----------
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const redis = require('connect-redis')(session);
//----------------------------------
const path = require('path');
const routes = require('./routes');

const db = require('./models');
const User = db.user;
const Message = db.message;
const Topic = db.topic;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//----------EXPRESS-----------------
app.use(express.static('public'));
//----------------------------------


//----------PASSPORT - AUTHENTICATION
app.use(session({
  // store: new redis(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('serializing');
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log('DEserialing');
  User.findOne({where: {id: user.id}})
  .then(user => {
    return done.null, {
      id: user.id,
      username: user.username
    };
  });
});

passport.use(new LocalStrategy(function(username, password, done){
  User.findOne({ where: {username: username} })
  .then(user => {
    if(user === null) {
      return done(null, false, { message: 'Bad username or password. Please try again'});
    }else{
      bcrypt.compare(password, user.password)
      .then(res => {
        console.log(res);
        if(res){
          return done(null, user);
        }else{ //limit user access
          return done(null, false, { message: 'Bad username or password. Please try again'});
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    }
  });
}));


app.post('/api/users', (req, res) => {
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      User.create({
        username: req.body.username,
        password: hash
      })
      .then((newUser) => {
        return res.json(newUser);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
    });
  });
});

//verify user authentication
function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  }else{
    res.redirect('/');
  }
}


//----------NAVIGATION MENU----------

//LogIN an authenticated user
app.post('/login', passport.authenticate('local', function(req, res) {
  let user = req.user;
  res.json(req.user);
}));

//LogOUT a user
app.get('/logout', (req, res) => {
  let user = req.user;
  req.logout(); //fire logout request
  res.sendStatus(200); //fire status ok response
  res.json(user);
});

app.get('/register', (req, res) => {
  res.render('./register');
});

app.get('/login', (req, res) => {
  res.render('./login');
});

//----------API ROUTES---------------
app.use('/api', routes);

//----------VIEWS--------------------
app.get('*', (req, res) => {
  res.sendFile('/index.html', { root: path.join(__dirname, '/public') });
});

///////////////////////////////////////

app.listen(PORT, () => {
  db.sequelize.sync({force:true});
  console.log(`Server listening on port: ${PORT}`);
});





// app.post('/register', (req, res) => {
//   bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(req.body.password, salt, function(err, hash) {
//       User.create({
//         username: req.body.username,
//         password: hash
//       })
//       .then((user) => {
//         console.log('user', user);
//         res.redirect('/');
//       })
//       .catch((err) => {
//         let message = { message: 'Sorry, please try your username and password again'};
//         console.log('Error: ', message);
//       });
//     });
//   });
// });


// // USERS
// app.get('/api/users', (req, res) => {
//   console.log('got all users');
// });

// app.get('/api/users/:id', (req, res) => {
//   console.log('got user and its messages ');
// });

// app.post('/api/users', (req, res) => {
//   console.log('new user created');
// });
// // TOPICS
// app.get('/api/topics', (req, res) => {
//   console.log('got all topics including creator');
// });//<<<--- does this need to be a joined path?

// app.post('/api/topics', (req, res) => {
//   console.log('new topic created');
// });

// app.put('/api/topics/:id', (req, res) => {
//   console.log('topic updated');
// });
// // MESSAGES
// app.post('/api/messages', (req, res) => {
//   console.log('new message created');
// });

// app.get('/api/messages/latest', (req, res) => {
//   console.log('got most recent 10 messages');
// });

// app.get('api/messages/by-topic/:topic_id', (req, res) => {
//   console.log('got all topic messages');
// });
