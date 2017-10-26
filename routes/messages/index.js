// //jshint esversion: 6

// // ROUTES - MESSAGES

// const express = require('express');
// const router = express.Router;
// const db = require('../../models');
// const Messages = db.messages;

// //GET/api/messages/lates  :  respond with
// //- the latest 10 messages
// //- including the name of the topic
// //- and the author's name
// router.get('/', (req, res) => {
//   return Messages.findTen({
//     attributes: ['id', ['name', 'created_By']]
//   })
//   .then(messages => {
//     let locals = { messages: messages, name: name, created_By: created_By };
//     return res.render('./index', locals);
//   })
//   .catch((err) => {
//     let message = { message: 'Unable to locate the last ten messages'};
//     res.render('./error', message);
//   });
// });

// //POST/api/messages  :  create and respond with the new message
// route.post('/', (req, res) => {
//   console.log('req.message', req.message);
//   const messagesId = req.body.id;
//   const body = req.body.body;
//   const createdAt = req.body.createdAt;
//   const updatedAt = req.body.updatedAt;
//   const topic_id = req.body.topic_id;
//   const author_id = req.body.author_id;

//   //<<<---- Enter logic

//   return Mesages.create( {messagesId: id, body: body, createdAt: createdAt, updatedAt: updatedAt, topic_id: topic_id, author_id: author_id});

// });

// //GET/api/messages/by-topic/:topic_id  :  respond with all messages that belong to the topic by :topic_id, including the topic name, author's name, ordered by: createdAT ASC



// module.exports = router;