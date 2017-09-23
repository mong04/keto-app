// Import dependencies.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


// Tell Mongoose to use ES6 promises.
mongoose.Promise = Promise;

// Initialize app.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Import routes and give the server access to them.
// var routes = require('./controllers/controller');
// app.use('/', routes);
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.use(express.static(__dirname + '/public'));

// Determine whether to use local or remote database connection.
var connectionString;


mongoose.connect(process.env.MONGOLAB_CYAN_URI || 'mongodb://localhost/keto', {
    useMongoClient: true
  });

var db = mongoose.connection;

db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});
  
// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
  
var port = process.env.PORT || 3000;
// Listen on port 3000



app.listen(port, function() {
  console.log(`App running on port ${port}!`);
});
