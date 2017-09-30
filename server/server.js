const express = require('express');
const path = require('path');
var User = require('../models/User');
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 5000;

// Morgan
app.use(morgan('dev'));

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const mongoose = require('mongoose');
// Tell Mongoose to use ES6 promises
mongoose.Promise = Promise;

mongoose.connect(process.env.MONGOLAB_CYAN_URI || 'mongodb://localhost/keto', {
  useMongoClient: true
});

var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  User.find({}), function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  }
});

app.post('/api', function(req, res) {
  console.log(req.body.userInfo)
  var newUser = {};
  newUser.email = req.body.userInfo.email;
  var entry = new User(newUser);

  User.findOne({email: req.body.userInfo.email}, function(err, doc) {
    if (!doc) {
      console.log("no document")
      entry.save(function(err, doc) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(doc);
        }
      })
    }
  })
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});