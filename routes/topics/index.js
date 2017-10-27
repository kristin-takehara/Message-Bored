//jshint esversion: 6

// ROUTES -- TOPICS

const express = require('express');
const router = express.Router();
const db = require('../../models');
const Topic = db.topic;

//GET/api/topics  :  respond with all topics including the creator's name
router.get('/', (req, res) => {
  return Topic.findAll()
  .then(topic => {
    res.json(topic);
  });
});

// //POST/api/topics  :  create and respond with a new topic
router.post('/', (req, res) => {
  console.log('req.topic', req.topic);
  const topicId = req.body.id;
  const name = req.body.name;
  const createdAt = req.body.createdAt;
  const updatedAt = req.body.updatedAt;
  const created_By = req.body.created_By;

  //<<<---- Enter logic

  return Topic.create( { topicId: topicId, name: name, created_By: created_By });
});

// //PUT/api/topics/:id  :  update and respond with the updated topic
router.put('/:id', (req, res) => {
  let newTopic = req.body;
  let topicsId = req.params.id;

  return Topics.findById(topicsId)
  .then(topics => {
    if(req.topics.id === topics.id)
      return Topic.update(newInfo, {
        where: [{id: topicsId}]
      });
    //can redirect if desired here (remove above semi-colon)
  });
});

module.exports = router;