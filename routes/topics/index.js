//jshint esversion: 6

// ROUTES -- TOPICS

const express = require('express');
const router = express.Router();
const db = require('../../models');
const Topic = db.topic;

//GET/api/topics  :  respond with all topics including the creator's name
router.get('/', (req, res) => {
  return Topic.findAll()
  .then(topics => {
    res.json(topics);
  });
});

//GET/api/topics/:id  :  respond with topic by topicId
router.get('/:id', (req, res) => {
  const topicId = req.params.id;

  return Topic.findById(topicId)
  .then(topic => {
    return res.json(topic);
  });
});

// //POST/api/topics  :  create and respond with a new topic
router.post('/', (req, res) => {
  const userId = req.user.id;
  const name = req.body.name;

  return Topic.create( { name: name, created_By: userId })
  .then(newTopic => {
    return res.json(newTopic);
  });
});

// //PUT/api/topics/:id  :  update and respond with the updated topic
router.put('/:id', (req, res) => {
  let newTopic = req.body;
  let topicId = req.params.id;

  return Topic.findById(topicId)
  .then(topic => {
    if(req.user.id === topic.created_By){
      return Topic.update(newInfo, {
        where: [{id: topicId}]
      })
      .then(topic => {
        return res.json(topic);
      });
    }
    //can redirect if desired here (remove above semi-colon)
  });
});

module.exports = router;