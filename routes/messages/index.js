//jshint esversion: 6
// ROUTES - MESSAGES
const express = require('express');
const router = express.Router;
const db = require('../models');
const Messages = db.messages;


//GET/api/messages/lates  :  respnd with the latest 10 messages including the name of the topic and the author's name




//POST/api/messages  :  create and respond with the new message




//GET/api/messages/by-topic/:topic_id  :  respond with all messages that belong to the topic by :topic_id, including the topic name, author's name, ordered by: createdAT ASC