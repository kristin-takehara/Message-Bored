//jshint esversion: 6

// ROUTES -- INDEX

const express = require('express');
const router = express.Router();

//pull in the other routes here
const users = require('./users');
const topics = require('./topics');
const messages = require('./messages');

router.route('/')
  .get((req, res) => {
    res.send('Hello World');
  });

module.exports = router;