//jshint esversion: 6

// ROUTES -- USERS

const express = require('express');
const router = express.Router();
const db = require('../../models');
const User = db.user;

//GET/api/users  :  respond with all users
router.get('/', (req, res) => {
  return User.findAll()
  .then(user => {
    res.json(user);
  })
  .catch((err) => {
    console.log('Users not found', err);
  });
});

// GET/api/users/:id  :  respond with user and all messages authorized by this user
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  return User.findAll({
    where: {
      id: userId
    }
  });
});

// //POST/api/users  :  create and respond with new user
router.post('/', (req, res) => {
  console.log('req.user', req.user);
  const userId = req.body.id;
  const name = req.body.name;
  const createdAt = req.body.createdAt;
  const updatedAt = req.body.updatedAt;

  //<<<---- Enter logic

  return User.create( { userId: userId, name: name, createdAt: createdAt, updatedAt: updatedAt });

});


module.exports = router;