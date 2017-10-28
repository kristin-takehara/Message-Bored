//jshint esversion: 6

// ROUTES - MESSAGES

const express = require('express');
const router = express.Router();
const db = require('../../models');
const Message = db.message;

// console.log('Message', Message);

// //POST/api/messages  :  create and respond with the new message
router.post('/', (req, res) => {
  const body = req.body.body;
  const userId = req.user.id;
  const topicId = req.topic.id;

  //<<<---- Enter logic

  return Message.create( {body: body, author_id: userId, topic_id: topicId})
  .then(newMessage => {
    // console.log(newMessage);
    return res.json(newMessage);
  })
  .catch((err) => {
    console.log('Unable to add new message', err);
  });

});


//GET/api/messages/latest  :  respond with
//- the latest 10 messages
//- including the name of the topic
//- and the author's name
router.get('/latest', (req, res) => {
  return Message.findAll({
    order: [['createdAt', DESC]],
    limit: 10
  })
  .then(message => {
    res.json(message);
  })
  .catch((err) => {
    console.log('Message not found', err);
  });
});

//GET/api/:id  :  get messages by their id
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  return Message.findAll({
    where: {
      author_id: userId
    }
  })
  .then(message => {
    return res.json(message);
  })
  .catch((err) => {
    console.log('Unable to get message by id', err);
  });
});

//GET/api/messages/by-topic/:topic_id  :  respond with all messages that belong to the topic by :topic_id, including the topic name, author's name, ordered by: createdAT ASC
router.get('/by-topic/:topic_id', (req, res) => {
  const topicId = req.params.topic_id;

  return Message.findAll({
    where: {
      topic_id: topic_id
    },
    order: [['createdAt', ASC]]
  })
  .then(message => {
    res.json(message);
  })
  .catch((err) => {
    console.log('Unable to find your request', err);
  });
});


module.exports = router;