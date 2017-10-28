//jshint esversion: 6

// ROUTES -- USERS

const express = require('express');
const router = express.Router();
const db = require('../../models');
const User = db.user;

//GET/api/users  :  respond with all users
router.get('/', (req, res) => {
  return User.findAll()
  .then(users => {
    res.json(users);
  })
  .catch((err) => {
    console.log('Users not found', err);
  });
});

// GET/api/users/:id  :  respond with user and all messages authorized by this user
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  return User.findById(userId)
    .then(user => {
      return res.send(user);
    })
    .catch((err) => {
      console.log('User not found. Please try your request again', err);
    });
});

// //POST/api/users  :  create and respond with new user
// router.post('/', (req, res) => {
//   let username = req.body.username;
//   return User.create( { username: username})
//   .then(newUser => {
//     return res.json(newUser);
//   });
// });

module.exports = router;