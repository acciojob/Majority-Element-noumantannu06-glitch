// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const majorElement = require('./script');

app.use(express.static(__dirname))

app.post('/majorityElementChecker',(req, res) => {
  const arr = req.body.arr
  const answer = majorElement(arr) 
  res.send({major:answer})
})

module.exports = app;
