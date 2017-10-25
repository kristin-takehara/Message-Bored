//jshint esversion: 6

// ROUTES -- USERS

const express = require('express');
const router = express.Router();
const db = require('../models');
const Users = db.users;

//GET/api/users  :  respond with all users
router.get('/', (req, res) => {
  return Users.findAll()
  .then(users => {
    let locals = { users : users };
    return res.render('./index', locals);
  })
  .catch((err) => {
    let message = { message : 'Unable to find all users. Please try your request again' };
    res.render('./error', message);
  });
});

//GET/api/users/:id  :  respond with user and all messages authorized by this user
router.get('/:id', (req, res) => {
  const usersId = req.params.id;

  return Users.findAll({
    where: {
      id: usersId
    }
  });
});

//POST/api/users  :  create and respond with new user
router.post('/', (req, res) => {
  console.log('req.user', req.user);
  const name = req.body.name;
  const createdAt = req.body.createdAt;
  const updatedAt = req.body.updatedAt;
  //Enter logic

// <<<---pick up HERE

});