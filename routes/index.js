//jshint esversion: 6

// ROUTES -- INDEX

const express = require('express');
const router = express.Router();

//pull in the other routes here

const users = require('./users');
const topics = require('./topics');
const messages = require('./messages');

//must give the server direction(a.k.a 'street sign')

router.use('/users', users);
router.use('/topics', topics);
router.use('/messages', messages);

module.exports = router;