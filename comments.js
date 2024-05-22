// create web server 
// create route for POST /comments
// create route for GET /comments
// create route for GET /comments/:commentId
// create route for PUT /comments/:commentId
// create route for DELETE /comments/:commentId

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');
const uuid = require('uuid/v4');

app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  const comment = req.body;
  comment.id = uuid();
  comments.push(comment);
  res.status(201).send(comment);
});

app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});

app.get('/comments/:commentId', (req, res) => {
  const comment = comments.find(c => c.id === req.params.commentId);
  if (!comment) {
    res.status(404).send();
    return;
  }
  res.status(200).send(comment);
});

app.put('/comments/:commentId', (req, res) => {
  const comment = comments.find(c => c.id === req.params.commentId);
  if (!comment) {
    res.status(404).send();
    return;
  }
  _.merge(comment, req.body);
  res.status(200).send(comment);
});

app.delete('/comments/:commentId', (req, res) => {
  const index = comments.findIndex(c => c.id === req.params.commentId);
  if (index === -1) {
    res.status(404).send();
    return;
  }
  comments.splice(index, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});